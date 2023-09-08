const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const areas = [
  {
    id: 1,
    title: "LINGUÍSTICA",
    img: "./img/lingiustica.png",
    text: "A arte de desvendar os segredos da comunicação humana.",
    textDesc: "A área Linguística se dedica a estudar a linguagem humana, sua utilização, estrutura, aquisição e como ela é processada pelo cérebro",
    color: "#FC8BA6"
  },

  {
    id: 2,
    title: "LETRAS",
    img: "./img/teste.png",
    text: "Em cada letra, há o poder de criar universos inteiros de emoção e significado.",
    textDesc: "A área de Letras examina o estudo da linguagem e suas manifestações culturais, incluindo a literatura, a linguística, a história da escrita, entre outros.",
    color: "#FE9B7F"
  },

  {
    id: 3,
    title: "ARTES",
    img: "./img/pincels.png",
    text: "A arte é a voz da alma, uma expressão que transcende palavras e toca profundamente os sentidos.",
    textDesc: "A área de Artes visa principalmente a liberdade expressiva e criativa, tendo uma ampla variedade de disciplinas inovadoras como a música, a dança, a pintura, escultura, teatro, cinema, literatura e outras formas de expressões artísticas.",
    color: '#EE7FFE'
  },
];

let choosenArea = areas[0];
const currentareaImg = document.querySelector(".areaImg");
const currentareaTitle = document.querySelector(".areaTitle");
const currentareaFrase = document.querySelector(".areaFrase");
const currentareaDesc = document.querySelector(".areaDesc");
const currentareaBorda = document.getElementById("borda")

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //trocar a area
    choosenArea = areas[index];

    //trocar texto da atual area
    currentareaTitle.textContent = choosenArea.title;
    currentareaFrase.textContent = choosenArea.text;
    currentareaImg.src = choosenArea.img;
    currentareaDesc.textContent = choosenArea.textDesc;
    currentareaBorda.style.borderBottomColor = choosenArea.color;
    
    });
});

const areaButton = document.querySelector(".areaButton");
const close = document.querySelector(".close");

areaButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
