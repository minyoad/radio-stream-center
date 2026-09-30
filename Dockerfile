# ==========================================
# 阶段 1: 构建阶段 (安装轻量级编译工具链，确保 better-sqlite3 100% 成功构建)
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# 安装必要的编译工具链（保障 better-sqlite3 在各种环境下稳定通过编译）
RUN apk add --no-cache python3 make g++

# 复制依赖定义文件
COPY package*.json ./

# 安装完整依赖 (默认使用官方源以适配 GitHub Actions 海外 Runner，也可传参指定国内源)
ARG NPM_REGISTRY=https://registry.npmjs.org
RUN npm install --registry=${NPM_REGISTRY} --no-audit --no-fund

# 复制源代码并执行前端及后端打包编译
COPY . .
RUN npm run build

# 剔除开发依赖，node_modules 中仅保留生产依赖及其编译产物
RUN npm prune --production --registry=${NPM_REGISTRY}


# ==========================================
# 阶段 2: 运行阶段 (仅包含纯净 Alpine 运行时，无任何 gcc/make/python 工具，镜像体积极小且安全)
# ==========================================
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# 复制生产依赖与构建产物
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# 创建持久化数据目录
RUN mkdir -p data

EXPOSE 3000

CMD ["npm", "run", "start"]
