async function controllaCredenziali() {
    const username= document.getElementById('username').value;
    const password= document.getElementById('password').value;
    if (!username || !password ) 
        return alert("Scrivi username e  una password");
    const res = await fetch(`/login?username=${username}&password=${password}`);
     const dati = await res.json(); 
    //document.getElementById('risultato').innerText = dati.messaggio;
    if (dati.messaggio == 1){
        document.getElementById('risultato').innerText = "Benvenuto nel sito web";
        document.getElementById('username').style.fontSize =  "50px";
        document.getElementById('password').style.fontSize =  "50px";
        document.getElementById('username').style.remove()
        document.getElementById('password').style.remove()
}
else 
    doument.getElementById('risultato').innerText = "riprova";
}
async function controlloconPost() {
    
}
async function loggatiPandas() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password)
        return alert("Scrivi lo username e password");

    const res = await fetch("/login2", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `username=${username}&password=${password}`
    });

    const json = await res.json();

    if (json.messaggio == 1){
        document.getElementById("risultato").innerText = "Accesso effettuato";
    }
    else {
        document.getElementById("risultato").innerText = "Accesso negato";
    }
}


document.getElementById('btn_registrati').addEventListener('click', controllaCredenziali);
document.getElementById('btn_registrati2').addEventListener('click', loggati);
document.getElementById('btn_Pandas').addEventListener('click', loggatiPandas);