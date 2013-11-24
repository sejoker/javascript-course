var one = {
	name: 'one',
	say: function (greet) {
		return console.log(greet + ', ' + this.name);
	}
};

var two = {
	name: 'two'
};

if (typeof Function.prototype.myBind === 'undefined' ){
	Function.prototype.myBind = function(context){
		var that = this,
			contextClosure = context,
			argsClosure = [].slice.call(arguments, 1);
		return function(context){
			that.apply(contextClosure, argsClosure.concat([].slice.call(arguments)));
		}
	};
}

var twoSay2 = one.say.myBind(two);
twoSay2('privet'); //privet, two

var twoSay3 = one.say.myBind(two, 'nihao');
twoSay3(); // nihao, two