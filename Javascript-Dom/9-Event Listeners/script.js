//todo Ulaşmak istediğim nesneyi seçiyorum.
const mesaj=document.getElementById("mesaj");
const button=document.querySelector("button");

//todo html butonumu "temizle" adı altında yakalıyorum.
const temizle=document.getElementById("temizle");

//todo mesajGoster fonksiyonumu tanımlıyorum, html'de bulunan onClick kısmına atıyorum.
function mesajGoster(){
    console.log(mesaj.value);
    mesaj.value="";
}

//todo Consolu temizlemek için fonksiyon yazıyorum.
function clearAll(){
    console.clear();
}

button.addEventListener("click", mesajGoster);

//todo Consolu temizlemek için yazmış olduğum fonksiyonu "temizle" butonuna ekliyorum.
temizle.addEventListener("click",clearAll);
//! temizle butonuna tıklandığında => clearAll fonksiyonunu çalıştır diyorum.