
/**
 * 
 * @param {角色名} _name 
 * @param {配音} _cv 
 * @param {介绍} _introduce 
 * @param {神之眼} _shenyan 
 */

function jueseObj(_name, _cv, _introduce, _shenyan) {
    this.name = _name
    this.cv = _cv //配音
    this.introduce = _introduce //介绍
    this.shenyan = _shenyan
}
$('body').keydown(function (e) {
    if (e.keyCode == 45) {
        e.preventDefault();
        $('.tianjia').click()
    }
})

var KL = new jueseObj('KL', 'huahua',
    '西风骑士团，火花骑士！永远伴随闪光与爆炸出现！ ——然后在琴团长严厉的目光注视下默默消失。虽然新炸药的配方，很多都是在被关禁闭的时候想出来的……但如果不被关禁闭的话，就更好了。',
    'huo')
var Q = new jueseObj('Q', 'huahua',
    '身为西风骑士团的代理团长，琴一直忠于职守，为人们带来安宁。虽然并非天赋异禀，但通过刻苦训练，如今的她已然能够独当一面。当风魔龙的威胁开始临近，这位可靠的代理团长早已做好了准备，誓要守护蒙德。',
    'fen')
var ZL = new jueseObj('ZL', 'huahua',
    '应「往生堂」邀请而来的神秘客卿。样貌俊美，举止高雅，拥有远超常人的学识。虽说来历不明，却知礼数、晓规矩。坐镇「往生堂」，能行天地万物之典仪。',
    'yan')
var LDJJ = new jueseObj('LDJJ', 'huahua',
    '雷电将军——此世最殊胜威怖的雷霆化身，稻妻幕府的最高主宰。挟威权之鸣雷，逐永恒之孤道的寂灭者。',
    'lei')
var arrjs = {}
arrjs.KL = KL
arrjs.ZL = ZL
arrjs.LDJJ = LDJJ










