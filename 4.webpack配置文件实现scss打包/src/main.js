var v1 = document.querySelector('#v1');
var v2 = document.querySelector('#v2');
var bt = document.querySelector('#bt');
var res = document.querySelector('#res');

//导入style.scss文件
require('../statics/style.scss');

bt.onclick = function(){
    var v1value = parseFloat(v1.value);
    var v2value = parseFloat(v2.value);

    var add = require('./calc.js');
    res.value = add(v1value,v2value);
}