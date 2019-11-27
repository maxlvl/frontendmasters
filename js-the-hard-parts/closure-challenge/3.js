function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();


willCounter()
willCounter()

// const outer = () => {
// 	let counter = 0;
// 	const incrementCounter = () => {
// 		counter++;
// 		console.log('counter', counter);
// 	}
// 	return incrementCounter
// }

// const willCounter = outer();

// willCounter()
// willCounter()

