/**
 * @file 意见反馈
 * @author Created by liuyidi on 15/10/5.
 */
$(function(){
    var feedback = $('#feedback');
    var fbCont = $("#feedback-content"); //反馈内容容器
    var showBtn = $('#feedback-icon');  //反馈按钮
    var closeBtn = $('.fb-close');   //删除按钮
    var ensureBtn = $('.fb-ensure'); //确认按钮
    var sucMsg = $(".feedback-icon .fb-suc");  //反馈后成功信息

    /* *
     * 进行反馈部分全局配置config
     * 定义包括: config.usertoken 用户信息
     * config.hide           隐藏
     * config.show           出现
     * config.setCountdown   倒计时
     * config.valid          验证
     * */
    var config = {
        email: $('#login-email').val(),    //用户登录邮箱
        phone: $('#login-phone').val(),    //用户登录手机号
        userId: $('#login-userId').val(),  //用户登录ID
        usertoken: $.cookie('user_token'), //用户cookie信息
        hide: function(opt){         //隐藏
            opt.fadeOut();
        },
        show: function(opt){        //展示
            opt.fadeIn();
        },
        //倒计时消失和出现
        setCountdown: function(time, id){
            var me = this;
            var count = setTimeout(function(){
                if(time == 0){
                    clearTimeout(count);
                    id.addClass('hide');
                }
                me.setCountdown(time - 1, id);
            }, 1000);
        },
        //验证信息并提交
        valid: function(opt){
            var me = this;
            var conVal = $.trim(opt.find('textarea').val());  //文本框里面的值
            var clen = conVal.length;                         //文本框里面值的大小
            var email = $.trim(opt.find('input').val());      //邮箱的值
            var elen = email.length;                          //input输入的值的大小
            var emailReg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14};  //邮箱验证
            var error = $('#feedback-con .error');
            var i = error.find('i');
            var res = false;
            var flag = true;
            //根据需求来验证提交的信息
            // 先验证textarea
            if(conVal == '' || clen > 200){
                error.removeClass('hide').find('span').text('');

                me.setCountDown(3, error);
                flag = false;
            }
            //再验证input
            if(email != ''){
                res = emailReg.test(email);
            }

            if(!res && email != ''){
                error.removeClass('hide').find('span').text('');
                if(i.hasClass('txt')){
                    i.removeClass('txt');
                }
                me.setCountdown(3, error);
                flag = false;
            }

            if(res && elen > 100){
                error.removeClass('hide').find('span').text('');
                if(i.hasClass('txt')){
                    i.removeClass('txt');
                }
                me.setCountdown(3, error);
                flag = false;
            }

            //前面部分进行验证,当所有要求都满足时,flag才为true
            if(flag){
                $.ajax({
                    url: 'http://onlineresume.sinaapp.com/feedback',
                    type: 'POST',
                    data: {
                        userId: config.usertoken,  //从全局配置中拿到用户ID
                        content: conVal,           //反馈的意见内容
                        feedbackEmail: email       //反馈的用户Email

                    },
                    dataType: 'jsonp',
                    jsonp: 'callback'
                }).done(function(res){          //延迟
                    if(res.success){
                        config.hide(feedback);  //成功则隐藏
                        sucMsg.removeClass("hide");
                        me.setCountdown(3,sucMsg);
                    }else{
                        alert(res.msg);         //失败则弹窗
                    }
                });
            }
        }

    }


    //点击出现窗口
    showBtn.click(function(){
        //先清空输入框中的内容
        fbCont.find('input').val('').end('').find('textarea').val('');
        //根据登录情况来获取内容
        $.ajax({
            url: "http://api.resume.com/feedback/check",
            type: "POST",
            data: {
                loginEmail: global.email,  //定义网站全局用户Email
                userId: global.usertoken   //用户ID
            },
            dataType: "jsonp",
            jsonp: "callback"
        }).done(function(res){
            var errortips = $('#feedback-icon .fb-limit');   //错误标识,超过反馈限额
            if(res.success){    //响应成功
                config.show(feedback);
            }else{              //响应失败
                errortips.removeClass('hide');
                config.setCountdown(3, errortips);  //3s后消失
            }
        });
    });
    //关闭反馈窗口
    closeBtn.click(function(){
        config.hide(feedback);
    });
    //确定提交
    ensureBtn.click(function(){
        config.valid(fdForm);
    });

});