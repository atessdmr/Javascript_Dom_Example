const h1 = document.querySelector("h1");
const button=document.querySelector("button");
const items=document.querySelectorAll(".items li");

function fn(){
    // h1.classList.add("red");  ekler.
    // h1.classList.remove("red"); kaldırır.
    // h1.classList.toggle("red"); yoksa ekler , varsa kaldırır.
    // h1.classList.replace("red","blue"); günceller.


    for(let i=0; i<items.length; i++){
        items[i].classList.add("active");
    }
}

//todo BUTONA TIKLANDIĞINDA "fn" FONKSİYONUNU ÇALIŞTIRMAK İÇİN:
button.addEventListener("click",fn);

//todo BUTONA TIKLADIĞIMDA EKLENSİN , EKLİYSE KALDIRILMASI İÇİN "fn" FONKSİYONUNA h1.classList.add yerine h1.classList.toggle yazıyoruz.

