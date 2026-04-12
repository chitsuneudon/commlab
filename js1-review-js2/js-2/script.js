    let container = document.querySelector(".boxContainer");


function addParagraph(){
    let paragraph = document.createElement('p');

    paragraph.innerText = "Does this work?";

    document.body.append(paragraph);

}

function addBox(){
    let box = document.createElement('div');
    box.className = "box";

    // let container = document.querySelector(".boxContainer");

    container.append(box);
}

function removeAll(){
    // let container = document.querySelector(".boxContainer");

    container.remove()
}

function moveContainer(){
    container.style.left = "-100px"
}