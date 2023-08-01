const main = document.getElementById('container');
const delPerson = document.getElementById('del-person');
const addPerson = document.getElementById('add-person')
const button = document.getElementById('button')

window.onload = async function () {
  const request = await fetch("odev-10.json");
  const data = await request.json();
  UpDateHTML(data);
}

function UpDateHTML(data) {
  const usersData = JSON.parse(localStorage.getItem('users')) || [];
  users = usersData; 
  main.innerHTML = ''; 
  data.forEach(function (production) {
    main.innerHTML += `
    <br>
      <div id="tables">
        <ul class="list-group">
          <li class="list-group-item">
            <table>
              <tr><input class="form-check-input" type="checkbox" id="${production.id}"></tr>
              <tr><td><label class="form-check-label">${production.id}</label></td></tr>
              <tr><td><label class="form-check-label">${production.name}</label></td></tr>
              <tr><td><label class="form-check-label">${production.source}</label></td></tr>
              <tr><td><label class="form-check-label">${production.gorev}</label></td></tr>
            <table>
          </li>
        </ul>
      </div>
    `;
  });
}
 



//silme
function DelPerson(){
  const checkboxes = document.querySelectorAll('.form-check-input:checked');
  checkboxes.forEach(checkbox => {
    const listItem = checkbox.closest('.list-group-item'); //list-group
    listItem.remove();
  });
  delPerson.addEventListener('click', DelPerson);
  saveToLocalStorage();
}

//ekleme
let users = [];
function AddPerson(users) {
  const name = prompt("İsim yazınız:");
  const email = prompt("e-mail giriniz:");
  const mission = prompt("Görev giriniz:");

  if (name.trim() === '' || !email.includes('@')) {
    alert("İsim ve mail kontrol et.");
  } else {
    const newID = users.length > 0 ? users[users.length - 1].id + 1 : 1; // Calculate the new ID
    const newUser = {
      id: newID,
      source: email,
      name: name,
      gorev: mission
    };

    users.push(newUser);

    const main = document.getElementById('container');
    main.innerHTML += `
      <div>
        <ul class="list-group">
          <li class="list-group-item">
            <input class="form-check-input" type="checkbox" id="${newUser.id}">
            <label class="form-check-label">${newUser.id}</label>
            <label class="form-check-label">${name}</label>
            <label class="form-check-label">${email}</label>
            <label class="form-check-label">${mission}</label>
          </li>
        </ul>
      </div>
    `;
  }
}


//düzenle

function Organize() {
  const labels = document.querySelectorAll("label");
  if (button.textContent === "Düzenle") {
    labels.forEach((label) => {
      label.setAttribute("contenteditable", "true");
    });
    button.textContent = 'Tamamlandı';
  } else if (button.textContent === "Tamamlandı") {
    labels.forEach((label) => {
      label.removeAttribute("contenteditable");
    });
    button.textContent = 'Düzenle';
  }
}
//hepsini seç 
const checkbox = document.querySelectorAll('.form-check-input');
function ChooseAll() {
  const checkboxes = document.querySelectorAll('.form-check-input');
  checkboxes.forEach(checkbox => {
    checkbox.checked = true;
    
  });
}













