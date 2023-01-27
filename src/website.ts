import * as vscode from 'vscode';
// export default [
//     {type:'read',name:'vx_read',label:'微信阅读',site:'https://weread.qq.com/',icon:"vx_read.png"},
//     {type:'interview',name:'leetcode',label:'leetcode',site:'https://leetcode-cn.com/',icon:"leetcode.ico"},
//     {type:'interview',name:'niuke',label:'牛客网',site:'https://www.nowcoder.com/',icon:"niuke.ico"},
//     {type:'interview',name:'runoob',label:'菜鸟教程',site:'https://www.runoob.com/',icon:"runoob.ico"},
//     {type:'interview',name:'pzijun',label:'前端瓶子君算法',site:'https://www.pzijun.cn/',icon:"pzijun.ico"},
//     {type:'interview',name:'muyiy',label:'木易杨前端进阶',site:'https://muyiy.cn/',icon:"muyiy.ico"},
//     {type:'interview',name:'fe-interview',label:'前端面试指南',site:'http://interview.poetries.top/',icon:"fe-interview.png"},   
//     {type:'other',name:'all_history',label:'全历史',site:'https://www.allhistory.com/',icon:"all_history.svg"},
//     {type:'blog',name:'liao_blog',label:'廖雪峰博客',site:'https://www.liaoxuefeng.com/',icon:"liao_blog.ico"},
//     {type:'blog',name:'ruan_blog',label:'阮一峰博客',site:'https://www.ruanyifeng.com/',icon:"ruan_blog.ico"},
//     {type:'pictures',name:'CNU',label:'视觉联盟',site:'http://www.cnu.cc/',icon:"CNU.ico"},
//     {type:'pictures',name:'500px',label:'视觉中国',site:'https://500px.com.cn/',icon:"500px.ico"},
//     // {type:'pictures',name:'pexels',label:'pexels',site:'https://www.pexels.com/zh-cn/',icon:"pexels.ico"},
// ];

const website: Array<any> = vscode.workspace.getConfiguration().get('navigation.urlArray') || [];
export default website;