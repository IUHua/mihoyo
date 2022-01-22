//中国23的No1btn  5
{
    $('#section4>.carousel>.item').each(function (index, item) {
        $(item).css('display', 'none')
        if ($(item).hasClass('active')) {
            $(this).css('display', 'block')
        }
    })
    $('.No1btn>li').click(function () {
        $('.No1btn>li').removeClass('active')
        $(this).addClass('active')
        let a = $(this).text() - 1
        let item4 = $('#section4>.carousel>.item').eq(a).children('.col-md-4')
        let item6 = $('#section4>.carousel>.item').eq(a).children('.col-md-6')
        $('#section4>.carousel>.item').css('display', 'none')
        $('#section4>.carousel>.item').eq(a).css('display', 'block')
        item4.children('p').hover(function () {
            item6.children().children().css('transform', 'scale(1.3)')
        }, function () {
            item6.children().children().css('transform', 'scale(1)')
        })



        console.log();
        let src = $(item6.children().children()[0]).attr('src')
        item6.css({
            'background': 'url(' + src + ')',
            'background-position': '-200px 0'
        })
        item6.hover(function () {
            item6.children().children().css('transform', 'scale(1.3)')
        }, function () {
            item6.children().children().css('transform', 'scale(1)')
        })
        item4.animate({
            position: 'relative',
            'left': '200px',
            'opacity': '0'
        }, 300, function () {
            item4.css({
                position: 'relative',
                'left': '-200px',
                'opacity': '0'
            })
        })
        item4.animate({
            position: 'relative',
            'left': '0px',
            'opacity': '1'
        }, 300)
    })
    //给body添加鼠标滑动事件用于图片的滚动
    $('body').mousemove(function (e) {
        if (e.clientX > parseInt($(this).css('width'))) {
            let a = e.clientX - parseInt($(this).css('width')) / 2
            let b = e.clientY - parseInt($(this).css('height')) / 2
            $('#section4 > .carousel >.item> .col-md-6').css({
                backgroundPosition: a / 80 - 200 + 'px ' + b / 50 + 'px'
            })
        } else {
            let a = e.clientX - parseInt($(this).css('width')) / 2
            let b = e.clientY - parseInt($(this).css('height')) / 2

            $('#section4 > .carousel >.item> .col-md-6').css({
                backgroundPosition: a / 80 - 200 + 'px ' + b / 50 + 'px'
            })
        }
    })


    if ($('#section4>.carousel>.item').hasClass('active')) {
        $(this).css('display', 'block')
    }


}
//招聘
{
    //右上角校园招聘
    {
        let a = $('.page3-content>.col-md-8>ul>li').eq(0)
        $(a).hover(function () {
            $(this).animate({
                top: '-40px',
            }, 300)
        }, function () {
            $(this).animate({
                top: '-80px',
            }, 300, function () {
                $(this).css('top', '0px')
            })
        })
    }

    //岗位点击
    {
        let a = $('.page3-content>.col-md-4>ul>li')
        $(this).removeClass('page3-none')
        a.each(function (index, item) {
            $(item).click(function () {
                if (index == 1) {
                    page3amt()
                } else if (index === 0) {
                    page3amt1()
                }

                $('.page3-content>.col-md-8').addClass('page3-none')
                a.removeClass('active')
                $(this).addClass('active')
                $('.page3-content>.col-md-8').eq(index).removeClass('page3-none')
            })
        })
        $(a).eq(0).click()
    }
    function page3amt1() {
        $('#page3-icont').css('opacity', '0')
        $('#page3-icont').animate({
            'opacity': '1'
        }, 500)
    }

    function page3amt() {
        $('#page3-ul>ul>li').css('opacity', '0')
        $('#page3-ul>ul>li').eq(0).animate({
            'opacity': '1'
        }, 200)
        setTimeout(function () {
            $('#page3-ul>ul>li').eq(1).animate({
                'opacity': '1'
            }, 200)
        }, 200)
        setTimeout(function () {
            $('#page3-ul>ul>li').eq(2).animate({
                'opacity': '1'
            }, 200)
        }, 400)
        setTimeout(function () {
            $('#page3-ul>ul>li').eq(3).animate({
                'opacity': '1'
            }, 200)
        }, 600)

    }


}

