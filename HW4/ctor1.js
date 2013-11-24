var Person = function(args){
	var i,
		propNames = Object.getOwnPropertyNames(args);

	for( i = 0; i < propNames.length; i += 1 ){
		this[propNames[i]] = args[propNames[i]];		
	}
};

var p = new Person({
	name: 'Jack',
	age: '10',
	jump: function(){ return 'My name is ' + this.name + ' and I am ' + this.age  + ' years old.'; }
});


console.log(p.jump()); // “My name is Jack and I am 10 years old.”