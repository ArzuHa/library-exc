let id = 0;
let library = [];

function addLibrary(name1, surname1, category1, country1, year1) {
    this.id = ++id;
    this.name1 = name1;
    this.surname1 = surname1;
    this.category1 = category1;
    this.country1 = country1;
    this.year1 = year1;
}

function addBtn(e) {
    let name, surname, category, country, year;
    name = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    category = document.getElementById("category").value;
    country = document.getElementById("country").value;
    year = document.getElementById("year").value;

    let addLBR = new addLibrary(name, surname, category, country, year);
    library.push(addLBR);


    addToTable(addLBR);
}

function addToTable(addLibrary) {

    let tBody = document.querySelector("#library > tbody");
    let tr = document.createElement("tr");

    let tdId = document.createElement("th");
    tdId.textContent = addLibrary.id;
    tr.appendChild(tdId);

    let tdName = document.createElement("td");
    tdName.textContent = addLibrary.name1;
    tr.appendChild(tdName);

    let tdSurName = document.createElement("td");
    tdSurName.textContent = addLibrary.surname1;
    tr.appendChild(tdSurName);

    let tdCtg = document.createElement("td");
    tdCtg.textContent = addLibrary.category1;
    tr.appendChild(tdCtg);

    let tdCountry = document.createElement("td");
    tdCountry.textContent = addLibrary.country1;
    tr.appendChild(tdCountry);

    let tdYear = document.createElement("td");
    tdYear.textContent = addLibrary.year1;
    tr.appendChild(tdYear);

    tBody.appendChild(tr);

}
function saveBtn(e) {
    let stList = JSON.stringify(library);
    localStorage.setItem('library', stList);
}

function deleteBtn(e) {
    
    delete library.name;
}