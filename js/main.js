var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $ball = $('.ball');

var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnShowHide.on('click', function() {
    $box.toggleClass('js-show-hide');
})
    
$btnMove.on('click', function() {
    $diamond.toggleClass('js-move');
})
    
$btnExpand.on('click', function() {
    $panel.toggleClass('js-expand');
})
    
$btnBounce.on('click', function() {
    $ball.addClass('js-ball-bounce');
})

$ball.on('webkitAnimationEnd animationend', function() {
    $ball.removeClass('js-ball-bounce');
})
