let popup = document.getElementById('popup');

function openPopup() {
      popup.classList.add("open-popup");
      popup.classList.remove("close-payment");

}

function closePopup() {
      popup.classList.remove("open-popup");
      popup.classList.add("close-payment");
}