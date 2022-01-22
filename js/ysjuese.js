

//底部轮播
{
    var sum = 0
    $('.navbox-pic>.renbox').click(function (e) {
        $('.navbox-pic>.renbox').removeClass('active')
        $(this).addClass('active')
    })
    $('.navbox-pic>.renbox').eq(1).click()



    $('.navbox>img').each(function (index, item) {
        $(item).click(function () {
            if (index == 0) {
                let a
                $('.navbox-pic>.renbox').each(function (index, item) {
                    if ($(item).hasClass('active')) {
                        console.log(index);
                        a = index
                    }
                })
                $('.navbox-pic>.renbox').eq(a - 1).click()
            } else {
                let a
                $('.navbox-pic>.renbox').each(function (index, item) {
                    if ($(item).hasClass('active')) {
                        a = index
                    }
                })
                if (a + 1 == $('.navbox-pic>.renbox').length) {
                    $('.navbox-pic>.renbox').eq(0).click()
                } else {
                    $('.navbox-pic>.renbox').eq(a + 1).click()

                }
            }
        })
    })

    //点击控制
    function clickpic(index) {
        $('.navbox-pic>.renbox').eq(index)
        let a = parseInt($('.navbox-pic>.renbox').eq(0).css('margin-right'))
        let b = parseInt($('.navbox-pic>.renbox').eq(0).css('width'))
        let c = parseInt($('.navbox-pic>.renbox').eq(0).css('margin-left'))
        //一行能显示几个元素
        let d = Math.floor(parseInt($('.navbox-pic').css('width')) / (a + b) / 2)

        $('.navbox-pic>.renbox').eq(0).animate({
            'margin-left': -(a + b) * (index - d + 1) + 'px'
        }, 300)
    }

    $('.navbox-pic>.renbox').each(function (index, item) {
        $(item).click(function () {
            clickpic(index)
            jueseGo()
        })
    })
    function jueseGo() {
        $('.peobox>img').eq(3).animate({
            'left': '100px',
            'opacity': '0'
        }, 300).animate({
            'left': '0px',
            'opacity': '1'
        }, 300)
        $('.peobox>img').eq(0).animate({
            'opacity': '0'
        }, 300).animate({
            'opacity': '.5'
        }, 300)
        for (var i = 1; i < 3; i++) {
            $('.peobox>img').eq(i).animate({
                'opacity': '0'
            }, 300).animate({
                'opacity': '1'
            }, 300)
        }
        $('.peobox>div').animate({
            'opacity': '0'
        }, 300).animate({
            'opacity': '1'
        }, 300)


    }
    //侧边栏控制
    $('.ulbox>ul>li').each(function (index, item) {
        $(item).click(function () {
            $('.ulbox>ul>li').removeClass('active')
            $(this).addClass('active')
            if (index == 0) {
                let html = template('mdpeo', {})
                let html1 = template('mdnav', {})
                $('.peobox').html('').append(html)
                $('.navbox').html('').append(html1)
                $('.navbox-pic>.renbox').eq(0).click(function () {
                    $('.navbox-pic>.renbox').removeClass('active')
                    $(this).addClass('active')
                    clickpic(sum)
                    jueseGo()
                }).click()
            } else if (index == 1) {
                let html = template('lypeo', {})
                let html1 = template('lynav', {})
                $('.peobox').html('').append(html)
                $('.navbox').html('').append(html1)
                $('.navbox-pic>.renbox').eq(0).click(function () {
                    $('.navbox-pic>.renbox').removeClass('active')
                    $(this).addClass('active')
                    clickpic(sum)
                    jueseGo()
                }).click()
            } else if (index == 2) {
                let html = template('dqpeo', {})
                let html1 = template('dqnav', {})
                $('.peobox').html('').append(html)
                $('.navbox').html('').append(html1)
                $('.navbox-pic>.renbox').eq(0).click(function () {
                    $('.navbox-pic>.renbox').removeClass('active')
                    $(this).addClass('active')
                    clickpic(sum)
                    jueseGo()
                }).click()
            }
        })
    })
}

function juesehuan() {
    $('.renbox').each(function (index, item) {
        $(item).click(function () {
            $('.navbox-pic>.renbox').removeClass('active')
            $(this).addClass('active')
            let a = $(this).find('img').attr('alt')
            let html = template('juesepeo1', { a: arrjs[a] })
            $('.peobox').html('').append(html)
            jueseGo()
        })
    })
}


$("#hua").click(function (e) {
    e.stopPropagation();
    let arr = []
    let name = $('#ysnamesuo').val()
    let Zname = $('#ysname').val()
    let peiyin = $('#yspeiyin').val()
    let jieshao = $('#ysjieshao').val()
    let shenyan = $('input:radio:checked').val();
    arr[0] = $('#ysname').val()
    arr[1] = $('#ysnamesuo').val()

    var ysobj = new jueseObj(name, peiyin, jieshao, shenyan)
    arrjs[name] = ysobj
    // $('.peobox').html('')
    let html = template('juesepeo', { aa: ysobj })
    let html1 = template('juesenav', { arr })
    console.log(html);
    $('.navbox-pic').append(html1)
    let sum = $('.navbox-pic>.renbox').length - 1

    $('.navbox-pic>.renbox').eq(sum).click(function () {
        $('.navbox-pic>.renbox').removeClass('active')
        $(this).addClass('active')
        $('.peobox').html('').append(html)
        // juesehuan()
        clickpic(sum)
        jueseGo()
        juesehuan()

    }).click()
    $('.btn-default').click()

})