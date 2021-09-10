const btnArrow = document.querySelectorAll('.btn-arrow');
const cardRolContent = document.querySelectorAll('.card_rol__content');
const cardRol = document.querySelectorAll('.card_rol');


for (let i = 0; i < btnArrow.length; i++) {

    btnArrow[i].onclick = function () {

        btnArrow[i].classList.toggle('active');
        cardRolContent[i].classList.toggle('active');
        cardRol[i].classList.toggle('active');
    }
}






