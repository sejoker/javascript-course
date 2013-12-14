// Your code goes here
var my_$ = function(selector){
	var domElements = document.querySelectorAll(selector),
		styleFn = function(value, property){

    var values = [];
		[].forEach.call(domElements, function(element, idx, array){
		  if (value){
		    element.style[property] = value;  
		  }
			
     values.push(element.style[property] == '' 
        ? '0px' 
        : element.style[property]);
		});
		
		return values;
	};

	domElements.width = function(size){
	  return styleFn.call(domElements, size, 'width');
	};

	domElements.height = function(size){
		return styleFn.call(domElements, size, 'height');
	};
	
  var applyCssSet = function(style){
    for(var property in style){
      if (style.hasOwnProperty(property)){
        styleFn.call(domElements, style[property], property)
      }
      
      return domElements;
    }  
  }
  
	var applyCssSingle = function(property, value){
    styleFn.call(domElements, value, property);
    return domElements;
  }
  
  domElements.css = function(){
    var args = arguments;
    switch(arguments.length){
      case 1: 
          applyCssSet.apply(this, arguments);
          break;
        
      case 2: 
        applyCssSingle.apply(this, arguments);
        break;
      
      case 3: 
        //applyCssSingle(arguments[0], arguments[1])
        
        setTimeout( function(){ applyCssSingle(args[0], args[1]) }, args[2]);
        //applyCssSingle.apply(this, arguments);
        //return new Error('2323');
        break;
    }
    
    return domElements;
  }
	return domElements;
};

/*
var $div = $('div');

console.log( $div ); // 2 divs

var $red = $('.red');
console.log( $red ); // 1 div

$red.width('50');
*/
my_$('.red').css('height', '500px', 1000)
//$red.height('100');