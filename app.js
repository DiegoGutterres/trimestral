const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const areas = [
  {
    id: 1,
    title: "LINGUÍSTICA",
    img: "./img/lingiustica.png",
    text: "A arte de desvendar os segredos da comunicação humana."
  },

  {
    id: 2,
    title: "LETRAS",
    img: "./img/teste.png",
    text: "Em cada letra, há o poder de criar universos inteiros de emoção e significado."
  },

  {
    id: 3,
    title: "ARTES",
    img: "./img/pincels.png",
    text: "A arte é a voz da alma, uma expressão que transcende palavras e toca profundamente os sentidos."
  },
];

let choosenArea = areas[0];

const currentareaImg = document.querySelector(".areaImg");
const currentareaTitle = document.querySelector(".areaTitle");
const currentareaFrase = document.querySelector(".areaFrase");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenArea = areas[index];

    //change texts of currentProduct
    currentareaTitle.textContent = choosenArea.title;
    currentareaFrase.textContent = choosenArea.text;
    currentareaImg.src = choosenArea.img;
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
