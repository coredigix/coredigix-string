'use strict';
const assert	= require('assert');

/** Capitalize */
module.exports= {
	capitalize			: strCapitalize,
	camelCase			: strCamelCase,
	snakeCase			: strSnakeCase,
	swapCase			: strSwapCase,

	split				: strSplit,

	encodeURIComponent	: strEncodeURIComponent
}



/** Capitalize */

function strCapitalize(str){

	return str.replace(/\w+/g, txt => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

}



/** Camel case */

function strCamelCase(str){

	return str.split(/\W+/).map(w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase()).join('');

}



/** Snick case */

function strSnakeCase(str, joinChar){

	return str.trim().split(/[^\w]+|(?=[A-Z])/).map(w => w.toLowerCase()).join(joinChar || '-');

}



/** swap case */

function strSwapCase(str){

	return str.split('').map(c => {

		var c2 = c.toUpperCase();

		return c === c2 ? c.toLowerCase() : c2;

	}).join('');

}
/** strEncodeURIComponent */
function strEncodeURIComponent(str){
	if(typeof str === 'string')
		return encodeURIComponent(str).replace(/'/g, '%27');
	else {
		throw new Error('EncodeURIComponent not implemented for none string values');
	}
}
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