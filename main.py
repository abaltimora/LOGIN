from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Spieghiamo a FastAPI che i file dentro "static" sono accessibili
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/") #endpoint  punto dove chimiamo il nostro server web, lo / e la homepage
def home():
    # Restituisce direttamente il file HTML
    return FileResponse('static/index.html')

@app.get("/login2") #endpoint che controlla il login 
def controlla(username: str, password: str):
    print("username", username, "password", password)
    if username == "admin" and password == "xxx123":
        risposta = {"messaggio": "1"} #perchè ci sono lingue diverse per ogni stato , se username e password sono corretti il messaggio è 1
    else: 
        risposta = {"messaggio": "0"} #se username e password non sono corretti il messaggio e 0
    return(risposta)

@app.get("/login2") #endpoint che controlla il login 
def controlla(username: str = Form(...), password: str= Form(...)):
    if username.lower() == "admin" and password == "xxx123":
        return = {"messaggio": "1"} #perchè ci sono lingue diverse per ogni stato , se username e password sono corretti il messaggio è 1
    else: 
        return = {"messaggio": "0"} #se username e password non sono corretti il messaggio e 0