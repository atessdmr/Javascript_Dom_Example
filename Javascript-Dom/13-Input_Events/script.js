//!                                                       Input Events

//!------------------------------------------------------------------------------------------------------------------------------------
//todo Kullanacağımız elementleri yakalayıp , atamalarını yapıyoruz.

const input=document.getElementById("input");
const title=document.getElementById("title");
const checkbox = document.getElementById("checkbox");
const select = document.getElementById("select");

//!------------------------------------------------------------------------------------------------------------------------------------
//todo Input'a yazdığımız yazıyı h1 etiketine aktarmak için yapılması gereken:

function onInput(e){
title.textContent=e.target.value; // Input'a yazılan bilgiyi "e.target.value" ile yakalayıp , title'ın "textContent" ine yazdırıyoruz.
}
input.addEventListener("input",onInput);

//!------------------------------------------------------------------------------------------------------------------------------------
//todo Input'a tıklandığında; focus özelliği ile inputu seçiyoruz ve seçtiğimiz input üzerinde değişiklikler yapabiliyoruz.

function onFocus(e){
    console.log("focus");             // Consol'a focus yazarak çalıştığını belirtir.
    input.style.outlineStyle="solid"; // Seçili inputun çerçeve sitili
    input.style.outlineWidth="1px";   // Seçili inputun çerçeve kalınlığı
    input.style.outlineColor="aqua";  // Seçili inputun çerçeve rengi
}
input.addEventListener("focus",onFocus); // Mouse ile tıklanıldığında odaklanılsın ve onFocus foksiyonu çalıştırılsın.

//!------------------------------------------------------------------------------------------------------------------------------------
//todo Input'dan başka bir yere tıklanıldığında odağı kaldırmak için "blur" attribute'unu kullanıyoruz.

function onBlur(e){
    console.log("blur");             // Consol'a blur yazarak çalıştığını belirtir.
    input.style.outlineStyle="none"; // Input harici bir yere tıklanıldığında yukarıda yaptığımız özel çerçeveyi kaldırır.
}
input.addEventListener("blur",onBlur); // Seçili input'dan başka bir yere tıklanıldığında odağı kaldırır.

//!------------------------------------------------------------------------------------------------------------------------------------
//todo Checkbox üzerinde seçim işlemi gerçekleştiğinde oluşmasını istediğimiz eylemler için bu yöntemi kullanıyoruz.

function onChange(e){
console.log(e.target.checked); // Checkbox seçildiğinde consol'a "true" yazar , seçim kaldırıldığında ise "false" yazar.
}
checkbox.addEventListener("change",onChange);

//!------------------------------------------------------------------------------------------------------------------------------------
//todo Select üzerinde seçim işlemi gerçekleştiğinde oluşmasını istediğimiz eylemler için bu yöntemi kullanıyoruz.

function onSelected(e){
    console.log(e.target.value); // Select üzerinde seçilen bölümün value değerini yazdırır.
}
select.addEventListener("change",onSelected);

//!------------------------------------------------------------------------------------------------------------------------------------