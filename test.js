
let count = 0;
const ValueFilter = (value, count) => {
    let actualDigit = value.toString().split('');
    if (actualDigit.length < 50) {
        if (/^[,.0-9]+$/.test(actualDigit[actualDigit.length-1]) === true) {
            if (actualDigit[actualDigit.length-1] === ',' || actualDigit[actualDigit.length-1] === '.') {
                if (count == 0) {
                    actualDigit[actualDigit.length-1] = '.';
                    setCount(1);
                    setValueFrom(actualDigit.join(''));
                }
            } else {    
                setValueFrom(value);
            }
        }   
        if (e.target.value === '') {    
            setCount(0)
            setValueFrom(value)
            console.log(count)
        }
        if (valueFrom.toString().split('').length > actualDigit.length) {
            setValueFromvalue);
        }
    }
}
