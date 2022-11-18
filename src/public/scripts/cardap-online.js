let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");

uploadButton.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(uploadButton.files[0]);
  reader.onload = () => {
    chosenImage.setAttribute("src", reader.result);
  };
  fileName.textContent = uploadButton.files[0].name;
};

let uploadButtonSecond = document.getElementById("upload-button-second");
let chosenImageSecond = document.getElementById("profile-image");

uploadButtonSecond.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(uploadButtonSecond.files[0]);
  reader.onload = () => {
    chosenImageSecond.setAttribute("src", reader.result);
  };
  fileName.textContent = uploadButtonSecond.files[0].name;
};
