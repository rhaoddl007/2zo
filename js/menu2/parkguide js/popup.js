const closeBtn = document.getElementById("close-btn");
const imgModal = document.querySelector('.modal-backgroud');
const popupBanner = document.querySelector('.popup-banner');
imgModal.style.display = 'none';

function eventClose(e){
    e.preventDefault();
    imgModal.style.display = 'none';
}
closeBtn.addEventListener('click',eventClose);

function openBanner(){
    imgModal.style.display = 'block';
}
popupBanner.addEventListener('click',openBanner);