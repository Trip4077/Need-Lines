//contact
document.querySelector('#contact__form').submit((event) => {
  let name = document.querySelector('#inputName'),
      email = document.querySelector('#inputEmail'),
      message = document.querySelector('#inputMessage');

      if(!name.value || !email.value || !message.value) {
        alert('All Fields Required');
      } else {
        $.ajax({
          url: "https://formspree.io/bj2336@email.vccs.edu",
          method: "POST",
          data: $(this).serialize(),
          dataType: "json"
        });
        event.preventDefault();
        $(this).get(0).reset();
        alert('Message Sent');
      }
});
