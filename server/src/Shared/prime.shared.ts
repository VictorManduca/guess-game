

export function findAllPrimeNumbers() {
	const min = 1
	const max = 20_000
	let primeNumbers = new Array()

	for (let number = min; number <= max; number++) {
		let isPrimeNumber: boolean = true

		for (let j = 2; j < number; j++) {
			if (number % j == 0) {
				isPrimeNumber = false
				break
			}
		}

		if (number > 1 && isPrimeNumber) {
			primeNumbers.push({
				number: number,
				sum: number.toString().split('').map(Number).reduce((a, b) => a + b, 0),
				prod: multiplyDigits(number),
				mod: number % 7
			})
		}
	}

	return primeNumbers
}

function multiplyDigits(numberParam: number) {
		const arr = []

		for(let number of String(numberParam)) {
			if (number !== '0')
				arr.push(Number(number))
		}

		return arr.reduce((p, v) => p * v)
}
