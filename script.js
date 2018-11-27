//contact

$('#contact__form').submit((event) => {
  let name = document.querySelector('#inputName'),
      email = document.querySelector('#inputEmail'),
      message = document.querySelector('#inputMessage');

      if(!name.value || !email.value || !message.value) {
        alert('All Fields Required');
      } else {
        $.ajax({
          url: "https://formspree.io/letslearntechyt@gmail.com",
          method: "POST",
          data: $('#contact__form').serialize(),
          dataType: "json"
        });
        event.preventDefault();
        $('#contact__form').get(0).reset();
        alert('Message Sent');
      }
});
