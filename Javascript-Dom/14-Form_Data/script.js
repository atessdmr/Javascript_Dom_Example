//!                                                               FORM  DATA

const form = document.getElementById("form");

//!-------------------------------------------------------------------------------------------------------------------------------------------------------
//todo Form içerisinde seçilen bilgileri consolda tutmak için:

function onSubmit(e) {
    e.preventDefault();
    const inputValue = document.getElementById("input").value;
    const checkedValue = document.getElementById("checkbox").checked;
    const selectValue = document.getElementById("select").value;

    if (inputValue === '' || selectValue === '0') { // input boş bırakılmışsa veya selec üzerinde seçim yapılmamışsa uyarı verir.
        alert("Formu doldurunuz.")
        return;                               // Alt satırda olan kodları çalıştırmadan fonksiyonu başa dönderir.
    }
    console.log(inputValue, checkedValue, selectValue); // Bilgileri eksiksiz girdiyse console'a bilgiler gelir.
    console.log("form submit");
}

// form.addEventListener("submit", onSubmit); //! Kodun çalışması için solda bulunan yorum satırının "//" silin.

//!-------------------------------------------------------------------------------------------------------------------------------------------------------
//todo  Alternatif olarak data üzerinde tanımlama yöntemi :

function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form); //todo Form üzerinden gelen bilgilere html de seçmek istediğimiz nesnenin "Name" değerlerinden ulaşırız!

    const inputValue = formData.get("input");
    const selectValue = formData.get("select");
    let checkedValue = false;                    // Data üzerinde değerleri "on,of" olarak geldiğinden, başlangıç değerini false olarak ayarladım.
    if (formData.get("checkbox") == "on") {        // Eğer chechbox değeri "on" ise, checkedValue (gelecek olan değeri) consol üzerinde true olarak yazdır.
        checkedValue = true;
    }
    if (inputValue === '' || selectValue === '0') { // input boş bırakılmışsa veya selec üzerinde seçim yapılmamışsa uyarı verir.
        alert("Formu doldurunuz.")
        return;                               // Alt satırda olan kodları çalıştırmadan fonksiyonu başa dönderir.
    }
    console.log(inputValue, checkedValue, selectValue); // Bilgileri eksiksiz girdiyse console'a bilgiler gelir.
    console.log("form submit");
}
form.addEventListener("submit", onSubmit2);

//!-------------------------------------------------------------------------------------------------------------------------------------------------------
//todo  Alternatif yöntem (entries)

function onSubmit3(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const inputValue = formData.get("input");
    const selectValue = formData.get("select");
    let checkedValue = false;
    if (formData.get("checkbox") == "on") {
        checkedValue = true;
    }
    if (inputValue === '' || selectValue === '0') {
        alert("Formu doldurunuz.")
        return;
    }
    console.log(inputValue, checkedValue, selectValue);
    console.log("form submit");

    //! Bu kısımda entries özelliğini kullanıyoruz.
    //! Bunu kullanmamızın sebebi (Iterator) olarak bize değer dönderir ve bu sayede döngüyle üzerinden geçilebiliyor.
    const entries = formData.entries(); // formData.entries diyerek bilgileri entries'in içine atıyoruz.
    for (let entry of entries) {        // entry olarak entries içerisinde ki kodları yakalıyoruz.
        console.log(entry);             // console üzerine entry olarak yakaladığımız bilgileri yazdırıyoruz.
    }                                   // her seferinde formData.get("xxx") bilgilerini yakalamak yerine tek bir döngüyle halledebiliyoruz.
}

form.addEventListener("submit", onSubmit3);

//!-------------------------------------------------------------------------------------------------------------------------------------------------------