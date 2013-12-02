var Person = function(args){
	return Object.create(args);
};

var p = new Person({
	name: 'Jack',
	age: '10',
	jump: function(){ return 'My name is ' + this.name + ' and I am ' + this.age  + ' years old.'; }
});


console.log(p.jump()); // “My name is Jack and I am 10 years old.”