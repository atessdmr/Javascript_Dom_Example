//!         KEYBOARD EVENTS

//todo Kullanacağımız kodlar
/*
keypress : Klavye üzerinde bir tuşa basıldığında çalışır.
keyup : Tuştan elini çektiğinde çalışır.
keydown : Tuşa bastığın an çalışır.
*/
const input = document.getElementById("text");

//!-----------------------------------------------------------------------------------------

//? keypres : Klavyeye basıldığında onKeyPress fonksiyonunu çalıştır.
function onKeyPress() {
    console.log("keyypress çalıştı.");
}

input.addEventListener("keypress", onKeyPress);

//!-----------------------------------------------------------------------------------------

//? keyup : Tuştan elini çektiğinde onKeyUp fonksiyonunu çalıştır.
function onKeyUp() {
    console.log("keyup çalıştı.");
}
input.addEventListener("keyup", onKeyUp);

//!-----------------------------------------------------------------------------------------

//? keydown : Tuşa bastığın an onKeyDown fonksiyonunu çalıştır.
function onKeyDown() {
    console.log("keydown çalıştı.");
}
input.addEventListener("keydown", onKeyDown);

//!-----------------------------------------------------------------------------------------

//? keydown kodu içerisinde hangi tuşa basıldığını öğrenmek için:

function eKeyDown(e) {
    // console.log(e); Bu kodu yazarak kapsamlı bakabilirsiniz.
    console.log(e.key); // Basılan tuşu consola yazdırır.
    // document.querySelector("h2").innerText=(e.key); Basılan son tuşu yazdırır.
    document.querySelector("h2").innerText += (e.key); // Basılan tuşları birlikte yazar.
}
input.addEventListener("keydown", eKeyDown);

//!-----------------------------------------------------------------------------------------

//? e.repeat : Bir tuşa basılı kalma durumu. Alert ile kullanıcıya uyarı gönderebilirsiniz.

function repeatKey(e) {
    if (e.repeat) {
        alert(`${e.key} tuşuna basılı kaldı.`)
    }
}
input.addEventListener("keydown", repeatKey);

//!-----------------------------------------------------------------------------------------