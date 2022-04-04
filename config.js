// 配置
window.Config = {

  // 站点名
  SiteName: '鼎天网络服务监控面板',

  // 站点链接
  SiteUrl: 'https://status.dtnetwork.top',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'uptimerobot.sino.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm791276461-45a503c7545c927b98ced422',
    'm787360179-69c085e3dc7f00173b04c837',
    'm791276546-bf41dbf0bffcb9d3c4fa8cb0',
    'm787360228-369331113683a3a4edf27eee',
    'm791277061-8d6bb2231cc87e17131e5ba2',
    'm791277063-894086a802eb3caedc134e44',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://status.dtnetwork.top'
    },
    {
      text: '鼎天网络社区',
      url: 'https://community.dtnetwork.top'
    },
    {
      text: 'K6o短链接',
      url: 'https://k6o.top'
    }
  ]
};