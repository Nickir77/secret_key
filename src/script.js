const PRIME = 13;
const BASE = 6;
const MY_SECRET = getRandomInt(PRIME - 1);
const MY_KEY = (BASE ** MY_SECRET) % PRIME;

console.log(MY_SECRET);
console.log(MY_KEY);

document.getElementById("button").addEventListener('click', function () {
    var their_key = Number(document.getElementById('text_fin').value);
    var secret_text = document.getElementById('text_secret');
    secret_text.value = "Ваш секретный ключ это " + ((their_key ** MY_SECRET) % PRIME);
});

function getRandomInt(max) {
  return (Math.floor(Math.random() * max) + Date.now()) % max;
}

var init_text = document.getElementById("text_init");
init_text.value = "Покажите игроку число " + MY_KEY;
