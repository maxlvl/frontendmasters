const createFunction = () => {
	const helloFunc = () => {
		console.log('hello');
	}
	return helloFunc
}


const function1 = createFunction();
// now we'll call the function we just created
function1(); //should console.log('hello');

