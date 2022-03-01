const slidePage = document.querySelector(".slidepage"),
    firstBtn = document.querySelector('.nextBtn'),

    prevBtnSec = document.querySelector('.prev-1'),
    nextBtnSec = document.querySelector('.next-1'),

    prevBtnThird = document.querySelector('.prev-2'),
    nextBtnThird = document.querySelector('.next-2'),

    prevBtnFourth = document.querySelector('.prev-3'),
    submitBtn = document.querySelector('.submit'),

    progresstext = document.querySelectorAll('.step p'),
    progressCheck = document.querySelectorAll('.step .check'),
    bullet = document.querySelectorAll('.step .bullet'),

    inputs = [...document.querySelectorAll('input')],

    bullet1 = document.querySelector('.butte1'),
    bullet2 = document.querySelector('.butte2'),
    bullet3 = document.querySelector('.butte3'),
    bullet4 = document.querySelector('.butte4'),

    page1 = document.querySelector('.page1'),
    page2 = document.querySelector('.page2'),
    page3 = document.querySelector('.page3'),
    page4 = document.querySelector('.page4');
    

    let messageElm = document.querySelector('.message');

let current = 1;


// Next buttons handlers
firstBtn.addEventListener('click', e => {
    e.preventDefault();
    slidePage.style.marginLeft = '-25%';
    bullet[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    progresstext[current - 1].classList.add('active');
    current += 1;
});

nextBtnSec.addEventListener('click', e => {
    e.preventDefault();
    slidePage.style.marginLeft = '-50%';
    bullet[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    progresstext[current - 1].classList.add('active');
    current += 1;
});

nextBtnThird.addEventListener('click', e => {
    e.preventDefault();
    slidePage.style.marginLeft = '-75%';
    bullet[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    progresstext[current - 1].classList.add('active');
    current += 1;
});

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const isAllValid = inputs.every(input => input.checkValidity());
    const nonFilledInputs = inputs
        .filter(input => !input.checkValidity())
        .map(el => el = el.name);

    if(nonFilledInputs.length > 0) {
        messageElm.style.backgroundColor = 'rgb(255, 206, 206)';
        messageElm.style.color = 'rgb(246, 75, 75)';
        messageElm.style.padding = '10px';
        messageElm.style.borderRadius = '5px';
        messageElm.style.marginBottom = '10px';
        messageElm.textContent += nonFilledInputs.length == 1 ? `${ [...nonFilledInputs] } is required` :
        `${ [...nonFilledInputs] } are required`;
    }

    if(isAllValid) {
        bullet[current - 1].classList.add('active');
        progressCheck[current - 1].classList.add('active');
        progresstext[current - 1].classList.add('active');
        current += 1;

        setTimeout(() => {
            messageElm.style.backgroundColor = 'rgb(237, 255, 237)';
            messageElm.style.color = 'green';
            messageElm.style.padding = '10px';
            messageElm.style.borderRadius = '5px';
            messageElm.style.marginBottom = '10px';
            messageElm.textContent = "Congratulations!";
            setTimeout(() => {
                messageElm.style.display = 'none';
            }, 2500);
        }, 1000);
    }
});


// Previous buttons handlers
prevBtnSec.addEventListener('click', e => {
    e.preventDefault();
    slidePage.style.marginLeft = '0%';
    bullet[current - 2].classList.remove('active');
    progressCheck[current - 2].classList.remove('active');
    progresstext[current - 2].classList.remove('active');
    current -= 1;

});

prevBtnThird.addEventListener('click', e => {
    e.preventDefault();
    slidePage.style.marginLeft = '-25%';
    bullet[current - 2].classList.remove('active');
    progressCheck[current - 2].classList.remove('active');
    progresstext[current - 2].classList.remove('active');
    current -= 1;
});

prevBtnFourth.addEventListener('click', e => {
    e.preventDefault();
    slidePage.style.marginLeft = '-50%';
    bullet[current - 2].classList.remove('active');
    progressCheck[current - 2].classList.remove('active');
    progresstext[current - 2].classList.remove('active');
    current -= 1;
});


inputs.forEach(input => {
    input.addEventListener('focus', e => {
        e.preventDefault();
        messageElm.textContent = '';
        messageElm.style.backgroundColor = '';
    });
});
