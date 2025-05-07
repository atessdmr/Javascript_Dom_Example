//!    Element Oluşturma

function createListItem(text) {
    const li = document.createElement("li");

    li.className = "item";
    li.id = "item1";
    li.setAttribute("data-id", "5");
    li.innerText =text;

    const ch = document.createElement("input");
    ch.type = "checkbox";
    ch.className = "ch1";

    li.appendChild(ch);

    document.getElementById("myList").appendChild(li);
}

createListItem("item 4 ");
createListItem("item 5 ");
createListItem("item 6 ");