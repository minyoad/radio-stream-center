// Preset Channel & Radio Logo Knowledge Base (预置台标信息库)
// Covers CCTV, Provincial Satellites, Hong Kong & Taiwan, Major International TV, National Radios, and Regional Radios.
// Uses fast, reliable jsDelivr mirrors, GitHub Raw CDN, and Wikimedia Commons.

export interface PresetLogoItem {
  id: string;
  name: string;
  category: "cctv" | "satellite" | "hktw" | "international" | "radio_national" | "radio_local" | "special";
  categoryLabel: string;
  logo: string;
  mirrorLogo?: string;
  aliases: string[];
  description?: string;
  frequency?: string;
}

export const PRESET_CATEGORIES: Array<{ key: PresetLogoItem["category"] | "all"; label: string }> = [
  { key: "all", label: "全部台标" },
  { key: "cctv", label: "央视频道" },
  { key: "satellite", label: "省级卫视" },
  { key: "hktw", label: "港澳台" },
  { key: "international", label: "国际名台" },
  { key: "radio_national", label: "国家广播" },
  { key: "radio_local", label: "省市广播" },
  { key: "special", label: "特色流派" }
];

export const PRESET_LOGOS: PresetLogoItem[] = [
  // ==================== 1. 央视频道 (CCTV & CGTN) ====================
  {
    id: "cctv1",
    name: "CCTV-1 综合",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV1.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV1.png",
    aliases: ["cctv1", "cctv 1", "cctv-1", "中央一台", "中央1台", "cctv1综合", "cctv综合"],
    description: "中国中央电视台综合频道"
  },
  {
    id: "cctv2",
    name: "CCTV-2 财经",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV2.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV2.png",
    aliases: ["cctv2", "cctv 2", "cctv-2", "中央二台", "中央2台", "cctv2财经", "cctv财经"],
    description: "中国中央电视台财经频道"
  },
  {
    id: "cctv3",
    name: "CCTV-3 综艺",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV3.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV3.png",
    aliases: ["cctv3", "cctv 3", "cctv-3", "中央三台", "中央3台", "cctv3综艺", "cctv综艺"],
    description: "中国中央电视台综艺频道"
  },
  {
    id: "cctv4",
    name: "CCTV-4 中文国际",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV4.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV4.png",
    aliases: ["cctv4", "cctv 4", "cctv-4", "中央四台", "中央4台", "cctv4中文国际", "cctv中文国际", "cctv4亚洲"],
    description: "中国中央电视台中文国际频道"
  },
  {
    id: "cctv4_europe",
    name: "CCTV-4 欧洲",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV4Europe.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV4Europe.png",
    aliases: ["cctv4欧洲", "cctv-4欧洲", "cctv4 europe"],
    description: "中国中央电视台中文国际频道（欧洲版）"
  },
  {
    id: "cctv4_america",
    name: "CCTV-4 美洲",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV4America.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV4America.png",
    aliases: ["cctv4美洲", "cctv-4美洲", "cctv4 america"],
    description: "中国中央电视台中文国际频道（美洲版）"
  },
  {
    id: "cctv5",
    name: "CCTV-5 体育",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV5.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV5.png",
    aliases: ["cctv5", "cctv 5", "cctv-5", "中央五台", "中央5台", "cctv5体育", "cctv体育"],
    description: "中国中央电视台体育频道"
  },
  {
    id: "cctv5plus",
    name: "CCTV-5+ 体育赛事",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV5Plus.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV5Plus.png",
    aliases: ["cctv5+", "cctv 5+", "cctv-5+", "cctv5plus", "中央五加", "体育赛事频道"],
    description: "中国中央电视台体育赛事频道"
  },
  {
    id: "cctv6",
    name: "CCTV-6 电影",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV6.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV6.png",
    aliases: ["cctv6", "cctv 6", "cctv-6", "中央六台", "中央6台", "cctv6电影", "cctv电影"],
    description: "中国中央电视台电影频道"
  },
  {
    id: "cctv7",
    name: "CCTV-7 国防军事",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV7.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV7.png",
    aliases: ["cctv7", "cctv 7", "cctv-7", "中央七台", "中央7台", "cctv7国防军事", "cctv国防军事", "cctv军事"],
    description: "中国中央电视台国防军事频道"
  },
  {
    id: "cctv8",
    name: "CCTV-8 电视剧",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV8.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV8.png",
    aliases: ["cctv8", "cctv 8", "cctv-8", "中央八台", "中央8台", "cctv8电视剧", "cctv电视剧"],
    description: "中国中央电视台电视剧频道"
  },
  {
    id: "cctv9",
    name: "CCTV-9 纪录",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV9.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV9.png",
    aliases: ["cctv9", "cctv 9", "cctv-9", "中央九台", "中央9台", "cctv9纪录", "cctv纪录"],
    description: "中国中央电视台纪录频道"
  },
  {
    id: "cctv10",
    name: "CCTV-10 科教",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV10.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV10.png",
    aliases: ["cctv10", "cctv 10", "cctv-10", "中央十台", "中央10台", "cctv10科教", "cctv科教"],
    description: "中国中央电视台科教频道"
  },
  {
    id: "cctv11",
    name: "CCTV-11 戏曲",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV11.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV11.png",
    aliases: ["cctv11", "cctv 11", "cctv-11", "中央十一台", "中央11台", "cctv11戏曲", "cctv戏曲"],
    description: "中国中央电视台戏曲频道"
  },
  {
    id: "cctv12",
    name: "CCTV-12 社会与法",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV12.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV12.png",
    aliases: ["cctv12", "cctv 12", "cctv-12", "中央十二台", "中央12台", "cctv12社会与法", "cctv社会与法", "社会与法频道"],
    description: "中国中央电视台社会与法频道"
  },
  {
    id: "cctv13",
    name: "CCTV-13 新闻",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV13.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV13.png",
    aliases: ["cctv13", "cctv 13", "cctv-13", "中央十三台", "中央13台", "cctv13新闻", "cctv新闻", "新闻频道", "央视新闻"],
    description: "中国中央电视台新闻频道"
  },
  {
    id: "cctv14",
    name: "CCTV-14 少儿",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV14.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV14.png",
    aliases: ["cctv14", "cctv 14", "cctv-14", "中央十四台", "中央14台", "cctv14少儿", "cctv少儿", "少儿频道", "央视少儿"],
    description: "中国中央电视台少儿频道"
  },
  {
    id: "cctv15",
    name: "CCTV-15 音乐",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV15.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV15.png",
    aliases: ["cctv15", "cctv 15", "cctv-15", "中央十五台", "中央15台", "cctv15音乐", "cctv音乐", "音乐频道", "央视音乐"],
    description: "中国中央电视台音乐频道"
  },
  {
    id: "cctv16",
    name: "CCTV-16 奥林匹克",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV16.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV16.png",
    aliases: ["cctv16", "cctv 16", "cctv-16", "中央十六台", "中央16台", "cctv16奥林匹克", "奥林匹克频道", "cctv奥运"],
    description: "中国中央电视台奥林匹克频道"
  },
  {
    id: "cctv17",
    name: "CCTV-17 农业农村",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV17.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV17.png",
    aliases: ["cctv17", "cctv 17", "cctv-17", "中央十七台", "中央17台", "cctv17农业农村", "cctv农业农村", "农业农村频道"],
    description: "中国中央电视台农业农村频道"
  },
  {
    id: "cctv4k",
    name: "CCTV-4K 超高清",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV4K.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV4K.png",
    aliases: ["cctv 4k", "cctv4k", "cctv-4k", "央视4k", "4k超高清"],
    description: "中国中央电视台4K超高清频道"
  },
  {
    id: "cctv8k",
    name: "CCTV-8K 超高清",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV8K.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CCTV8K.png",
    aliases: ["cctv 8k", "cctv8k", "cctv-8k", "央视8k", "8k超高清"],
    description: "中国中央电视台8K超高清频道"
  },
  {
    id: "cgtn",
    name: "CGTN",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CGTN.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CGTN.png",
    aliases: ["cgtn", "cctv9英语", "中国国际电视台", "cgtn英语新闻"],
    description: "中国国际电视台英语新闻频道"
  },
  {
    id: "cgtn_doc",
    name: "CGTN Documentary",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CGTNDocumentary.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CGTNDocumentary.png",
    aliases: ["cgtn纪录", "cgtn documentary", "cgtn doc"],
    description: "中国国际电视台纪录频道"
  },
  {
    id: "cgtn_french",
    name: "CGTN 法语",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CGTNFrancais.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CGTNFrancais.png",
    aliases: ["cgtn法语", "cgtn francais"],
    description: "中国国际电视台法语频道"
  },
  {
    id: "cgtn_russian",
    name: "CGTN 俄语",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CGTNRussian.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CGTNRussian.png",
    aliases: ["cgtn俄语", "cgtn russian"],
    description: "中国国际电视台俄语频道"
  },
  {
    id: "cgtn_arabic",
    name: "CGTN 阿拉伯语",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CGTNArabic.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CGTNArabic.png",
    aliases: ["cgtn阿拉伯语", "cgtn arabic"],
    description: "中国国际电视台阿拉伯语频道"
  },
  {
    id: "cgtn_spanish",
    name: "CGTN 西班牙语",
    category: "cctv",
    categoryLabel: "央视频道",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CGTNEspanol.png",
    mirrorLogo: "https://live.fanmingming.com/tv/CGTNEspanol.png",
    aliases: ["cgtn西班牙语", "cgtn espanol"],
    description: "中国国际电视台西班牙语频道"
  },

  // ==================== 2. 省级卫视 (Provincial Satellite TVs) ====================
  {
    id: "hunan_tv",
    name: "湖南卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/湖南卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/湖南卫视.png",
    aliases: ["湖南卫视", "湖南台", "芒果tv", "湖南电视台", "hunan tv", "hunantv"],
    description: "湖南广播电视台卫星频道"
  },
  {
    id: "zhejiang_tv",
    name: "浙江卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/浙江卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/浙江卫视.png",
    aliases: ["浙江卫视", "浙江台", "中国蓝", "浙江电视台", "zhejiang tv"],
    description: "浙江广播电视集团卫星频道"
  },
  {
    id: "jiangsu_tv",
    name: "江苏卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/江苏卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/江苏卫视.png",
    aliases: ["江苏卫视", "江苏台", "荔枝台", "江苏电视台", "jiangsu tv"],
    description: "江苏省广播电视总台卫星频道"
  },
  {
    id: "dragon_tv",
    name: "东方卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/东方卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/东方卫视.png",
    aliases: ["东方卫视", "上海卫视", "番茄台", "上海东方卫视", "dragon tv"],
    description: "上海广播电视台东方卫视频道"
  },
  {
    id: "beijing_tv",
    name: "北京卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/北京卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/北京卫视.png",
    aliases: ["北京卫视", "北京台", "brtv", "btv", "北京电视台", "beijing tv"],
    description: "北京广播电视台卫星频道"
  },
  {
    id: "guangdong_tv",
    name: "广东卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/广东卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/广东卫视.png",
    aliases: ["广东卫视", "广东台", "grt", "广东广播电视台", "guangdong tv"],
    description: "广东广播电视台卫星频道"
  },
  {
    id: "shenzhen_tv",
    name: "深圳卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/深圳卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/深圳卫视.png",
    aliases: ["深圳卫视", "深圳台", "szmg", "shenzhen tv"],
    description: "深圳广播电影电视集团卫星频道"
  },
  {
    id: "shandong_tv",
    name: "山东卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/山东卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/山东卫视.png",
    aliases: ["山东卫视", "山东台", "shandong tv"],
    description: "山东广播电视台卫星频道"
  },
  {
    id: "anhui_tv",
    name: "安徽卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/安徽卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/安徽卫视.png",
    aliases: ["安徽卫视", "安徽台", "海豚台", "anhui tv"],
    description: "安徽广播电视台卫星频道"
  },
  {
    id: "henan_tv",
    name: "河南卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/河南卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/河南卫视.png",
    aliases: ["河南卫视", "河南台", "henan tv"],
    description: "河南广播电视台卫星频道"
  },
  {
    id: "sichuan_tv",
    name: "四川卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/四川卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/四川卫视.png",
    aliases: ["四川卫视", "四川台", "sichuan tv"],
    description: "四川广播电视台卫星频道"
  },
  {
    id: "chongqing_tv",
    name: "重庆卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/重庆卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/重庆卫视.png",
    aliases: ["重庆卫视", "重庆台", "chongqing tv"],
    description: "重庆广播电视集团卫星频道"
  },
  {
    id: "hubei_tv",
    name: "湖北卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/湖北卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/湖北卫视.png",
    aliases: ["湖北卫视", "湖北台", "hubei tv"],
    description: "湖北广播电视台卫星频道"
  },
  {
    id: "liaoning_tv",
    name: "辽宁卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/辽宁卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/辽宁卫视.png",
    aliases: ["辽宁卫视", "辽宁台", "liaoning tv"],
    description: "辽宁广播电视台卫星频道"
  },
  {
    id: "heilongjiang_tv",
    name: "黑龙江卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/黑龙江卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/黑龙江卫视.png",
    aliases: ["黑龙江卫视", "龙江台", "heilongjiang tv"],
    description: "黑龙江广播电视台卫星频道"
  },
  {
    id: "jilin_tv",
    name: "吉林卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/吉林卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/吉林卫视.png",
    aliases: ["吉林卫视", "吉林台", "jilin tv"],
    description: "吉林广播电视台卫星频道"
  },
  {
    id: "tianjin_tv",
    name: "天津卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/天津卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/天津卫视.png",
    aliases: ["天津卫视", "天津台", "tianjin tv"],
    description: "天津广播电视台卫星频道"
  },
  {
    id: "jiangxi_tv",
    name: "江西卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/江西卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/江西卫视.png",
    aliases: ["江西卫视", "江西台", "jiangxi tv"],
    description: "江西广播电视台卫星频道"
  },
  {
    id: "hebei_tv",
    name: "河北卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/河北卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/河北卫视.png",
    aliases: ["河北卫视", "河北台", "hebei tv"],
    description: "河北广播电视台卫星频道"
  },
  {
    id: "guizhou_tv",
    name: "贵州卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/贵州卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/贵州卫视.png",
    aliases: ["贵州卫视", "贵州台", "guizhou tv"],
    description: "贵州广播电视台卫星频道"
  },
  {
    id: "yunnan_tv",
    name: "云南卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/云南卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/云南卫视.png",
    aliases: ["云南卫视", "云南台", "yunnan tv"],
    description: "云南广播电视台卫星频道"
  },
  {
    id: "guangxi_tv",
    name: "广西卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/广西卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/广西卫视.png",
    aliases: ["广西卫视", "广西台", "guangxi tv"],
    description: "广西广播电视台卫星频道"
  },
  {
    id: "hainan_tv",
    name: "海南卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/海南卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/海南卫视.png",
    aliases: ["海南卫视", "海南台", "旅游卫视", "hainan tv"],
    description: "海南广播电视总台卫星频道"
  },
  {
    id: "shaanxi_tv",
    name: "陕西卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/陕西卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/陕西卫视.png",
    aliases: ["陕西卫视", "陕西台", "shaanxi tv"],
    description: "陕西广电融媒体集团卫星频道"
  },
  {
    id: "shanxi_tv",
    name: "山西卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/山西卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/山西卫视.png",
    aliases: ["山西卫视", "山西台", "shanxi tv"],
    description: "山西广播电视台卫星频道"
  },
  {
    id: "southeast_tv",
    name: "东南卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/东南卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/东南卫视.png",
    aliases: ["东南卫视", "福建东南卫视", "setv", "福建台"],
    description: "福建省广播影视集团东南卫星频道"
  },
  {
    id: "xiamen_tv",
    name: "厦门卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/厦门卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/厦门卫视.png",
    aliases: ["厦门卫视", "厦门台", "xiamen tv"],
    description: "厦门广播电视集团卫星频道"
  },
  {
    id: "neimenggu_tv",
    name: "内蒙古卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/内蒙古卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/内蒙古卫视.png",
    aliases: ["内蒙古卫视", "内蒙卫视", "neimenggu tv"],
    description: "内蒙古广播电视台卫星频道"
  },
  {
    id: "xinjiang_tv",
    name: "新疆卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/新疆卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/新疆卫视.png",
    aliases: ["新疆卫视", "新疆台", "xinjiang tv"],
    description: "新疆广播电视台卫星频道"
  },
  {
    id: "xizang_tv",
    name: "西藏卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/西藏卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/西藏卫视.png",
    aliases: ["西藏卫视", "西藏台", "tibet tv"],
    description: "西藏广播电视台卫星频道"
  },
  {
    id: "ningxia_tv",
    name: "宁夏卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/宁夏卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/宁夏卫视.png",
    aliases: ["宁夏卫视", "宁夏台", "ningxia tv"],
    description: "宁夏广播电视台卫星频道"
  },
  {
    id: "qinghai_tv",
    name: "青海卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/青海卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/青海卫视.png",
    aliases: ["青海卫视", "青海台", "qinghai tv"],
    description: "青海广播电视台卫星频道"
  },
  {
    id: "bingtuan_tv",
    name: "兵团卫视",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/兵团卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/兵团卫视.png",
    aliases: ["兵团卫视", "新疆兵团卫视"],
    description: "新疆生产建设兵团广播电视台卫星频道"
  },
  {
    id: "jinying_cartoon",
    name: "金鹰卡通",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/金鹰卡通.png",
    mirrorLogo: "https://live.fanmingming.com/tv/金鹰卡通.png",
    aliases: ["金鹰卡通", "金鹰卡通卫视", "湖南少儿", "aniworld"],
    description: "湖南广播电视台金鹰卡通卫视"
  },
  {
    id: "kaku_cartoon",
    name: "卡酷少儿",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/卡酷少儿.png",
    mirrorLogo: "https://live.fanmingming.com/tv/卡酷少儿.png",
    aliases: ["卡酷少儿", "北京卡酷", "卡酷卡通", "kaku"],
    description: "北京广播电视台卡酷少儿卫视"
  },
  {
    id: "jiajia_cartoon",
    name: "嘉佳卡通",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/嘉佳卡通.png",
    mirrorLogo: "https://live.fanmingming.com/tv/嘉佳卡通.png",
    aliases: ["嘉佳卡通", "广东嘉佳", "jiajia"],
    description: "广东广播电视台嘉佳卡通卫视"
  },
  {
    id: "youman_cartoon",
    name: "优漫卡通",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/优漫卡通.png",
    mirrorLogo: "https://live.fanmingming.com/tv/优漫卡通.png",
    aliases: ["优漫卡通", "江苏优漫"],
    description: "江苏省广播电视总台优漫卡通卫视"
  },
  {
    id: "jishi_humanity",
    name: "纪实人文",
    category: "satellite",
    categoryLabel: "省级卫视",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/纪实人文.png",
    mirrorLogo: "https://live.fanmingming.com/tv/纪实人文.png",
    aliases: ["纪实人文", "上海纪实", "纪实频道"],
    description: "上海广播电视台纪实人文频道"
  },

  // ==================== 3. 港澳台频道 ====================
  {
    id: "tvb_jade",
    name: "翡翠台",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/翡翠台.png",
    mirrorLogo: "https://live.fanmingming.com/tv/翡翠台.png",
    aliases: ["翡翠台", "tvb jade", "tvb翡翠台", "香港翡翠台", "jade tvb"],
    description: "香港电视广播有限公司旗舰粤语频道"
  },
  {
    id: "tvb_pearl",
    name: "明珠台",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/明珠台.png",
    mirrorLogo: "https://live.fanmingming.com/tv/明珠台.png",
    aliases: ["明珠台", "tvb pearl", "香港明珠台"],
    description: "香港电视广播有限公司旗舰英语频道"
  },
  {
    id: "tvb_j2",
    name: "J2 / TVB Plus",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/J2.png",
    mirrorLogo: "https://live.fanmingming.com/tv/J2.png",
    aliases: ["j2", "tvb j2", "tvb plus"],
    description: "香港电视广播有限公司娱乐综合频道"
  },
  {
    id: "tvb_news",
    name: "无线新闻台",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/无线新闻台.png",
    mirrorLogo: "https://live.fanmingming.com/tv/无线新闻台.png",
    aliases: ["无线新闻台", "tvb news", "互动新闻台", "tvb新闻"],
    description: "香港电视广播有限公司24小时新闻频道"
  },
  {
    id: "phoenix_chinese",
    name: "凤凰卫视中文台",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/凤凰中文.png",
    mirrorLogo: "https://live.fanmingming.com/tv/凤凰中文.png",
    aliases: ["凤凰卫视中文台", "凤凰中文", "凤凰台", "phoenix chinese", "phoenix tv"],
    description: "凤凰卫视旗舰中文综合频道"
  },
  {
    id: "phoenix_info",
    name: "凤凰卫视资讯台",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/凤凰资讯.png",
    mirrorLogo: "https://live.fanmingming.com/tv/凤凰资讯.png",
    aliases: ["凤凰卫视资讯台", "凤凰资讯", "phoenix info", "phoenix inews"],
    description: "凤凰卫视24小时华语新闻资讯频道"
  },
  {
    id: "phoenix_hk",
    name: "凤凰卫视香港台",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/凤凰香港.png",
    mirrorLogo: "https://live.fanmingming.com/tv/凤凰香港.png",
    aliases: ["凤凰卫视香港台", "凤凰香港", "phoenix hong kong"],
    description: "凤凰卫视粤语综合广播频道"
  },
  {
    id: "macau_lotus",
    name: "澳门莲花卫视",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/澳门莲花.png",
    mirrorLogo: "https://live.fanmingming.com/tv/澳门莲花.png",
    aliases: ["澳门莲花卫视", "莲花卫视", "macau lotus tv"],
    description: "澳门莲花卫视频道"
  },
  {
    id: "mastv",
    name: "澳亚卫视",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/澳亚卫视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/澳亚卫视.png",
    aliases: ["澳亚卫视", "mastv"],
    description: "澳门澳亚卫视频道"
  },
  {
    id: "cti_news",
    name: "中天新闻台",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/中天新闻.png",
    mirrorLogo: "https://live.fanmingming.com/tv/中天新闻.png",
    aliases: ["中天新闻", "中天新闻台", "cti news", "cti52"],
    description: "台湾中天电视新闻频道"
  },
  {
    id: "tvbs_news",
    name: "TVBS 新闻台",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/TVBS新闻.png",
    mirrorLogo: "https://live.fanmingming.com/tv/TVBS新闻.png",
    aliases: ["tvbs新闻", "tvbs新闻台", "tvbs-n", "tvbs news"],
    description: "台湾TVBS无线卫星新闻频道"
  },
  {
    id: "tvbs",
    name: "TVBS 欢乐台",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/TVBS.png",
    mirrorLogo: "https://live.fanmingming.com/tv/TVBS.png",
    aliases: ["tvbs", "tvbs欢乐台", "tvbs g"],
    description: "台湾TVBS综合娱乐频道"
  },
  {
    id: "ebc_news",
    name: "东森新闻台",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/东森新闻.png",
    mirrorLogo: "https://live.fanmingming.com/tv/东森新闻.png",
    aliases: ["东森新闻", "东森新闻台", "ebc news"],
    description: "台湾东森电视新闻频道"
  },
  {
    id: "set_news",
    name: "三立新闻台",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/三立新闻.png",
    mirrorLogo: "https://live.fanmingming.com/tv/三立新闻.png",
    aliases: ["三立新闻", "三立新闻台", "set news"],
    description: "台湾三立电视新闻频道"
  },
  {
    id: "ftv",
    name: "民视无线台",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/民视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/民视.png",
    aliases: ["民视", "民间全民电视", "ftv"],
    description: "台湾民间全民电视公司无线台"
  },
  {
    id: "ttv",
    name: "台视主频",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/台视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/台视.png",
    aliases: ["台视", "台湾电视公司", "ttv"],
    description: "台湾电视公司主频道"
  },
  {
    id: "ctv",
    name: "中视主频",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/中视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/中视.png",
    aliases: ["中视", "中国电视公司", "ctv"],
    description: "中国电视公司主频道"
  },
  {
    id: "cts",
    name: "华视主频",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/华视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/华视.png",
    aliases: ["华视", "中华电视公司", "cts"],
    description: "中华电视公司主频道"
  },
  {
    id: "pts",
    name: "公视主频",
    category: "hktw",
    categoryLabel: "港澳台",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/公视.png",
    mirrorLogo: "https://live.fanmingming.com/tv/公视.png",
    aliases: ["公视", "公共电视", "pts"],
    description: "台湾公共电视台"
  },

  // ==================== 4. 国际著名频道 ====================
  {
    id: "bbc_one",
    name: "BBC One",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/BBC_One_logo_2021.svg/500px-BBC_One_logo_2021.svg.png",
    aliases: ["bbc one", "bbc 1", "bbc1", "bbcone", "英国广播公司一台"],
    description: "BBC One 英国广播公司第一台旗舰频道"
  },
  {
    id: "bbc_two",
    name: "BBC Two",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/BBC_Two_logo_2021.svg/500px-BBC_Two_logo_2021.svg.png",
    aliases: ["bbc two", "bbc 2", "bbc2", "bbctwo"],
    description: "BBC Two 英国广播公司第二台综合频道"
  },
  {
    id: "bbc_three",
    name: "BBC Three",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/BBC_Three_2022.svg/500px-BBC_Three_2022.svg.png",
    aliases: ["bbc three", "bbc 3", "bbc3", "bbcthree"],
    description: "BBC Three 英国广播公司青年文化频道"
  },
  {
    id: "bbc_four",
    name: "BBC Four",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/BBC_Four_logo_2021.svg/500px-BBC_Four_logo_2021.svg.png",
    aliases: ["bbc four", "bbc 4", "bbc4", "bbcfour"],
    description: "BBC Four 英国广播公司艺术人文纪录频道"
  },
  {
    id: "bbc_news",
    name: "BBC News",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2022.svg/500px-BBC_News_2022.svg.png",
    aliases: ["bbc news", "bbc world news", "bbc新闻"],
    description: "BBC 24小时全球滚动新闻频道"
  },
  {
    id: "bbc_scotland",
    name: "BBC Scotland",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/BBC_Scotland_2021_%28channel%29.svg/500px-BBC_Scotland_2021_%28channel%29.svg.png",
    aliases: ["bbc scotland", "苏格兰bbc"],
    description: "BBC 苏格兰公共广播电视频道"
  },
  {
    id: "bbc_alba",
    name: "BBC Alba",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/BBC_Alba_2021.svg/500px-BBC_Alba_2021.svg.png",
    aliases: ["bbc alba", "alba"],
    description: "BBC 盖尔语频道"
  },
  {
    id: "itv1",
    name: "ITV 1",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/ITV1_logo_%282022%29.svg/500px-ITV1_logo_%282022%29.svg.png",
    aliases: ["itv 1", "itv1", "itv", "英国独立电视台一台"],
    description: "英国独立电视台第一频道"
  },
  {
    id: "itv2",
    name: "ITV 2",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://i.imgur.com/Ji65OXG.png",
    aliases: ["itv 2", "itv2"],
    description: "英国独立电视台第二频道"
  },
  {
    id: "itv3",
    name: "ITV 3",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://i.imgur.com/vYNyYGx.png",
    aliases: ["itv 3", "itv3"],
    description: "英国独立电视台第三频道经典剧场"
  },
  {
    id: "itv4",
    name: "ITV 4",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/ITV4_logo_%282022%29.svg/500px-ITV4_logo_%282022%29.svg.png",
    aliases: ["itv 4", "itv4"],
    description: "英国独立电视台第四频道体育与动作娱乐"
  },
  {
    id: "channel4",
    name: "Channel 4",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Channel_4_logo_2015.svg/500px-Channel_4_logo_2015.svg.png",
    aliases: ["channel 4", "channel4", "c4", "英国第四台"],
    description: "英国第四电视频道"
  },
  {
    id: "channel5",
    name: "Channel 5",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Channel_5_%28UK%29_2016.svg/500px-Channel_5_%28UK%29_2016.svg.png",
    aliases: ["channel 5", "channel5", "c5", "英国第五台"],
    description: "英国第五电视频道"
  },
  {
    id: "stv",
    name: "STV",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/STV_logo_2014.png/500px-STV_logo_2014.png",
    aliases: ["stv", "scottish tv", "苏格兰电视台"],
    description: "苏格兰商业独立电视"
  },
  {
    id: "sky_news",
    name: "Sky News",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Sky_News_logo_2020.svg/500px-Sky_News_logo_2020.svg.png",
    aliases: ["sky news", "天空新闻", "sky新闻"],
    description: "英国天空广播公司24小时国际新闻频道"
  },
  {
    id: "sky_sports",
    name: "Sky Sports",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Sky_Sports_logo_2020.svg/500px-Sky_Sports_logo_2020.svg.png",
    aliases: ["sky sports", "天空体育", "skysports"],
    description: "英国天空体育频道旗舰台"
  },
  {
    id: "cnn",
    name: "CNN",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/500px-CNN.svg.png",
    aliases: ["cnn", "cnn news", "美国有线电视新闻网"],
    description: "美国有线电视新闻网"
  },
  {
    id: "hbo",
    name: "HBO",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HBO_logo.svg/500px-HBO_logo.svg.png",
    aliases: ["hbo", "hbo hd", "家庭影院频道"],
    description: "美国家庭影院付费电视频道"
  },
  {
    id: "discovery",
    name: "Discovery Channel",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Discovery_Channel_2019.svg/500px-Discovery_Channel_2019.svg.png",
    aliases: ["discovery", "探索频道", "discovery channel"],
    description: "全球知名科学与自然纪录片探索频道"
  },
  {
    id: "natgeo",
    name: "National Geographic",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/National_Geographic_Logo.svg/500px-National_Geographic_Logo.svg.png",
    aliases: ["national geographic", "nat geo", "国家地理", "国家地理频道"],
    description: "美国国家地理电视频道"
  },
  {
    id: "animal_planet",
    name: "Animal Planet",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Animal_Planet_logo_2018.svg/500px-Animal_Planet_logo_2018.svg.png",
    aliases: ["animal planet", "动物星球", "动物星球频道"],
    description: "探索传媒旗下动物与自然探索频道"
  },
  {
    id: "espn",
    name: "ESPN",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/ESPN_wordmark.svg/500px-ESPN_wordmark.svg.png",
    aliases: ["espn", "espn sports", "娱乐与体育节目电视网"],
    description: "美国全美娱乐与体育电视网"
  },
  {
    id: "bloomberg",
    name: "Bloomberg TV",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bloomberg_Television_logo_%282023%29.svg/500px-Bloomberg_Television_logo_%282023%29.svg.png",
    aliases: ["bloomberg", "彭博", "彭博电视", "bloomberg tv"],
    description: "彭博财经全球24小时电视网络"
  },
  {
    id: "nhk_world",
    name: "NHK World-Japan",
    category: "international",
    categoryLabel: "国际名台",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/NHK_World-Japan_2020.svg/500px-NHK_World-Japan_2020.svg.png",
    aliases: ["nhk", "nhk world", "日本广播协会", "nhk japan"],
    description: "日本广播协会国际英语卫星电视频道"
  },

  // ==================== 5. 国家级广播 (CNR / 国家广播) ====================
  {
    id: "cnr1",
    name: "中国之声",
    category: "radio_national",
    categoryLabel: "国家广播",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV13.png",
    aliases: ["中国之声", "cnr1", "cnr 1", "中央人民广播电台中国之声", "中央广播电视总台中国之声", "国家广播中国之声"],
    description: "中央广播电视总台旗舰新闻综合广播",
    frequency: "FM 106.1 / AM 540"
  },
  {
    id: "cnr2",
    name: "经济之声",
    category: "radio_national",
    categoryLabel: "国家广播",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV2.png",
    aliases: ["经济之声", "cnr2", "cnr 2", "中央人民广播电台经济之声"],
    description: "中央广播电视总台国家财经广播",
    frequency: "FM 96.6"
  },
  {
    id: "cnr3",
    name: "音乐之声 MusicRadio",
    category: "radio_national",
    categoryLabel: "国家广播",
    logo: "https://cdn.jsdelivr.net/gh/fanmingming/live@main/tv/CCTV15.png",
    aliases: ["音乐之声", "musicradio", "cnr3", "cnr 3", "中央音乐广播"],
    description: "中央广播电视总台国家流行音乐广播",
    frequency: "FM 90.0"
  },
  {
    id: "cnr_traffic",
    name: "中国交通广播",
    category: "radio_national",
    categoryLabel: "国家广播",
    logo: "https://pic.qtfm.cn/sso/48/1641437453117_JxQnTn1vv.jpeg",
    aliases: ["中国交通广播", "交通广播", "cnr交通", "全国交通广播"],
    description: "中央广播电视总台国家级应急与交通专业广播",
    frequency: "FM 99.6"
  },
  {
    id: "cnr_classic_music",
    name: "经典音乐广播",
    category: "radio_national",
    categoryLabel: "国家广播",
    logo: "https://pic.qtfm.cn/2017/0424/20170424025444.jpeg",
    aliases: ["经典音乐广播", "经典音乐", "cnr经典音乐"],
    description: "中央广播电视总台高雅与经典音乐广播",
    frequency: "FM 101.8"
  },
  {
    id: "hit_fm",
    name: "Hit FM 劲曲调频",
    category: "radio_national",
    categoryLabel: "国家广播",
    logo: "https://pic.qtfm.cn/2014/0909/20140909125130474.jpg",
    aliases: ["hit fm", "hitfm", "劲曲调频", "cri hit fm", "cri劲曲调频"],
    description: "中国国际广播电台欧美流行音乐电台",
    frequency: "FM 88.7"
  },
  {
    id: "ez_fm",
    name: "EZFM 轻松调频",
    category: "radio_national",
    categoryLabel: "国家广播",
    logo: "https://pic.qtfm.cn/2014/0909/20140909123511693.jpg",
    aliases: ["ezfm", "ez fm", "轻松调频", "cri轻松调频"],
    description: "中国国际广播电台双语流行音乐生活电台",
    frequency: "FM 91.5"
  },
  {
    id: "cri_news",
    name: "环球资讯广播",
    category: "radio_national",
    categoryLabel: "国家广播",
    logo: "https://pic.qtfm.cn/2015/0202/20150202170847551.jpg",
    aliases: ["环球资讯广播", "环球资讯", "cri news radio", "cri环球资讯"],
    description: "中国国际广播电台国际新闻资讯广播",
    frequency: "FM 90.5"
  },
  {
    id: "greater_bay_radio",
    name: "大湾区之声",
    category: "radio_national",
    categoryLabel: "国家广播",
    logo: "https://pic.qtfm.cn/2022/0729/20220729092142.jpeg",
    aliases: ["大湾区之声", "粤港澳大湾区之声", "香港之声", "cnr7"],
    description: "中央广播电视总台面向粤港澳大湾区广播",
    frequency: "FM 101.2 / AM 1215"
  },

  // ==================== 6. 省市重点广播电台 ====================
  {
    id: "beijing_traffic_radio",
    name: "北京交通广播",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/2019/0227/20190227023249.png",
    aliases: ["北京交通广播", "北京交通台", "一路畅通"],
    description: "北京人民广播电台交通广播",
    frequency: "FM 103.9"
  },
  {
    id: "beijing_music_radio",
    name: "北京音乐广播",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/2017/0424/20170424025444.jpeg",
    aliases: ["北京音乐广播", "北京音乐台"],
    description: "北京人民广播电台音乐广播",
    frequency: "FM 97.4"
  },
  {
    id: "beijing_news_radio",
    name: "北京新闻广播",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/2015/0514/2015051417385422.jpg",
    aliases: ["北京新闻广播", "北京新闻台"],
    description: "北京人民广播电台主体新闻频率",
    frequency: "FM 94.5 / AM 828"
  },
  {
    id: "beijing_arts_radio",
    name: "北京文艺广播",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/sso/198/1631520087008_cMpTFBNNx.jpeg",
    aliases: ["北京文艺广播", "北京文艺台", "娱乐调频87.6"],
    description: "北京人民广播电台文艺广播",
    frequency: "FM 87.6"
  },
  {
    id: "shanghai_traffic_radio",
    name: "上海交通广播",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/sso/48/1641437453117_JxQnTn1vv.jpeg",
    aliases: ["上海交通广播", "上海交通台"],
    description: "上海第一家交通广播应急广播",
    frequency: "FM 105.7 / AM 648"
  },
  {
    id: "shanghai_donggan101",
    name: "上海动感101",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/2014/0909/20140909123511693.jpg",
    aliases: ["动感101", "上海动感101", "东方风云榜", "fm101.7"],
    description: "上海SMG旗下东方风云榜流行音乐电台",
    frequency: "FM 101.7"
  },
  {
    id: "shanghai_classic947",
    name: "上海经典947",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/sso/48/1641437907698_k0NNOUP54.jpeg",
    aliases: ["经典947", "上海经典947", "经典音乐广播947"],
    description: "中国内地唯一专业经典音乐广播",
    frequency: "FM 94.7"
  },
  {
    id: "shanghai_loveradio",
    name: "上海 Love Radio 103.7",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/2014/0909/20140909125130474.jpg",
    aliases: ["love radio", "loveradio", "上海流行音乐loveradio", "fm103.7"],
    description: "上海SMG旗下都市流行慢生活电台",
    frequency: "FM 103.7"
  },
  {
    id: "shanghai_cbn",
    name: "第一财经广播",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/sso/48/1641438475219_mv9SoJP78.jpeg",
    aliases: ["第一财经广播", "一财广播", "上海第一财经"],
    description: "上海专业财经特色广播",
    frequency: "FM 97.7"
  },
  {
    id: "guangdong_music_radio",
    name: "广东音乐之声",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/sso/48/1641437907698_k0NNOUP54.jpeg",
    aliases: ["广东音乐之声", "音乐之声fm99.3", "音乐之声广东"],
    description: "华南地区极具影响力的华语流行音乐广播",
    frequency: "FM 99.3"
  },
  {
    id: "guangdong_yangcheng_traffic",
    name: "广东羊城交通广播",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/sso/48/1641437453117_JxQnTn1vv.jpeg",
    aliases: ["羊城交通台", "羊城交通广播", "广东羊城交通台"],
    description: "广东广播电视台羊城交通广播",
    frequency: "FM 105.2"
  },
  {
    id: "guangdong_pearl_radio",
    name: "广东珠江经济台",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/2022/0729/20220729092142.jpeg",
    aliases: ["珠江经济台", "广东珠江经济台", "珠江台广播"],
    description: "中国第一家经济广播电台",
    frequency: "FM 97.4"
  },
  {
    id: "jiangsu_traffic_radio",
    name: "江苏交通广播网",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/sso/48/1641437453117_JxQnTn1vv.jpeg",
    aliases: ["江苏交通广播网", "江苏交广", "交广网101.1"],
    description: "江苏省广播电视总台交通广播网",
    frequency: "FM 101.1"
  },
  {
    id: "zhejiang_traffic_radio",
    name: "浙江交通之声",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/sso/48/1641437453117_JxQnTn1vv.jpeg",
    aliases: ["浙江交通之声", "浙江交广", "fm93"],
    description: "浙江广播电视集团交通之声",
    frequency: "FM 93.0"
  },
  {
    id: "sichuan_traffic_radio",
    name: "四川交通广播",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/sso/48/1641437453117_JxQnTn1vv.jpeg",
    aliases: ["四川交通广播", "四川交广", "fm101.7四川"],
    description: "四川广播电视台交通广播",
    frequency: "FM 101.7"
  },
  {
    id: "chongqing_music_radio",
    name: "重庆音乐广播",
    category: "radio_local",
    categoryLabel: "省市广播",
    logo: "https://pic.qtfm.cn/2022/1130/20221130104320.jpeg",
    aliases: ["重庆音乐广播", "重庆音乐台", "风尚881"],
    description: "重庆收听率第一的风尚音乐电台",
    frequency: "FM 88.1"
  },

  // ==================== 7. 特色专题与分类 ====================
  {
    id: "special_cantonese",
    name: "粤语怀旧金曲",
    category: "special",
    categoryLabel: "特色流派",
    logo: "https://pic.qtfm.cn/sso/48/1641437907698_k0NNOUP54.jpeg",
    aliases: ["粤语金曲", "粤语怀旧", "经典粤语", "港乐金曲"],
    description: "经典粤语怀旧流行金曲合辑"
  },
  {
    id: "special_jazz",
    name: "爵士与轻音乐",
    category: "special",
    categoryLabel: "特色流派",
    logo: "https://pic.qtfm.cn/2017/0424/20170424025444.jpeg",
    aliases: ["爵士乐", "轻音乐", "jazz", "纯音乐"],
    description: "醇厚爵士风情与舒缓纯音乐"
  },
  {
    id: "special_classic_rock",
    name: "经典摇滚广播",
    category: "special",
    categoryLabel: "特色流派",
    logo: "https://pic.qtfm.cn/2014/0909/20140909125130474.jpg",
    aliases: ["摇滚广播", "rock", "经典摇滚", "摇滚电台"],
    description: "不羁灵魂与重金属摇滚节奏"
  },
  {
    id: "special_story",
    name: "评书相声曲艺",
    category: "special",
    categoryLabel: "特色流派",
    logo: "https://pic.qtfm.cn/sso/48/1641437758835_67As1roa7.jpeg",
    aliases: ["相声小品", "相声曲艺", "单田芳评书", "评书广播"],
    description: "中国传统戏曲曲艺与经典相声评书"
  }
];

