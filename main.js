document.querySelector('#input').addEventListener('focus', () => {
    document.querySelector('.myDiv').style.display = 'block';
})

document.querySelector('#input').addEventListener('blur', () => {
    document.querySelector('.myDiv').style.display = 'none';
})