// 3上部滑块处 
{
    $('#section2>.pageMHY>.nav>li').hover(function () {
        $(this).animate({
            'top': '-40px'
        }, 200)
    }, function () {
        $(this).animate({
            'top': '-80px'
        }, 200, function () {
            $(this).css({
                'top': '0px'
            })
        })
    }).click(function () {
        $('#section2>.pageMHY>.nav>li').removeClass('active')
        $(this).addClass('active')
    })
}
//发展米哈游 3
{
    let next = 0
    $('.MHYbox>span').each(function (index, item) {
        $(item).click(function () {
            if (index == 0) {
                if (next <= 0) {
                    next = 0
                    MHYlunbo(next)
                } else {
                    next--
                    MHYlunbo(next)

                }
            } else if (index == 1) {
                if (next >= 1) {
                    next = 1
                    MHYlunbo(next)

                } else {
                    next++
                    MHYlunbo(next)

                }
            }
        })
    })

    function MHYlunbo(num) {
        $('.FZMHY>img').attr('src', './img/index/MHYYS' + num + '.png')
    }
    let mhyNone = $('.MHYnone')

    $('.pageMHY>.nav>li').each(function (index, item) {
        $(item).click(function () {
            for (let i = 0; i < mhyNone.length; i++) {
                if (!mhyNone.eq(i).hasClass('MHYnone')) {
                    mhyNone.eq(i).toggleClass('MHYnone')
                }
            }
            let a = $('.pageMHY>.nav>li').length - 1 - index
            $(mhyNone).eq(a).removeClass('MHYnone')
        })
    })
    $('.pageMHY>.nav>li').eq(1).click()



}

$(function () {
    $('.pages>li').eq(3).click()
})
//2 大图轮播
{

    $('#section1>.col-md-12>ul>li').each(function (index, item) {
        $(item).click(function () {
            $('#section1>.col-md-12>ul>li').css({
                'border': ' 2px solid transparent'
            })
            $(this).css({
                'border': '2px solid rgb(0, 195, 255)'
            })
            $('#section1>.col-md-7>img').removeClass('s1none')
            $('#section1>.col-md-4>div').removeClass('s1boxnone')
            $('#section1>.col-md-7>img').eq(index).addClass('s1none')
            $('#section1>.col-md-4>div').eq(index).addClass('s1boxnone')
            s1amtmic(index)
            s1amtbox(index)
        })
    })
    $('#section1>.col-md-12>ul>li').eq(1).click()
    function s1amtmic(index) {
        $('#section1>.col-md-7>img').eq(index).css({
            'margin-left': '-100px',
            'opacity': '0'
        }).animate({
            'margin-left': '0px',
            'opacity': '1'
        }, 1000)
    }
    function s1amtbox(index) {
        $('#section1>.col-md-4>div').eq(index).css({
            'padding-right': '20px',
            'opacity': '0',
        }).animate({
            'padding-right': '0px',
            'opacity': '1',
        }, 1000)
    }
    $('body').mousemove(function (e) {
        if (e.clientX > parseInt($(this).css('width'))) {
            let a = e.clientX - parseInt($(this).css('width')) / 2
            let b = e.clientY - parseInt($(this).css('height')) / 2
            $('#section1>.col-md-7>img').css({
                'transform': 'translateX(' + a / 20 + 'px) translateY(' + b / 20 + 'px)',
            })
        } else {
            let a = e.clientX - parseInt($(this).css('width')) / 2
            let b = e.clientY - parseInt($(this).css('height')) / 2

            $('#section1>.col-md-7>img').css({
                'transform': 'translateX(' + a / 20 + 'px) translateY(' + b / 20 + 'px)',

            })
        }
    })
}

//头部导航
{
    $('.navbar .collapse>ul>li').each(function (index, item) {
        $(item).click(function () {
            $(this).children('a')
            $('.pages>li').eq(index).click()
        })
    })
}


//全局键盘事件
$('body').keydown(function (e) {
    if (e.keyCode == 32) {
        $('video').trigger('play');
        $('#section0>span').toggleClass('stopmp')
    }
    if (!$('#section0>span').hasClass('stopmp')) {
        $('video').trigger('pause');
    }
})





























function donggo() {
    $('#section1>.col-md-12>ul>li').eq(0).click()
}









