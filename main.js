const vowels = ['a', 'e', 'i', 'o', 'u'];

document.getElementById('text').addEventListener('keyup', (e) => {
    const word = e.target.value.split('').filter(item => vowels.includes(item));

    document.getElementById('vowels').innerText = word.length;
});