$('body').keydown(function (e) {
    if (e.keyCode == 45) {
        $('.tianjia').click()
    }
})

$('#hua').click(function () {
    let arr = []
    arr[0] = $('.section1>div').length + 1
    arr[1] = $('#huababa').val()
    let html = template('manhua', { arr })
    $('.section1').append(html)
    $('.btn-default').click()
})