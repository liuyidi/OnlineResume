/**
 * @file 意见反馈
 * @author Created by liuyidi on 15/10/5.
 */
$(function(){
    var feedback = $('#feedback');
    var showBtn = $('#feedback-icon');  //点击出现输入框按钮
    var closeBtn = $('.fb-close');   //删除按钮
    var ensureBtn = $('.fb-ensure'); //确认按钮

    var config = {
        usertoken: $.cookie('user_token'), //用户cookie信息
        hide: function(opt){         //隐藏
            opt.fadeOut();
        },
        show: function(opt){        //展示
            opt.fadeIn();
        },
        //倒计时消失和出现
        setCountdown:function(time, id){
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
            var emailReg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14};
            var error = $('#feedback-con .error');

            var flag = true;
            //先验证textarea
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
            }

            if(flag){
                $.ajax({
                    url: 'http://onlineresume.sinaapp.com/feedback',
                    type: 'POST',
                    data: {
                        userId: config.usertoken,
                        content: conVal,
                        feedbackEmail: email
                    },
                    dataType: 'jsonp',
                    jsonp: 'callback'
                }).done(function(res){
                    if(res.success){
                        config.hide(feedback);

                    }else{
                        alert(res.msg);
                    }
                });
            }
        }

    }


    //点击出现窗口
    showBtn.click(function(){
        //先清空内容

        //..
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