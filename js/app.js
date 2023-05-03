const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
];

// buena suerte dina
//Variable de estado que nos diga qué foto toca mostrar en todo momento
let indexPhoto = 0;

//Actualizarme el nodo adecuado para etsablecer su estilo en linea backraound image con la url de la foto que pertenece a la indexPhoto

const buttonPrebPhoto = document.querySelector(".btn-left");
const buttonNextPhoto = document.querySelector(".btn-right");
const currentPhoto = document.querySelector(".img-container");
currentPhoto.style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;

//1.Recuperar el nodo del botón y asociar el evento
//2.Al hacer click, actualizar variable de estado y sumar o restar según el botón.
//volver a actualizar el style.background

const updatePhoto = () => {
  buttonNextPhoto.addEventListener("click", () => {
    indexPhoto += 1;

    if (indexPhoto < 0) {
      indexPhoto = pictures.length - 1;
    } else if (indexPhoto == pictures.length) {
      indexPhoto = 0;
    }
    currentPhoto.style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;
  });

  buttonPrebPhoto.addEventListener("click", () => {
    indexPhoto -= 1;

    if (indexPhoto < 0) {
      indexPhoto = pictures.length - 1;
    } else if (indexPhoto == pictures.length) {
      indexPhoto = 0;
    }
    currentPhoto.style.backgroundImage = `url(../img/${pictures[indexPhoto]}.jpeg)`;
  });
};
updatePhoto();
