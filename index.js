let mensagem = document.querySelector("text")

function createParagrafo(){
    let para = document.createElement("P")
    para.textContent = mensagem
    document.body.appendChild("para")
}

const butao = document.querySelectorAll('#but')

for(let i = 0; i<butao.length; i++){
    butao[i].addEventListener("click", createParagrafo)
}
