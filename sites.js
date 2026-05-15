// 私人中转站配置 - 方便随时添加/修改站点信息
// 每个站点对象包含: name, url, price, models, features, healthcheck_url(可选)

const sites = [
    {
        id: "site_001",
        name: "🚀 DeepSeek 代理 A",
        url: "https://api.deepseek-example.com",
        price: "¥0.0001/K",
        models: ["DeepSeek-V2", "DeepSeek-Coder"],
        features: ["极低价格", "运营稳定", "支持流式"],
        healthcheck_url: "https://httpbin.org/status/200", // 测试：总是在线
        owner: "私人运营",
        uptime_kuma_id: null // 如果用 Uptime Kuma，填这里
    },
    {
        id: "site_002",
        name: "🎯 Claude 转发 B",
        url: "https://api.claude-relay.com",
        price: "¥0.002/K",
        models: ["Claude-3-Opus", "Claude-3-Sonnet"],
        features: ["响应快", "支持长上下文", "稳定3个月"],
        healthcheck_url: "https://httpbin.org/delay/2", // 测试：延迟2秒（会显示🟡）
        owner: "私人运营",
        uptime_kuma_id: null
    },
    {
        id: "site_003",
        name: "💎 GPT-4 代理 C",
        url: "https://api.gpt4-relay.com",
        price: "¥0.003/K",
        models: ["GPT-4", "GPT-3.5-Turbo"],
        features: ["官方接口转发", "低延迟", "24h监控"],
        healthcheck_url: "https://httpbin.org/status/200", // 测试：总是在线
        owner: "私人运营",
        uptime_kuma_id: null
    },
    {
        id: "site_004",
        name: "🌟 混合模型聚合 D",
        url: "https://api.multi-model.com",
        price: "¥0.0008/K",
        models: ["Llama-2", "Mistral-7B", "Qwen"],
        features: ["多模型支持", "价格最低", "新开服务"],
        healthcheck_url: "https://httpbin.org/status/500", // 测试：模拟服务器错误（显示🔴）
        owner: "私人运营",
        uptime_kuma_id: null
    },
    {
        id: "site_005",
        name: "⚡ 新兴转发站 E",
        url: "https://api.newrelay.io",
        price: "¥0.00005/K",
        models: ["DeepSeek", "Claude"],
        features: ["超低价", "刚上线1周", "高风险"],
        healthcheck_url: "https://999.invalid-domain-for-testing.xyz", // 测试：无法连接（显示🔴）
        owner: "私人运营",
        uptime_kuma_id: null
    },
    {
        id: "site_006",
        name: "🔥 热门转发 F",
        url: "https://api.hotrelay.com",
        price: "¥0.0015/K",
        models: ["GPT-4", "Claude-3"],
        features: ["口碑好", "运营6个月", "充值送余额"],
        healthcheck_url: "https://httpbin.org/status/200", // 测试：总是在线
        owner: "私人运营",
        uptime_kuma_id: null
    }
];

// 官方站点（隔离分类）- 不进行实时检测
const official_sites = [
    {
        id: "official_001",
        name: "OpenAI 官方",
        url: "https://openai.com",
        price: "按官方定价",
        models: ["GPT-4o", "GPT-4", "GPT-3.5"],
        features: ["最稳定", "官方API", "持续更新"],
        category: "official"
    },
    {
        id: "official_002",
        name: "Anthropic 官方",
        url: "https://console.anthropic.com",
        price: "按官方定价",
        models: ["Claude-3-Opus", "Claude-3-Sonnet", "Claude-3-Haiku"],
        features: ["官方支持", "最新模型", "最安全"],
        category: "official"
    },
    {
        id: "official_003",
        name: "DeepSeek 官方",
        url: "https://platform.deepseek.com",
        price: "¥0.0001/K起",
        models: ["DeepSeek-V2", "DeepSeek-Coder"],
        features: ["官方价格", "超便宜", "稳定运营"],
        category: "official"
    },
    {
        id: "official_004",
        name: "Google Gemini",
        url: "https://ai.google.dev",
        price: "按官方定价",
        models: ["Gemini-Pro", "Gemini-Vision"],
        features: ["官方API", "多模态", "免费额度"],
        category: "official"
    },
    {
        id: "official_005",
        name: "智谱 GLM",
        url: "https://open.bigmodel.cn",
        price: "按官方定价",
        models: ["GLM-4", "GLM-3"],
        features: ["国产模型", "官方支持", "中文优化"],
        category: "official"
    },
    {
        id: "official_006",
        name: "通义千问",
        url: "https://dashscope.aliyun.com",
        price: "按官方定价",
        models: ["Qwen-Max", "Qwen-Plus"],
        features: ["国产模型", "官方支持", "并发稳定"],
        category: "official"
    }
];
