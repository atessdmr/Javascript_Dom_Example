const shoppingList = document.querySelector(".shopping-list");
const shoppingForm = document.querySelector(".shopping-form");
const filterButtons = document.querySelectorAll(".filter-buttons button");
const clearButton = document.querySelector(".clear");

// Uygulama başlatıldığında çalışmasını istediğim kodlar
document.addEventListener("DOMContentLoaded", function () {
    loadItems();
    updateState();
    shoppingForm.addEventListener("submit", handleFormSubmit);

    for (let button of filterButtons) {
        button.addEventListener("click", handleFilterSelection);
    }
    clearButton.addEventListener("click", clear);
});

// Depo Temizleme
function clear(e) {
    shoppingList.innerHTML = "";
    localStorage.clear("shoppingItems");
    updateState();
}

// Local Storage Kaydetme
function saveToLS() {
    const listItems = shoppingList.querySelectorAll("li");
    const liste = [];

    for (let li of listItems) {
        const id = li.getAttribute("item-id");
        const name = li.querySelector(".item-name").textContent;
        const complated = li.hasAttribute("item-complated");

        liste.push({ id, name, complated });
    }
    localStorage.setItem("shoppingItems", JSON.stringify(liste));
}

function updateState() {
    const isEmpty = shoppingList.querySelectorAll("li").length === 0;
    const filterBtns = document.querySelector(".filter-buttons");

    const alert = document.querySelector(".alert");
    alert.classList.toggle("d-none", !isEmpty);
    clearButton.classList.toggle("d-none", isEmpty);
    filterBtns.classList.toggle("d-none", isEmpty);
}

function loadItems() {
    const items = JSON.parse(localStorage.getItem("shoppingItems")) || [];
    shoppingList.innerHTML = "";

    for (let item of items) {
        const li = createListItem(item);
        shoppingList.appendChild(li);
    }
}

function addItem(input) {
    const newItem = createListItem({
        id: generateId(),
        name: input.value,
        complated: false,
    });
    shoppingList.appendChild(newItem);
    input.value = "";

    updateFilteredItems();
    saveToLS();
    updateState();
}

function generateId() {
    return Date.now().toString();
}

function handleFormSubmit(e) {
    e.preventDefault();
    const input = document.getElementById("item_name");

    if (input.value.trim().length === 0) {
        alert("Lütfen geçerli bir değer giriniz.")
        return;
    }
    addItem(input);
}

// Elemanın üstünü çizmek için
function toggleComplated(e) {
    const li = e.target.parentElement;
    li.toggleAttribute("item-complated", e.target.checked);

    updateFilteredItems();
    saveToLS();
}

// Eleman ekleme
function createListItem(item) {
    // checkbox
    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("form-check-input");
    input.checked = item.complated;
    input.addEventListener("change", toggleComplated);

    // item
    const div = document.createElement("div");
    div.textContent = item.name;
    div.classList.add("item-name");
    div.addEventListener("click", openEditMode);
    div.addEventListener("blur", closeEditMode);
    div.addEventListener("keydown", cancelEnter);


    // delete icon
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fs-3 bi-x text-danger delete-icon";
    deleteIcon.addEventListener("click", deleteLi);

    // li
    const li = document.createElement("li");
    li.setAttribute("item-id", item.id);
    li.className = "border rounded p-2 mb-1";
    li.toggleAttribute("item-complated", item.complated);

    li.appendChild(input);
    li.appendChild(div);
    li.appendChild(deleteIcon);

    return li;
}

// Eleman silmek için
function deleteLi(e) {
    const li = e.target.parentElement;
    shoppingList.removeChild(li);
    saveToLS();
    updateState();
}

// Eleman güncelleme
function openEditMode(e) {
    const li = e.target.parentElement;
    if (li.hasAttribute("item-complated") == false) {
        e.target.contentEditable = true;
    }
}

// Güncellemeden çıkma
function closeEditMode(e) {
    e.target.contentEditable = false;
    if (e.target.parentElement.textContent == "") {
        deleteLi(e);
    }
    saveToLS();
}

// Güncelleme "Enter" deaktif etme
function cancelEnter(e) {
    if (e.key == "Enter") {
        e.preventDefault();
        if (e.target.parentElement.textContent == "") {
            deleteLi(e);
        }
        closeEditMode(e);
        saveToLS();
    }
}

// Filtreleme Butonları
function handleFilterSelection(e) {

    const filterBtn = e.target;

    for (let button of filterButtons) {
        button.classList.add("btn-secondary");
        button.classList.remove("btn-primary");
    }
    filterBtn.classList.add("btn-primary");
    filterBtn.classList.remove("btn-secondary");

    filterItems(filterBtn.getAttribute("item-filter"));
}

// Filtreleme Eylemi
function filterItems(filterType) {
    const li_items = shoppingList.querySelectorAll("li");
    for (let li of li_items) {
        li.classList.remove("d-flex");
        li.classList.remove("d-none");

        const item_completed = li.hasAttribute("item-complated");


        if (filterType == "completed") {
            // tamamlananlar
            li.classList.toggle(item_completed ? "d-flex" : "d-none");
        } else if (filterType == "incompleted") {
            // tamamlanmayanlar
            li.classList.toggle(item_completed ? "d-none" : "d-flex");

        } else {
            // hepsini göster
            li.classList.toggle("d-flex");
        }
    }
}

function updateFilteredItems() {
    const activeFilter = document.querySelector(".btn-primary[item-filter]");
    filterItems(activeFilter.getAttribute("item-filter"));
}

