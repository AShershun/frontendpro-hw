let result = '';
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let min = 0;
    let random = Math.floor(Math.random() * (characters.length - min + 1) + min);
    if (length === 0) {
        return result;
    }
    result += characters.charAt(random);
    return generateKey(length - 1, characters);
}

const key = generateKey(16, characters);
console.log(key);