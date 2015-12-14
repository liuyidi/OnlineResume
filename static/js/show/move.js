/**
 * @project_name OnlineResume
 * @file_name move.js  运动基础模块
 * @author liuyidi <liuyidi1993@gmail.com>
 * @date   2015-11-08   08:15
 */
define('project/move', function (require, exports, module) {
    // 模块代码
    function move(exports, module, obj){
        var move = move || {};
            move.easing = move.easing || "linear", //运动类型
            move.duration = move.duration || "700";  //运动速度
                                            //direction
        var n1 = {},
            i1 = {};

        for(var i in module){
            module[i] = "opacity" == i ?
                parseFloat(t(exports, i)) :
                parseInt(t(exports, i)),i1[i] = module[i] - n1[i];
        }

        var c = 0,
            s = Math.round(move.duration / 30);
        clearInterval(exports.timer),
        exports.timer = setInterval(function(){
            c++;
            for(var t in module){
                switch(move.easing){
                    case "linear":
                        var
                        break;
                    case "ease-in":
                        var
                        break;
                    case "ease-out":
                        var ;

                }
                "opacity" ==
            }
        }, 30);
    }
    exports.move=move;
});