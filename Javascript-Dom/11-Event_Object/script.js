//!      EVENT OBJECT

const div=document.querySelectorAll("div");

function onClick(e){
    // console.log(e);
    // console.log(e.target);  Tıklanılan div'i belirtir.
    // console.log(e.timeStamp); Tıklanılma serü (zaman aşımlarını) verir.
    // console.log(e.clientX); Pencereye göre X uzaklığını verir.
    // console.log(e.clientY); Pencereye göre Y uzaklığını verir.
    // console.log(e.offsetX); Elementin başlangıcına göre mouse konumunun X uzaklığını verir.
    // console.log(e.offsetY); Elementin başlangıcına göre mouse konumunun Y uzaklığını verir.
}
for(let i=0; i<div.length; i++){
    div[i].addEventListener("click",onClick);
}


//! BU ŞEKİLDE YAZARSAK LINK'E GİDECEKTİR.
// document.querySelector("a").addEventListener("click",function(){
//     console.log("link'e tıklandı")
// })

//!LINK'E GİTMEMESİ İÇİN:
document.querySelector("a").addEventListener("click",function(e){
    e.preventDefault(); // a etiketini default olan özelliğini engelle demiş olduk.
    console.log("link'e tıklandı")
})

//todo Bazı durumlarda mesela giriş yaptın ama doğru mu diye kontrol edilmesi için bu şekilde bekletmen gerekir.