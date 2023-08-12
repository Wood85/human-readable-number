module.exports = function toReadable(number) {
	let str = '' + number;
	function getDigit(digit) {
		let n;
		switch (digit) {
			case "0":
				n = "zero";
				break;
			case "1":
				n = "one";
				break;
			case "2":
				n = "two";
				break;
			case "3":
				n = "three";
				break;
			case "4":
				n = "four";
				break;
			case "5":
				n = "five";
				break;
			case "6":
				n = "six";
				break;
			case "7":
				n = "seven";
				break;
			case "8":
				n = "eight";
				break;
			case "9":
				n = "nine";
				break;
			default:
				n = new Error("Invalid input")
		}
		return n
	}

	function numberNameFrom10To19(num) {
		let n;
		switch (num) {
			case "10":
				n = "ten";
				break;
			case "11":
				n = "eleven";
				break;
			case "12":
				n = "twelve";
				break;
			case "13":
				n = "thirteen";
				break;
			case "14":
				n = "fourteen";
				break;
			case "15":
				n = "fifteen";
				break;
			case "16":
				n = "sixteen";
				break;
			case "17":
				n = "seventeen";
				break;
			case "18":
				n = "eighteen";
				break;
			case "19":
				n = "nineteen";
				break;
			default:
				n = new Error("Invalid input")
		}
		return n;
	}

	function dozensName(dozens) {
		let n;
		switch (dozens) {
			case "2":
				n = "twenty";
				break;
			case "3":
				n = "thirty";
				break;
			case "4":
				n = "forty";
				break;
			case "5":
				n = "fifty";
				break;
			case "6":
				n = "sixty";
				break;
			case "7":
				n = "seventy";
				break;
			case "8":
				n = "eighty";
				break;
			case "9":
				n = "ninety";
				break;
			default:
				n = new Error("Invalid input")
		}
		return n;
	}

	if (str.length === 1) {
		return getDigit(str);
	};
	if (str.length === 2 && (number > 9 && number < 20)) {
		return numberNameFrom10To19(str);
	};
	if (str.length === 2 && number > 19 && (parseInt(str[1], 10) !== 0)) {
		const result = `${dozensName(str[0])} ${getDigit(str[1])}`;
		return result;
	}
	if (str.length === 2 && (parseInt(str[0], 10) > 1) && (parseInt(str[1], 10) === 0)) {
		const result = `${dozensName(str[0])}`;
		return result;
	}
	if (str.length === 3 && (parseInt(str[1], 10) > 1) && (parseInt(str[2], 10) !== 0)) {
		const result = `${getDigit(str[0])} hundred ${dozensName(str[1])} ${getDigit(str[2])}`;
		return result;
	}
	if (str.length === 3 && (parseInt(str[1], 10) > 1) && (parseInt(str[2], 10) === 0)) {
		const result = `${getDigit(str[0])} hundred ${dozensName(str[1])}`;
		return result;
	}
	if (str.length === 3 && (parseInt(str[1], 10) === 1)) {
		let string = str[1] + str[2]
		const result = `${getDigit(str[0])} hundred ${numberNameFrom10To19(string)}`;
		return result;
	}
	if (str.length === 3 && (parseInt(str[1], 10) === 0) && (parseInt(str[2], 10) !== 0)) {
		const result = `${getDigit(str[0])} hundred ${getDigit(str[2])}`;
		return result;
	}
	if (str.length === 3 && (parseInt(str[1], 10) === 0) && (parseInt(str[2], 10) === 0)) {
		const result = `${getDigit(str[0])} hundred`;
		return result;
	}
}

function reverse(number) {
	let str = '' + number;
	const arr = str.split('');
	const filteredArr = arr.filter((elem) => elem !== '-');
	const reversedStr = filteredArr.reverse().join('');
	const reversedNumber = parseInt(reversedStr, 10);
	return reversedNumber;
}
