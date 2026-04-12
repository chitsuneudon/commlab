let what;
let happened; 
let question;

window.onload = () => {
    what = document.querySelector('.what');
    happened = document.querySelector('.happened');
    question = document.querySelector('.question');
}

function glitch() {
    const btn = document.getElementById('first-btn');
    const btn2 = document.querySelector('.btn-2');

    btn.style.display = 'none';

    const glitchDiv = document.querySelector('.glitch');
    const glitchImg = document.querySelector('.glitch img');
    const currentSrc = glitchImg.src;
    glitchImg.src = '';
    glitchImg.src = currentSrc;
    glitchDiv.style.display = 'block';

    setTimeout(() => {
        glitchDiv.style.display = 'none'
        btn2.style.display = 'block'
    }, 200);
}
function glitch2(){
    const btn2 = document.getElementById('second-btn');
    btn2.style.display = 'none';
    const container = document.getElementById('container');
    container.style.backgroundColor = 'rgb(236, 179, 228)';
    const btn3 = document.querySelector('.btn-3')

    const glitchDiv = document.querySelector('.glitch');
    const glitchImg = document.querySelector('.glitch img');
    const currentSrc = glitchImg.src;
    glitchImg.src = '';
    glitchImg.src = currentSrc;
    glitchDiv.style.display = 'block';

    setTimeout(() => {
        glitchDiv.style.display = 'none'
        btn3.style.display = 'block'
    }, 200);
}
function glitch3(){
    const btn3 = document.getElementById('third-btn');
    btn3.style.display = 'none';
    const container = document.getElementById('container');
    container.style.backgroundColor = 'rgb(221, 10, 10)';
    const btn4 = document.querySelector('.btn-4')

    const glitchDiv2 = document.querySelector('.glitch2');
    const glitchImg2 = document.querySelector('.glitch2 img');
    const currentSrc2 = glitchImg2.src;
    glitchImg2.src = '';
    glitchImg2.src = currentSrc2;
    glitchDiv2.style.display = 'block';

    setTimeout(() => {
        glitchDiv2.style.display = 'none'
        btn4.style.display = 'block'
    }, 200);
}
function glitch4(){
    const btn4 = document.getElementById('fourth-btn');
    btn4.style.display = 'none';
    const container = document.getElementById('container');
    container.style.backgroundColor = 'rgb(0, 0, 0)';

    const glitchDiv2 = document.querySelector('.glitch2');
    const glitchImg2 = document.querySelector('.glitch2 img');
    const currentSrc2 = glitchImg2.src;
    glitchImg2.src = '';
    glitchImg2.src = currentSrc2;
    glitchDiv2.style.display = 'block';

    const cover = document.querySelector('.cover')
    const text1 = document.querySelector('.intro-text');

    setTimeout(() => {
        glitchDiv2.style.display = 'none'
        text1.style.display = 'block'
        cover.style.display = 'block'

        setTimeout(() => {
            cover.style.left = '100vw';
        }, 100);

    }, 200);
}

// new section kind of 

function whatFnc(){
    if (happened.style.display !== 'none' || question.style.display !== 'none'){
        happened.style.display = 'none';
        question.style.display = 'none';
        return;
    }
    spawnWhat()
}
function happenedFnc(){
    if(what.style.display !== 'none' || question.style.display !== 'none'){
        what.style.display = 'none';
        question.style.display = 'none';
        return;
    }
    spawnHappened()
}
function questionFnc(){
    if(happened.style.display !== 'none' || what.style.display !== 'none'){
    what.style.display = 'none';
    happened.style.display = 'none';
    return;
    }
    spawnQuestion()
}
function spawnWhat(){
    let newWhat = document.createElement('div');
    newWhat.innerText = "What";
    newWhat.className = "random-what"

    const randomX = Math.floor(Math.random()* (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50));

    newWhat.style.left = randomX + 'px';
    newWhat.style.top = randomY + 'px';
    newWhat.style.position = 'absolute';
    newWhat.style.color = 'white';
    newWhat.style.cursor = 'pointer';

    newWhat.onclick = spawnWhat;

    document.body.appendChild(newWhat);

    checkRestart()
}
function spawnHappened(){
    let newHappened = document.createElement('div');
    newHappened.innerText = "happened";
    newHappened.className = "random-happened"

    const randomX = Math.floor(Math.random()* (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50));

    newHappened.style.left = randomX + 'px';
    newHappened.style.top = randomY + 'px';
    newHappened.style.position = 'absolute';
    newHappened.style.color = 'white';
    newHappened.style.cursor = 'pointer';

    newHappened.onclick = spawnHappened;

    document.body.appendChild(newHappened);

    checkRestart()

}
function spawnQuestion(){
    let newQuestion = document.createElement('div');
    newQuestion.innerText = "...?";
    newQuestion.className = "random-question"

    const randomX = Math.floor(Math.random()* (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50));

    newQuestion.style.left = randomX + 'px';
    newQuestion.style.top = randomY + 'px';
    newQuestion.style.position = 'absolute';
    newQuestion.style.color = 'white';
    newQuestion.style.cursor = 'pointer';

    newQuestion.onclick = spawnQuestion;

    document.body.appendChild(newQuestion);

    checkRestart()

}
function checkRestart(){
    const totalSpawns = document.querySelectorAll('.random-what, .random-happened, .random-question').length;
    if(totalSpawns >= 100)
        location.reload();
}
