
$('.mdbtnmo').click(function () {

    $('#myModal .modal-body>h1').eq(0).text('果酒湖')
    $('#myModal .modal-body>h1').eq(1).text('鹰翔海滩')
    $('#myModal .modal-body>img').eq(0).attr('src', '../img/ysshijie/ys-js-gjh.jpg')
    $('#myModal .modal-body>img').eq(1).attr('src', '../img/ysshijie/ys-js-yxht.jpg')

    $('.yssj').click()
})
$('.mdbtnly').click(function () {
    $('#myModal .modal-body>h1').eq(0).text('港口')
    $('#myModal .modal-body>h1').eq(1).text('天衡山')
    $('#myModal .modal-body>img').eq(0).attr('src', '../img/ysshijie/ys-sj-gk.png')
    $('#myModal .modal-body>img').eq(1).attr('src', '../img/ysshijie/ys-sj-ths.jpg')
    $('.yssj').click()
})
$('.mdbtndq').click(function () {
    $('#myModal .modal-body>h1').eq(0).text('离岛')
    $('#myModal .modal-body>h1').eq(1).text('稻妻城')
    $('#myModal .modal-body>img').eq(0).attr('src', '../img/ysshijie/ys-sj-ld.jpg')
    $('#myModal .modal-body>img').eq(1).attr('src', '../img/ysshijie/ys-sj-dqc.jpg')
    $('.yssj').click()
})


