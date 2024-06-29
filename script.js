const inputString = document.getElementById('text-input');
const result = document.getElementById('result');
const checkButton = document.getElementById('check-btn');

function stringCheck() {

    const str = inputString.value;
    function cleanedString(str) {
        const regex = /[^A-Za-z0-9]/g;
        return str.replace(regex, '').toLowerCase();
    }
    function reversedString(str) {
        return cleanedString(str).split('').reverse().join('');
    }

    const cleaned = cleanedString(str);
    const reversed = reversedString(str);

    if (str === '') {
        alert('Please input a value');
        return;
    } else if (cleaned !== reversed) {
        result.textContent = `${str} is not a palindrome.`;
    } else {
        result.textContent = `${str} is a palindrome.`;
    }
}

checkButton.addEventListener('click', stringCheck);
