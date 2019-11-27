const createFunctionPrinter = (input) => {
	const printerFunc = () => {
		console.log(input);
	}

	return printerFunc
}


const printSample = createFunctionPrinter('sample');
const printHello = createFunctionPrinter('hello')
// now we'll call the functions we just created
printSample(); //should console.log('sample');
printHello(); //should console.log('hello');