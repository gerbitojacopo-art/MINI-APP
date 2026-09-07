// Inizializza l'oggetto WebApp di Telegram
const tg = window.Telegram.WebApp;

// Comunica a Telegram che l'app è pronta
tg.ready();

// Espande l'app a schermo intero
tg.expand();

// Recupera e mostra il nome dell'utente Telegram se disponibile
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
  document.getElementById('user-name').innerText = `Ciao ${tg.initDataUnsafe.user.first_name}!`;
}

// Gestione del pulsante per chiudere l'app
document.getElementById('close-btn').addEventListener('click', () => {
  tg.close();
});