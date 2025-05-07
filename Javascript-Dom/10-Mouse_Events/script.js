//!            Mouse Events

//!----------------------------------------------------------------------------------------------
//TODO KULLANACAĞIMIZ KODLAR
/* 
click : Tıklanıldığında
dblclick : Çift tıklanıldığında
contextmenu : Sağ tıklanıldığında
mousedown : Tek tıklanıldığında çalışır ama clickten önce gelir
mouseenter : Mouse ile kapsamına girdiğinde
mousemove veya mouseover : Mouse ile üzerine gelindiğinde
*/
//!----------------------------------------------------------------------------------------------
//html div'e ulaşıyorum.
const div=document.querySelector("div");
//!----------------------------------------------------------------------------------------------

//todo Mouse ile tıklanıldığında foksiyonun çalışması için "click" kullanıyoruz.
function onClick(){
    console.log("onClick aktif.")
}
div.addEventListener("click", onClick);

//!----------------------------------------------------------------------------------------------

//todo çift tıklanıldığında foksiyon çalışsın istiyorsak "dblclick" kullanıyoruz.
function onDblClick(){
    console.log("onDblClick aktif.")
}
div.addEventListener("dblclick", onDblClick);

//!----------------------------------------------------------------------------------------------

//todo Mouse'a sağ tıklanıldığında fonksiyonun çalışması için ise "contextmenu" kullanıyoruz.
function onContextMenu(){
    console.log("onContextMenu aktif.")
}
div.addEventListener("contextmenu", onContextMenu);

//!----------------------------------------------------------------------------------------------

//todo Mouse ile kapsamına girildiği zaman foksiyonun çalışması için "mouseenter" kullanıyoruz.
function onMouseenter(){
    console.log("onMouseenter aktif.")
}
div.addEventListener("mouseenter", onMouseenter);

//!----------------------------------------------------------------------------------------------

function onMousemove(){
    console.log("onMousemove aktif.")
}
div.addEventListener("mousemove", onMousemove);