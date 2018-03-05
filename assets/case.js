
/** Capitalize */
function strCapitalize(str){
	return str.replace(/\w+/g, txt => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

/** Camel case */
function strCamelCase(str){
	return str.split(/\W+/).map(w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase()).join('');
}

/** Snick case */
function strSnakeCase(str){
	return str.trim().split(/[^\w]+|(?=[A-Z])/).map(w => w.toLowerCase()).join('-');
}

/** swap case */
function strSwapCase(str){
	return str.split('').map(c => {
		var c2 = c.toUpperCase();
		return c === c2 ? c.toLowerCase() : c2;
	}).join('');
}