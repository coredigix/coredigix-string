/** strEncodeURIComponent */
function strEncodeURIComponent(str){
	if(typeof str === 'string')
		return encodeURIComponent(str).replace(/'/g, '%27');
	else {
		throw new Error('EncodeURIComponent not implemented for none string values');
	}
}