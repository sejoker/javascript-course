var $ = function(selector){
	var result = document.querySelectorAll(selector),
		styleFn = function(value, property){
		var valueInt = parseInt(value, 10);
		if (!isFinite(valueInt))
			return;

		[].forEach.call(result, function(div, idx, array){
			div.style[property] = value + 'px';
		});
	};

	result.width = function(value){
		styleFn.call(result, value, 'width');
	};

	result.height = function(value){
		styleFn.call(result, value, 'height');
	};

	return result;
};

var $div = $('div');

console.log( $div ); // 2 divs

var $red = $('.red');
console.log( $red ); // 1 div

$red.width('50');
$red.height('100');