let textIn = document.querySelector(".text__area");
let textProcessed = document.querySelector(".text__area__processed");

function buttonEncrypt() {
  var encryptedText = encrypt(textIn.value);
  textProcessed.value = encryptedText;
  textIn.value = "";
  textProcessed.style.backgroundImage = "none";
}

function encrypt(stringEncryptor) {
  let matrizEncryptor = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncryptor = stringEncryptor.toLowerCase();

  for (let i = 0; i < matrizEncryptor.length; i++) {
    if (stringEncryptor.includes(matrizEncryptor[i][0])) {
      stringEncryptor = stringEncryptor.replaceAll(
        matrizEncryptor[i][0],
        matrizEncryptor[i][1]
      );
    }
  }
  return stringEncryptor;
}

function buttonDecrypt() {
  var decryptedText = decrypt(textIn.value);
  textProcessed.value = decryptedText;
  textIn.value = "";
  textProcessed.style.backgroundImage = "none";
}

function decrypt(stringDecryptor) {
  let matrizEncryptor = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDecryptor = stringDecryptor.toLowerCase();

  for (let i = 0; i < matrizEncryptor.length; i++) {
    if (stringDecryptor.includes(matrizEncryptor[i][1])) {
      stringDecryptor = stringDecryptor.replaceAll(
        matrizEncryptor[i][1],
        matrizEncryptor[i][0]
      );
    }
  }
  return stringDecryptor;
}

document.getElementById("copyButton").addEventListener("click", function () {
  let encryptedText = document.getElementById(
    "text__area__processed__id"
  ).value;
  navigator.clipboard
    .writeText(encryptedText)
    // .then(function () {
    //   // Notificación (opcional)
    //   alert("Texto copiado al portapapeles");
    // })
    .catch(function (error) {
      console.error("Error al copiar el texto: ", error);
    });
});

textProcessed.addEventListener("touchstart", (e) => {
  textProcessed.style.height = "4rem";

  textProcessed.style.height = textProcessed.scrollHeight + 2 + "px";
});