// Helper: Normalize name for matching
export function normalizeStationName(name: string): string {
  if (!name) return "";
  return name
    .toLowerCase()
    .replace(/[ⒼⓈⒽᴴᴰ⁴ᴷ]/g, "")
    .replace(/(?:高清|超清|标清|hd|4k|8k|fhd|uhd)/gi, "")
    .replace(/(?:人民)?广播(?:电台)?/g, "")
    .replace(/(?:频道|卫星频道|电视|卫视)/g, "卫视")
    .replace(/[\s\-_()（）\[\]【】·.·+＋]+/g, "")
    .trim();
}

// Search matching logos from preset library
export function searchPresetLogos(query: string, options?: { category?: string; limit?: number }): PresetLogoItem[] {
  if (!query || typeof query !== "string") return [];
  const limit = options?.limit || 24;
  const rawClean = query.trim().toLowerCase();
  const normQuery = normalizeStationName(query);

  const scored: Array<{ item: PresetLogoItem; score: number }> = [];

  for (const item of PRESET_LOGOS) {
    if (options?.category && options.category !== "all" && item.category !== options.category) {
      continue;
    }

    let score = 0;
    const normItemName = normalizeStationName(item.name);
    const lowerItemName = item.name.toLowerCase();

    // 1. Direct name exact match
    if (item.name === query || lowerItemName === rawClean) {
      score = 100;
    } else if (normItemName === normQuery && normQuery.length > 0) {
      score = 95;
    } else if (item.aliases.some(a => a.toLowerCase() === rawClean || normalizeStationName(a) === normQuery)) {
      score = 90;
    } else if (normItemName.startsWith(normQuery) || normQuery.startsWith(normItemName)) {
      score = 80;
    } else if (lowerItemName.includes(rawClean) || rawClean.includes(lowerItemName)) {
      score = 75;
    } else if (normItemName.includes(normQuery) || normQuery.includes(normItemName)) {
      score = 70;
    } else if (item.aliases.some(a => a.toLowerCase().includes(rawClean) || rawClean.includes(a.toLowerCase()))) {
      score = 65;
    } else if (item.description && item.description.toLowerCase().includes(rawClean)) {
      score = 40;
    }

    // Special CCTV numeric matching: "cctv1" -> "cctv-1"
    const cctvNum = rawClean.match(/cctv\s*(\d+)/);
    if (cctvNum && item.id === `cctv${cctvNum[1]}`) {
      score = Math.max(score, 98);
    }

    if (score > 0) {
      scored.push({ item, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(s => s.item);
}

// Single instant match for autocomplete or batch fill
export function findBestPresetLogo(name: string): PresetLogoItem | null {
  const matches = searchPresetLogos(name, { limit: 1 });
  return matches.length > 0 ? matches[0] : null;
}
