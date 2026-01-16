const container = document.querySelector(".container");
for (var i = 1; i <= 100; i++) {
  const hearts = document.createElement("div");
  hearts.classList.add("heart");
  container.appendChild(hearts);
}

function animateHearts() {
  anime({
    targets: ".heart",
    translateX: function () {
      return anime.random(-700, 700);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    rotate: 45,
    scale: function () {
      return anime.random(1, 5);
    },
    easing: "easeInOutBack",
    duration: 1000,
    delay: anime.stagger(10),
    complete: animateHearts,
  });
}

animateHearts();

// E-Mail Benachrichtigung senden
(function() {
  emailjs.init('s-_UyjGmfRGMXir4q');

  const templateParams = {
    to_email: 'yildiz-faruk@hotmail.com',
    message: 'Sie hat JA gesagt! 💕',
    date: new Date().toLocaleString('de-DE')
  };

  emailjs.send('service_7bsxupt', 'template_z9e9zl8', templateParams)
    .then(function(response) {
      console.log('E-Mail erfolgreich gesendet!', response.status, response.text);
    }, function(error) {
      console.log('Fehler beim E-Mail-Versand:', error);
    });
})();