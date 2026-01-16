const container = document.querySelector("body");
for (var i = 1; i <= 50; i++) {
  const hearts = document.createElement("div");
  hearts.classList.add("heart");
  hearts.style.left = Math.random() * 100 + "vw";
  hearts.style.top = Math.random() * 100 + "vh";
  container.appendChild(hearts);
}

function animateHearts() {
  anime({
    targets: ".heart",
    translateX: function () {
      return anime.random(-200, 200);
    },
    translateY: function () {
      return anime.random(-200, 200);
    },
    rotate: function() {
      return anime.random(0, 360);
    },
    scale: function () {
      return anime.random(0.3, 0.8);
    },
    easing: "easeInOutQuad",
    duration: 3000,
    delay: anime.stagger(20),
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