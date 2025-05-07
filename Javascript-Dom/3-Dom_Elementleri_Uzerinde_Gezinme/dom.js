let sonuc;

const parent = document.querySelector(".parent");

sonuc=parent.children;
// sonuc=parent.children[0].innerText + ", " + parent.children[0].className + ", "+ parent.children[0].nodeName;
// sonuc=parent.children[0].className;
sonuc=parent.children[0].nodeName;

parent.children[0].innerText="Child One";
parent.children[0].style.color="red";
console.log(sonuc);