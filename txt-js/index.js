const target = document.querySelector(".target");
let array = ['simple', 'smart', 'strong', 'clear'];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
    const letter = document.createElement('span');
    target.appendChild(letter);

    letter.classList.add('letter');
    letter.style.opacity = '0';
    letter.style.animation = 'anim 9s ease forwards'
    letter.textContent = array[wordIndex][letterIndex];

setTimeout(() => {
    letter.remove();
}, 3000)
}


const loop = () => {
    setTimeout(() => {
        if (wordIndex >= array.length){
            wordIndex = 0;
            letterIndex = 0.
            loop();
        } else if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();
        } else {
            letterIndex = 0;
            wordIndex++;
            setTimeout(() => {
                loop();
            }, 3000);
        }
    }, 80);
};

loop();