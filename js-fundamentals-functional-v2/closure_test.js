var ACTUAL
var OUTERFUNC

var foo = function() {

	var counterInOuterScope = 10

	var bar = () => {
		counterInOuterScope = counterInOuterScope + 1
		ACTUAL = counterInOuterScope
	}

	OUTERFUNC = bar

}

foo()
console.log(ACTUAL)
OUTERFUNC()
console.log(ACTUAL)
foo()
OUTERFUNC()
console.log(ACTUAL)
OUTERFUNC()
console.log(ACTUAL)
OUTERFUNC()
console.log(ACTUAL)
OUTERFUNC()
console.log(ACTUAL)
OUTERFUNC()
console.log(ACTUAL)
foo()
OUTERFUNC()
console.log(ACTUAL)