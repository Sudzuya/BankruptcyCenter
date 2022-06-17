const form = document.querySelectorAll('.form');

form.forEach(function (item) {
  item.addEventListener('submit', formSend);

  let popupActive = document.querySelector('#form');

  async function formSend(e) {
    e.preventDefault();
    
    let error = formValidate(item);

    if (error == false) {
      let formData = new FormData(item);
      
      item.classList.add('_sending');
  
      let response = await fetch('#', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        let result = await response.json();
        let thanksPopup = document.querySelector('.popup__thanks');
        
        if (popupActive.classList.contains('popup_show')) {
            popupActive.classList.remove('popup_show')
        }
        
        thanksPopup.classList.add('popup_show');
        setTimeout (() => {
          thanksPopup.classList.remove('popup_show')
        },10000)

        item.reset();
      } else {
        alert('Ошибка');
      }
    }
  }
})

function formValidate(form) {
  let inputs = form.querySelectorAll('._reg');

  let error = false;
  
  inputs.forEach(function(item) {
    let errorField = item.closest('.field');

    if (item.classList.contains('tel')) {
      let number = item.value.replace(/[^+\d]/g, '');

      if (number.length !== 12) {
        errorField.classList.add('invalid');
        error = true;
      } else {
        errorField.classList.remove('invalid');
      }
    }
    if (item.classList.contains('check')) {
      if (!item.checked) {
        error = true;
      }
    }
  })

  return error
}