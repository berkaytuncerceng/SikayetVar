const form = document.querySelector('.form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const firmaInput = document.querySelector('#firma');
const messageInput = document.querySelector('#message');

const complaintsList = document.querySelector('#sikayetler'); //şikayetleri görüntülemek için seçilmiş ul elementi

let complaints = []; // şikayetleri saklamayacağımız dizi

form.addEventListener('submit', e => {
  e.preventDefault(); // formun submit edilmesini önler

  const name = nameInput.value;
  const email = emailInput.value;
  const firma = firmaInput.value;
  const message = messageInput.value;

  // Şikayetleri saklamak için bir obje oluşturun
  const complaint = {
    name: name,
    email: email,
    firma: firma,
    message: message
  };

  // Obje dizisine ekleyin
  complaints.push(complaint);

  // Şikayetleri görüntüleyin
  const complaintElement = document.createElement('li');
  complaintElement.innerHTML = `
    <h2>${complaint.name}</h2>
    <p>${complaint.email}</p>
    <p>${complaint.firma}</p>
    <p>${complaint.message}</p>
  `;
  complaintsList.appendChild(complaintElement);
});
