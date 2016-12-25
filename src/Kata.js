function add(){
    var result = '0';
    if (arguments.length===0) return NaN;
    if (arguments.length===1) return arguments[0].toString();

    for (var f=0; f<arguments.length; f++){
        if (isNaN(arguments[f])) return NaN;
        result = addTwoNumbers(result,arguments[f].toString());
    }
    return result;
}

function addTwoNumbers(n1,n2){    
    var digit, base = 10,
        result =  [], final = [], carry = 0, value,
        num1 = [], num2 = [],

        integerPartOfN1 = getLeftOfNumber(n1),        
        leftNum1 = integerPartOfN1.split('').reverse(),
        decimalPartOfN1 = getRightOfNumber(n1),        
        rightNum1 = decimalPartOfN1.split(''),

        integerPartOfN2 = getLeftOfNumber(n2),
        leftNum2 = integerPartOfN2.split('').reverse(),
        decimalPartOfN2 = getRightOfNumber(n2),        
        rightNum2 = decimalPartOfN2.split('');
        
    if (leftNum1.length>=leftNum2.length) {        
        leftNum2 = addCerosToNumber(leftNum1.length - leftNum2.length, leftNum2);
    } else {        
        leftNum1 = addCerosToNumber(leftNum2.length - leftNum1.length, leftNum1);
    }

    if (rightNum1.length>=rightNum2.length) {        
        rightNum2 = addCerosToNumber(rightNum1.length - rightNum2.length, rightNum2);
    } else {        
        rightNum1 = addCerosToNumber(rightNum2.length - rightNum1.length, rightNum1);
    }


    rightNum1.reverse()
    if (rightNum1.length>0){
        rightNum1.push('.');
    }   
    num1 = rightNum1.concat(leftNum1);

    rightNum2.reverse();
    if (rightNum2.length>0){
        rightNum2.push('.');
    } 
    num2 = rightNum2.concat(leftNum2);

    for (var i=0; i<num1.length; i++) {
        digit='.';
        if (num1[i] !== '.'){
            value = parseInt(num1[i])+parseInt(num2[i])+carry;
            carry = Math.floor(value/base);
            digit = value % base;
        }
        result.push(digit);
    }
    if (carry > 0) result.push(carry);

    final = removeLeftCeros(result.reverse().join(''));
    return removeRightCeros(final);
}

function addCerosToNumber(qty, num) {
    for (var i=0; i<qty; i++){
            num.push('0');
    }
    return num;
}

function getLeftOfNumber(num){
    var commaPos = num.toString().indexOf('.');

    if (commaPos === -1) return num.toString();
    if (commaPos === 0) return '0';
    return num.toString().slice(0,commaPos);
}

function getRightOfNumber(num){
    var commaPos = num.toString().indexOf('.');

    if (commaPos === -1) return '';    
    return num.toString().slice(commaPos+1,num.toString().length);    
}

function removeLeftCeros(num) {
    var pos = 0;
    while (num[pos]==='0' && num[pos]!='.'){
        pos++;
    }
    if (num[pos]==='.' && pos > 0){
        pos--;
    }
    
    return num.slice(pos,num.length);
}

function removeRightCeros(num) {
    var pos = num.length-1;

    if (num.indexOf('.') === -1 ) return num;
    while (num[pos]==='0'){
        pos--;
    }
    
    return num.slice(0,pos+1);
}