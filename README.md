onlineResume
============

###在线简历

- 首页
    - （各种动态信息流）
- 写简历
    - 注册成功,从邮箱中点击链接以后第一步跳转到写简历页面。
    - 编辑表单信息
    - 可以预览PDF格式(https://github.com/MrRio/jsPDF)
    - 保存为公有简历和私有简历
    - [参考](http://jingyan.baidu.com/edit/content?tagName=%E7%BE%8E%E5%91%B3)
- 简历库(公用简历库) (/resume)
    - 进行Search框通用搜索
    - 进行排序筛选
    - 简历库部分用facyBox进行大图查看,进行瀑布流布局，可以加载更多
    - 单个简历可以点赞和收藏
- 用户中心  (/user)
    - 管理简历(私有简历&公有简历)
    - 设置个人信息
    - 收藏信息
    - 关注信息
    - 问答信息
- 消息中心 (/message)
    - 简历消息
    - 系统消息
- 登陆注册  
    - 登录
        - 退出登陆
    - 注册
        - 注册成功页面  2个功能 点击链接跳转到邮箱  &  点击重新发送
    - 忘记密码
- 求职问答 （/forum)
    -  
    - 
- 帮助中心Q&A
- 简历秀 (/show)
- 招聘企业申请表 (/apply)

####所用前端组件包括(JQuery)：
1. 焦点图轮播
2. 分页
3. tab选项卡
4. 返回顶部
5. 滚动监听
6. 二维码生成插件 [jquery.qrcode.js](http://jeromeetienne.github.io/jquery-qrcode/)
7. 头像上传插件
8. 图片或者文件上传插件
9. 表单检验 jquery.validate.js
10. 城市选择联动
11. 运动组件
12. 手风琴
13. 对话弹出框
14. 日期选择插件 select
15. 下拉菜单  dropmenus
16. 气泡提示框 tooltips
17. 搜索自动填充插件 autocomplete
18. 消息提示框      https://github.com/HubSpot/messenger
                  jquery.msgbox.js
19. 复制到剪贴板插件 jquery.zclip.min.js
20. 图片播放插件    jquery.fancyBox.js
21. 简洁版图片播放插件 jquery.colorbox.js
22. 获取Cookie值的插件  jquery.cookie.js
23. 图表插件        D3.js 或者 Highchart

####其他技术
0. 采用mockjs来模拟ajax的请求(pass)
1. 采用artTemplate模版引擎
2. 使用requirejs模块化加载
3. 使用Less进行css的编写 
4. 使用grunt进行压缩，合并等
5. 试着采用独自编写的DUI作为UI组件库
6. 使用jQuery作为DOM操作工具
7. 部分功能单页使用Backbone或者angular
8. 移动端部分采用zepto+backbone
9. 试着用react native/ionic写android或者ios应用
