/*

*/
console.log(document);

console.log(document.querySelector(".botao-trailer"));


const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const LinkVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", LinkVideo);
});

const botaoFecharModal = document.querySelector('.fechar-modal');

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});



