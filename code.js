

const imputColor = document.querySelector('#imputColor');
const btnVisualizar = document.querySelector('#btnVisualizar');
const numeroExadec = document.querySelector('#numeroExadec');
const ejemploColor = document.querySelector('#ejemploColor');


btnVisualizar.addEventListener("click", () => {
	numeroExadec.textContent = imputColor.value;
	ejemploColor.style.backgroundColor = imputColor.value;
})