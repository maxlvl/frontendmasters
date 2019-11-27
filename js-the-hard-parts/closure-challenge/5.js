const once = (cb) => {
	let alreadyRan = false;

	const func = () => {
		if (alreadyRan) {
			console.log("returning result")
			return result
		} 
		const result = cb()
		console.log("returning first time")
		alreadyRan = true
		
	}
	return func
}


function addCounter() {
	console.log("1")
}

const onceFunc = once(addCounter)

onceFunc()
onceFunc()