$('.navbar-collapse>ul>li').on('mousemove', function () {
    $('.navbar-collapse>ul>li').removeClass('active')
    $(this).addClass('active')
})

// var arrobj
// $.get('http://127.0.0.1/aaa', function (result) {
//     arrobj = result[0]
// }, 'json')
// console.log(arrobj);
$(function () {
    $('body').click(function () {
        $('.c8content>ul>li').remove()
        $.ajax({
            url: 'http://127.0.0.1/aaa', //请求的路径
            type: 'get',  //请求的方式
            dataType: 'json',  //请求返回的数据类型
            beforeSend: function () {
                console.log('开始请求');
            },
            complete: function () {  //无论请求成功或失败，都会触发完成
                console.log('请求完成');
            },
            success: function (res) {
                console.log('请求成功');
                var Obj = res
                $(Obj).each(function (index, item) {
                    var html = template('userInfoTemp', { item })
                    $('.c8content>ul').append(html);
                })
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log('请求失败');
                // console.log(textStatus);
            }
        })
    })
})
{
    //添加
    $('.modal-footer>.btn-primary').click(function () {
        let arr = []
        arr[0] = $('#gangwei').val().trim()
        arr[1] = $('#zhize').val().trim()
        arr[2] = $('#zhitime').find("option:selected").text();
        arr[3] = $('#diqu').val().trim()
        arr[4] = $('#jiaji').prop('checked')
        console.log(arr);
        // var a = $.inArray("", arr);
        // if (a != -1) {
        //     alert('请输入完整')
        // } else {
        //     var html = template('userInfoTemp', { arr })
        //     var html1 = template('userInfoTemp1', { arr })
        //     $('.c8content>ul').append(html)
        //     $('.c4box>ul').eq($('.c4box>ul').length - 1).append(html1)
        //     if ($('.c4box>ul>li').length % 4 == 0) {
        //         let a = Math.floor($('.c4box>ul>li').length / 4)
        //         var li1 = $('<li><a hrdf="#">' + (a + 1) + '</a></li>')
        //         var ul1 = $('<ul/>')
        //         $('.pagination').append(li1)
        //         $('.c4box>ul').eq($('.c4box>ul').length - 1).after(ul1)
        //         pageplay()
        //         $('.navpage').show()
        //     }
        //     $('.modal-footer>.btn-default').click()
        // }
        $.ajax({
            url: 'http://127.0.0.1/aaaa', //请求的路径
            type: 'post',  //请求的方式
            data: JSON.stringify(arr),
            dataType: 'json',  //请求返回的数据类型
            beforeSend: function () {
                // console.log('开始请求');
            },
            complete: function () {  //无论请求成功或失败，都会触发完成
                // console.log('请求完成');
            },
            success: function (res) {
                // console.log('请求成功');
                var Obj = res
                $(Obj).each(function (index, item) {
                    var html = template('userInfoTemp', { item })
                    $('.c8content>ul').append(html);
                })
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log('请求失败');
            }
        })
    })
    //删除
    $('.del').click(() => {
        console.log(1);
        $.ajax({
            url: 'http://127.0.0.1/del', //请求的路径
            type: 'get',  //请求的方式
            dataType: 'json',  //请求返回的数据类型
            success: function (res) {
                // console.log('请求成功');
                var Obj = res
                $(Obj).each(function (index, item) {
                    var html = template('userInfoTemp', { item })
                    $('.c8content>ul').append(html);
                })
            }
        })
    })

}
$('body').keydown(function (e) {
    if (e.keyCode == 45) {
        $('.zhiweibtn').click()
    }
})
$('.navpage').hide()
function pageplay() {
    $('.pagination>li').each(function (index, item) {
        $(item).click(function () {
            $('.pagination>li').removeClass('active')
            $(this).addClass('active')
            $('.c4box>ul').hide()
            $('.c4box>ul').eq(index).show()
        })
    })
    $('.pagination>li').eq($('.pagination>li').length - 1).click()
}

$('#huababa').change(function () {
    $('.c8content>ul>li').hide()
    $('.c8content>ul>li').each(function (index, item) {
        let a = $(item).find('p').eq(0).text()
        let b = $('#huababa').val()
        if (a.indexOf(b) != -1) {
            $(item).show()
        }
    })
})
