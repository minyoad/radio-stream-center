# 直播源管理系统 API 使用文档

本文档为第三方 App 或客户端提供接入直播源管理系统的 API 说明。本文档涵盖的大部分接口无需鉴权，适合作为数据源分发给客户端使用。

## 1. 通用导出接口 (订阅源)

供各大主流播放器（如 TiviMate, DIYP, 影视仓等）直接导入的格式。

### 1.1 获取 M3U 播放源

- **URL**: `/api/export/m3u`
- **Method**: `GET`
- **说明**: 返回标准 M3U 格式的播放列表。
- **Query 参数** (可选):
  - `category`: 按分类(标签)名称过滤。
  - `status`: 过滤源的状态 (例如 `active`，只导出连通的源)。
  - `limit`: 限制每个频道的播放源数量，默认 `10`。
- **返回值**: `text/plain` 格式的 M3U 数据。

### 1.2 获取 TXT 播放源

- **URL**: `/api/export/txt`
- **Method**: `GET`
- **说明**: 返回 TXT 格式 (频道名,播放URL) 的列表。
- **Query 参数** (可选): 与 M3U 接口的参数相同。
- **返回值**: `text/plain` 格式的 TXT 数据。

### 1.3 获取 JSON 格式数据

- **URL**: `/api/export/radio.json`
- **Method**: `GET`
- **说明**: 返回包含所有分组及其下频道的完整 JSON 树状结构数据。

### 1.4 获取 EPG 节目单 (XMLTV)

- **URL**: `/api/export/epg.xml`
- **Method**: `GET`
- **说明**: 返回标准 XMLTV 格式的 EPG 数据。
- **补充说明**: 也可请求 `/api/export/epg.xml.gz` 返回 gzip 压缩格式的 EPG 数据，节省网络带宽。

---

## 2. 开放频道接口 (App 客户端 API)

供自研 App 或小程序等客户端进行数据展示的 RESTful JSON 接口。

### 2.1 获取公共频道列表

- **URL**: `/api/public/channels`
- **Method**: `GET`
- **说明**: 获取频道列表 (支持分页、筛选和搜索)。
- **Query 参数** (可选):
  - `page`: 页码 (默认 `1`)
  - `pageSize`: 每页数量 (默认 `20`, 最大 `100`)
  - `keyword`: 搜索关键字 (匹配频道名称、别名)
  - `tagId`: 标签/分组 ID
  - `tagName`: 标签名称
  - `province`: 频道归属省份名称
  - `city`: 频道归属城市名称
  - `category`: 频道分类
  - `status`: 按频道状态筛选
- **返回示例**:
  ```json
  {
    "success": true,
    "data": [
      {
        "id": "12345",
        "name": "CCTV-1",
        "logo": "http://...",
        "tags": [{"id": "t1", "name": "央视"}],
        "category": "综合"
      }
    ],
    "total": 100,
    "page": 1,
    "pageSize": 20
  }
  ```

### 2.2 获取频道的所有播放源

- **URL**: `/api/public/channels/:id/sources`
- **Method**: `GET`
- **说明**: 获取指定频道的详细播放源列表。
- **路径参数**:
  - `id`: 频道 ID
- **Query 参数** (可选):
  - `status`: 仅返回指定状态的源 (例如 `active`)
- **返回示例**:
  ```json
  {
    "success": true,
    "channelId": "12345",
    "channelName": "CCTV-1",
    "sources": [
      {
        "id": "s1",
        "url": "http://...",
        "name": "线路1",
        "status": "active",
        "delay": 120,
        "bitrate": "1080P"
      }
    ]
  }
  ```

### 2.3 获取频道的播放线路 (简易版)

- **URL**: `/api/public/channels/:id/play-lines`
- **Method**: `GET`
- **说明**: 相比 `/sources` 接口，该接口仅返回核心的播放 URL、名称和延迟信息，专供播放器组件快速拉流和选路使用。
- **路径参数**:
  - `id`: 频道 ID
- **Query 参数** (可选):
  - `status`: 源状态 (如 `active`)

---

## 3. EPG (电子节目单) 接口

### 3.1 获取频道的某日节目单

- **URL**: `/api/epg/guide`
- **Method**: `GET`
- **说明**: 获取单个频道指定日期的节目播出时间表。
- **Query 参数**:
  - `channelId` (或 `tvgName`): 频道的唯一标识或 tvg-name。
  - `date`: 日期，格式 `YYYY-MM-DD` (若不传默认返回今日节目单)。
- **返回示例**:
  ```json
  {
    "success": true,
    "channel": "CCTV-1",
    "date": "2026-07-15",
    "programs": [
      {
        "title": "新闻联播",
        "start": "2026-07-15T19:00:00Z",
        "end": "2026-07-15T19:30:00Z"
      }
    ]
  }
  ```
