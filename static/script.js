async function controllacredenziali() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password)
        return alert("Scrivi un nome e una password");
    const res = await fetch(`/login?username=${username}&password=${password}`);
    const dati = await res.json();
    document.getElementById('Risultato').innerText = dati.messaggio;
    }  
    document.getElementById('btn-registrati').addEventListener('click',controllacredenziali)
    if (dati.messaggio === 1) {
        document.getElementById('Risultato').innerText = "accesso effettuato";
        document.getElementById('Risultato').style.display = "accesso effettuato";
        document.getElementById('Risultato').style.display = "accesso effettuato";
    } else {
        document.getElementById('Risultato').innerText = "password o utente sbagliato";
        document.getElementById('username').value = "";
        document.getElementById('password').value = "";
    }
{
document.getElementById('Risultato').innerText = "password o utente sbagliato";
}
