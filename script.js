//Footer form

document.querySelector('.footer__form button').addEventListener('click', () => {
  const email = document.querySelector('#footer__form--email').value;
  const name = document.querySelector('#footer__form--name').value;

  sessionStorage.name = name;
  sessionStorage.email = email;

  url = './contact.html';

  document.location.href = url;
})

if(sessionStorage.name) {
  document.querySelector('#inputName').value = sessionStorage.name;
}

if(sessionStorage.email) {
  document.querySelector('#inputEmail').value = sessionStorage.email;
}
