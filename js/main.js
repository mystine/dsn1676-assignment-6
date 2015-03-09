var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
             
var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnExpand = $('.btn-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnShowHide.on('click', function() {
    $box.toggleClass('js-show-hide');
});
    
$btnMove.on('click', function() {
    $diamond.toggleClass('js-move');
});
    
$btnExpand.on('click', function() {
    $panel.toggleClass('js-expand');
});
    
$btnBounce.on('click', function() {
    $circle.addClass('js-circle-bounce');
});

$circle.on('webkitAnimationEnd animationend', function() {
    $circle.removeClass('js-circle-bounce');
});
    
$btnAppend.on('click', function() {
    var $li = $('<li>New List Item</li>');
    $list.prepend($li);
    $li.addClass('js-li-append');
});