//!                        ELEMENT GÜNCELLEME
function replaceItem1(){
    const firstItem=document.querySelector("li:first-child");
    const li=document.createElement("li");
    li.textContent="Güncellenmiş Eleman";

    firstItem.replaceWith(li);
}

replaceItem1();

//! GÜNCELLENECEK ELEMAN HTML OLARAK ELİMDE MEVCUTSA ALTERNATİF YÖNTEM:  GÜNCELLENECEK ELEMAN(<li>item 2</li>)
function replaceItem2(){
    const secondItem=document.querySelector("li:nth-child(2)");
    // secondItem.innerHTML="updated item 2";  //second element altındaki içeriği günceller
    secondItem.outerHTML="<li>updated item 2</li>"; //outerHTML içeriyi değil dış elementi günceller yani li ler kalkar ve tekrar eklememiz gerekir.


}
replaceItem2();

function replaceAllItems(){
    const items=document.querySelectorAll("li");
    for(let i=0; i<items.length; i++){
        // items[i].outerHTML="<li>Replace All</li>";
        // items[i].innerHTML="Replace All";
        if(i==1){
            items[i].innerHTML="Second Item";
        }
        else{
            items[i].innerHTML="Replace All";
        }
    }
}

replaceAllItems();