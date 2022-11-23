function openModal(mnc){
  let modal = document.getElementById(mnc);

  if(typeof modal == 'undefined' || modal == null)
    return;

  modal.style.display = 'Block';
}

function closeModal(mnc){

}
