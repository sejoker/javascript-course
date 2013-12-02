var Person = function(args){
	var i,
		propNames = Object.getOwnPropertyNames(args),
		propName,
		fn = function(value){
			var field = value;
			return {
						getFunc: function(){
							return field;
						},
						setFunc: function(newValue){
							field = newValue
						}
					};
			};

	for( i = 0; i < propNames.length; i += 1 ){		
		var propName = propNames[i];
		if (typeof args[propName] !== 'function'){			
			var fieldWithCapital = propName.substr(0, 1).toUpperCase() + propName.substr(1), 
				getterName = 'get' + fieldWithCapital,
				setterName = 'set' + fieldWithCapital,
				propertyWrapper = fn(args[propName]);
			this[getterName] = propertyWrapper.getFunc;
			this[setterName] = propertyWrapper.setFunc;
		}
		else {
			this[propName] = function() { return args[propName].call(args); }
		}
	}
};

var p = new Person({
	name: 'Jack',
	age: '10',
	jump: function(){ return 'My name is ' + this.name + ' and I am ' + this.age  + ' years old.'; }
});

console.log(p.getName()); // Jack
console.log(p.name);  // undefined
console.log(p.getAge()) // 10
console.log(p.age); // undefined
console.log(p.jump()); // “My name is Jack and I am 10 years old.”
console.log(p.getJump) // undefined