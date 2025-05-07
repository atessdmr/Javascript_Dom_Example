//!        ELEMENT SİLME

function clearHeader(mesaj) {
    const h1 = document.querySelector(mesaj);
    h1.remove();
}

clearHeader("#deneme");

//todo  Kapsam altındaki childleri silmek:

function removeItem1() {
    // const firstItem=document.querySelector("li:first-child");
    // firstItem.remove();
    //? alternatif silme yöntemi :

    const ul = document.querySelector("ul");
    const firstItem = document.querySelector("li:first-child");
    ul.removeChild(firstItem)

}
// removeItem1();

function removeItem(number) {
    const ul = document.querySelector("ul");
    const item = document.querySelector(`li:nth-child(${number})`);

    ul.removeChild(item);
}

removeItem(2);


function removeAll() {
    // const ul=document.querySelector("ul");
    // ul.innerHTML="";
    //todo ALTERNATİF YÖNTEM 2:
    const ul = document.querySelector("ul");
    
    while (ul.firstChild) {
        // ul.removeChild(ul.firstChild);
        //todo Alternatif 2'nin 2. yöntemi:
        ul.firstChild.remove();
    }


}
removeAll();