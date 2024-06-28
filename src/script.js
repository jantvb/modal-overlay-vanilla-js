/*
* https://frontendeval.com/questions/modal-overlay
*
* Build a modal control and overlay
*/
const showOffer        = document.getElementById('show-offer');
const acceptOfferModal = document.getElementById('accept-offer-modal');
const offerAccepted    = document.getElementById('offer-accepted');

function showModal() {
  showOffer.classList.add('hide');
  acceptOfferModal.classList.remove('hide');
}

function closeModal() {
  acceptOfferModal.classList.add('hide');
  showOffer.classList.remove('hide');
}

function offerAcceptedMsg() {
  acceptOfferModal.classList.add('hide');
  showOffer.classList.add('hide');
  offerAccepted.classList.remove('hide');
}