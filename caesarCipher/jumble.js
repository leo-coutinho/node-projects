
function jumble(input, shift) {
    console.log("the input "+ input);
    console.log("the shift "+ shift);
    if (!/^-?\d+$/.test(shift)) console.error('Shift is not an integer')
//    if (shift < 0 || shift >= 26) console.error('Shift is out of range')

    var output = '', len = input.length
    console.log("the input length "+ input.length);
	for (var i = 0; i < len; i++) {
		var c = input.charCodeAt(i);
        // Small fix for cedilla
        if (c == 231)
            c = 99;
        if (c == 199)
            c = 67;

		if (c >= 65 && c <=  90) {
            // uppercase
            output += String.fromCharCode((c - 65 + shift) % 26 + 65)
        }
		else if (c >= 97 && c <= 122) {
            // lowercase
            output += String.fromCharCode((c - 97 + shift) % 26 + 97)
        }
		else {
            // copy thru
            output += input.charAt(i)
        }

	}
	console.log("the output "+ output);
	return output
}

module.exports = jumble;