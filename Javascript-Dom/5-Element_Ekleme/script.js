//!                              Element Ekleme
//!-----------------------------------------------------------------------------
//todo 1- elementi nasıl ekleriz (insertAdjacentElement)
function insertElement() {
    const ul = document.querySelector("#myList"); // ul ye ulaşıyorum.

    const h1 = document.createElement("h1") // h1 elementi oluşturdum.
    h1.textContent = "Elementi nasıl ekleriz"; // h1 in içine bunu yazdırdım.

    ul.insertAdjacentElement("beforebegin", h1);
}
insertElement();
//!-----------------------------------------------------------------------------
/* 
!  ELEMENTLERİN EKLENECEĞİ YERLER
    beforebegin
<div>
    afterbegin
  item
    beforeend
</div>
    afterend
*/
//!-----------------------------------------------------------------------------
//todo 2- istediğimiz pozisyone ekleme (insertAdjacentText)
function insertText() {
    const item = document.querySelector("li:first-child");
    item.insertAdjacentText("beforebegin", "insertAdjacentText");
}
insertText();
//!-----------------------------------------------------------------------------
//todo 3- HTML içeriği eklemek istiyorsak (insertAdjacentHTML)
function insertHtml() {
    const item = document.querySelector("li:nth-child(2)");
    item.insertAdjacentHTML("beforebegin", "<h2>insertAdjacentHTML</h2>");
}
// insertHtml();
//!-----------------------------------------------------------------------------
//todo 4- insertBefore
function insertBefore() {
    const ul = document.querySelector("#myList");

    const li = document.createElement("li");
    li.textContent = "insertBefore";

    const secondLi = document.querySelector("li:nth-child(2)");

    ul.insertBefore(li, secondLi);
}
insertBefore();
//!-----------------------------------------------------------------------------