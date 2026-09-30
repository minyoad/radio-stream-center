# ==========================================
# 阶段 1: 构建阶段 (使用 node:20-slim 享受预编译 C++ 二进制，无需本地 gcc/make 编译)
# ==========================================
FROM node:20-slim AS builder

WORKDIR /app

# 可选构建参数：国内构建可传入 --build-arg NPM_REGISTRY=https://registry.npmmirror.com
ARG NPM_REGISTRY=https://registry.npmjs.org

# 复制依赖定义
COPY package*.json ./

# 安装完整依赖（better-sqlite3 在 slim/glibc 环境下直接秒级下载预编译二进制，无需 python3/gcc）
RUN npm ci --registry=${NPM_REGISTRY} || npm install --registry=${NPM_REGISTRY}

# 复制源码并构建前端和后端
COPY . .
RUN npm run build

# 剔除开发依赖，保留生产依赖
RUN npm prune --production --registry=${NPM_REGISTRY}


# ==========================================
# 阶段 2: 运行阶段 (超轻量生产环境)
# ==========================================
FROM node:20-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

# 从构建阶段复制必要文件
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# 创建持久化数据目录
RUN mkdir -p data

EXPOSE 3000

CMD ["npm", "run", "start"]
