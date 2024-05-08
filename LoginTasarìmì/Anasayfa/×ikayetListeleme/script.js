// Butona tıklama olayını dinleyin
document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', event => {
      // Butona tıklandıktan sonra, satırın ID'sini alın
      const complaintId = event.target.parentElement.parentElement.id;
      // Satırın ID'sine göre satırı bulun ve silin
      document.querySelector(`#${complaintId}`).remove();
    });
  });
// Butona tıklama olayını dinleyin

  // Butona tıklama olayını dinleyin
// Düzenleme butonlarını dinleyin
document.querySelectorAll('.edit-button').forEach(button => {
    button.addEventListener('click', event => {
      // Butona tıklandıktan sonra, satırın ID'sini alın
      const complaintId = event.target.parentElement.parentElement.id;
      // Satırın ID'sine göre satırı bulun
      const complaintRow = document.querySelector(`#${complaintId}`);
      // Satırdaki hücreleri alın
      const cells = complaintRow.querySelectorAll('td');
      // Formu oluşturun
      const form = document.createElement('form');
      form.style.display = 'block';
      form.classList.add('complaint-form');
      // Form içine hücrelerdeki bilgileri doldurun
      form.innerHTML = `
        <label>Tarih:</label>
        <input type="text" name="date" value="${cells[0].textContent}">
        <label>Sahip:</label>
        <input type="text" name="owner" value="${cells[1].textContent}">
        <label>Açıklama:</label>
        <input type="text" name="description" value="${cells[2].textContent}">
        <label>Durum:</label>
        <input type="text" name="status" value="${cells[3].textContent}">
        <button type="submit">Kaydet</button>
        <button type="button" class="cancel-button">İptal</button>
      `;
      // Formu satıra ekleyin
      complaintRow.innerHTML = '';
      document.querySelector('#complaint-table').appendChild(form); });
  });
  
  //
    