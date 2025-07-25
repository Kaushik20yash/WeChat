// let container2 = document.getElementsByClassName('container2')[0];
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function() {
//     container2.style.display = 'flex';
//     let container = document.createElement('div');
//     container.style.padding = '1em';
//     container.style.boxShadow = '0px 0px 4px lightgrey';
//     let form = document.createElement('form');
//     let name = document.createElement('label');
//     name.textContent = "Name: ";
//     let nameInput = document.createElement('input');
//     nameInput.type = 'text';
//     let email = document.createElement('label');
//     email.textContent = "Email: ";
//     let emailInput = document.createElement('input');
//     emailInput.type = 'email';
//     form.style.flexDirection = 'column';
//     form.style.display = 'flex';
//     form.style.gap = '1em';
//     let button = document.createElement('button');
//     button.textContent = 'save';
//     button.style.padding = '0.1em';
//     button.style.fontSize = '1em';
//     button.style.width = '5ch';
//     button.style.alignSelf = 'center';
//     button.type = 'button';
//     name.appendChild(nameInput);
//     email.appendChild(emailInput);
//     form.appendChild(name);
//     form.appendChild(email);
//     form.appendChild(button);
//     container.style.justifySelf = 'center';
//     container.appendChild(form);
//     container2.appendChild(container);
//     button.addEventListener('click', function() {
//         container2.style.justifyContent = 'space-around';
//         let contactItem = document.createElement('div');
//         let profile = document.createElement('div');
//         profile.textContent = nameInput.value[0];
//         container.style.display = 'none';
//         contactItem.appendChild(profile);
//         container2.appendChild(contactItem);
//     });
// });

let contact = document.getElementById('contact');
let container2 = document.getElementsByClassName('container2')[0];
let overlay = document.getElementById('overlay');
let formm = document.getElementById('formm');
let btn = document.getElementById('btn');
let closeOverlay = document.getElementById('closeOverlay');

btn.addEventListener('click', function() {
    overlay.style.display = 'flex';
    // Optionally blur the rest of the page (handled by overlay's backdrop-filter)
});

closeOverlay.addEventListener('click', function() {
    overlay.style.display = 'none';
});


let button = document.getElementById('button');
button.addEventListener('click', function() {
    let name = document.getElementById('name');
    name.required=true;
    let nameInput = name.value;
    let email = document.getElementById('email');
    email.required=true;
    let emailInput = email.value;
if (!name.value || !email.value) {
  alert("Please fill all required fields");
  event.preventDefault();
    return;
}
    // Compute initials
    let nameSplit = nameInput.split(" ");
    let firstName = nameSplit[0];
    let lastName = nameSplit[nameSplit.length-1];
    let firstInitial = firstName[0];
    let lastInitial = lastName[0];
    let initials = firstInitial+lastInitial;
    if(nameSplit.length==1) {
        initials = firstInitial;
    }
    // Save to sessionStorage
    let contacts = getContacts();
    contacts.push({ name: nameInput, email: emailInput, initials: initials });
    saveContacts(contacts);
    // Re-render
    renderContacts();
    overlay.style.display = 'none';
    name.value = '';
    email.value = '';
});

// Helper to get contacts from sessionStorage
function getContacts() {
  return JSON.parse(sessionStorage.getItem('wechat_contacts') || '[]');
}
// Helper to save contacts to sessionStorage
function saveContacts(contacts) {
  sessionStorage.setItem('wechat_contacts', JSON.stringify(contacts));
}
// Render all contacts
function renderContacts() {
  container2.innerHTML = '';
  container2.style.display = 'flex';

  const contacts = getContacts();
  contacts.forEach(function(contact) {
    let contactItem = document.createElement('div');
    contactItem.style.display = 'flex';

    contactItem.style.gap = '1em';
    contactItem.style.boxShadow = '0px 0px 5px lightgrey';
    contactItem.style.padding = '1em';
    contactItem.style.borderRadius = '0.5em';
    contactItem.style.width = '20%';
    let proImg = document.createElement('div');
    proImg.style.display = 'flex';
    proImg.style.justifyContent = 'center';
    proImg.style.alignItems = 'center';
    proImg.style.fontSize = '1.2em';
    proImg.style.padding = 'o.2em';
    proImg.style.width = '1.6em';
    proImg.style.height = '1.6em';
    proImg.style.borderRadius = '50%';
    proImg.style.backgroundColor = 'rgb(228, 57, 228)';
    proImg.style.color = 'white';
    proImg.textContent = contact.initials;
    let proDetails = document.createElement('div');
    let proName = document.createElement('h3');
    proName.textContent = contact.name;
    let proStatus = document.createElement('p');
    proStatus.textContent = 'online';
    proDetails.style.display = 'flex';
    proDetails.style.flexDirection = 'column';
    proDetails.appendChild(proName);
    proDetails.appendChild(proStatus);
    contactItem.appendChild(proImg);
    contactItem.appendChild(proDetails);
    container2.appendChild(contactItem);
  });
}
// On page load, render contacts
renderContacts();