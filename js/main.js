const userName = prompt("Inserisci il tuo nome");
const userLastName = prompt("Inserisci il tuo cognome");
const userColor = prompt("inserisci il tuo colore preferito")

const h1UserPswd = document.getElementById("user_pswd");
h1UserPswd.innerHTML = `la tua password è : ${userName}${userLastName}${userColor}21`