/**
 * @project_name OnlineResume
 * @file_name main.js  CMD加载主函数
 * @author liuyidi <liuyidi1993@gmail.com>
 * @date   2015-11-08   08:01
 */
seajs.config({
    comboExcludes: /.*/,
    paths:{
        project: "http://"+window.location.host + "/static/js/show"
    },

    //设置别名
    alias: {
        'jquery': ''
    }
});

seajs.use(["project/hobSlidelist","project/select","project/hotnotice",],function(e,o,t){
    e(),
    o(),
    t()
});
