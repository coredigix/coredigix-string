const stringUtils	= require('../');


var testStr	= 'coredigix\\.string-utils. : >> \' " hello @world #wide 123 -+*/2~!'
console.log('String to test: ', testStr);

console.log('==============\nCase:\n==============');
console.log('Capitalize >> ', stringUtils.capitalize(testStr));
console.log('CamelCase >> ', stringUtils.camelCase(testStr));
console.log('SnakeCase >> ', stringUtils.snakeCase(testStr));
console.log('SnakeCase >> ', stringUtils.snakeCase(testStr, '_'));
console.log('SwapCase >> ', stringUtils.swapCase(testStr));
console.log('==============\nEncode:\n==============');
console.log('EncodeURIComponent >> ', stringUtils.encodeURIComponent(testStr));
console.log('==============\nSplit:\n==============');
console.log('split on "." >> ', stringUtils.split(testStr, '.'));

console.log("\nEND.");