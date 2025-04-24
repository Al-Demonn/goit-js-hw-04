function makeArray(firstArray, secondArray, maxLength) {
	const sumArray = [];
	for (let i = 0; i < firstArray.length; i++) {
		sumArray.push(firstArray[i]);
	}
	for (let j = 0; j < secondArray.length; j++) {
		sumArray.push(secondArray[j]);
	}
	if (sumArray.length > maxLength) {
		return sumArray.slice(0, maxLength);
	}
	return sumArray;
}


console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
