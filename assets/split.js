/**
 * The difference with String.prototype.split, is that this split ignores the char if escaped
 * and other difference is that this accepts only one char
 */

function strSplit(str, char){
	assert(arguments.length === 2, 'Needs exaclty 2 arguments');
	assert(char.length === 1, 'Accepts only one char as seconde arg');
	var result	= [],
		c,
		pos 	= 0,
		substr	= '';

	var appendResult = (substring =>{
		if(substr === '')
			result.push(substring);
		else {
			result.push(substr + substring);
			substr = '';
		}
	});

	for(var i=0, len = str.length; i<len; ++i){
		c	= str.charAt(i);
		if(c === '\\'){
			if(str.charAt(i + 1) === char){
				substr	+= str.substring(pos, i);
				++i; // ignore next element
				pos = i;
			}
		}
		else if(c === char){
			appendResult(str.substring(pos, i));
			pos	= i+1;
		}
	}
	if(pos < len)
		appendResult(str.substr(pos));
	return result;
}