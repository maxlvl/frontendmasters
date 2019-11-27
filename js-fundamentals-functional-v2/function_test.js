
var testvar = "testVar"

var firstFunction = () => {
	console.log("Calling second function")
	secondFunction()
}

var secondFunction = () => {
	console.log("I'm the second function!")
	console.log(testvar)
}

firstFunction()


