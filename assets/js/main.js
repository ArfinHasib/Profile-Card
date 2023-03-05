/*=============== SHOW SOCIAL NETWORKS ===============*/
const toggle = document.getElementById('card-toggle');
const social = document.getElementById('card-social');

toggle.addEventListener('click', () => {
  if (social.classList.contains('animation')) {
    social.classList.add('down-animation');

    setTimeout(() => {
      social.classList.remove('down-animation');
    }, 1000);
  }

  social.classList.toggle('animation');
});
