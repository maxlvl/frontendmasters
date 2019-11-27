// const createTuple = function (a, b, c, d) {
//   console.log(arguments)
// }

// createTuple("It", "could", "be", "anyone", "no one")


const constructArr = (...arguments) => {
	const arr = Array.from(arguments)
	console.log(arr.join(" "))
}

constructArr("was", "it", "in")