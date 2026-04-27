from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi import Form
import pandas as pd


app = FastAPI()

df = pd.read_excel("/workspaces/LOGIN/Dati.xlsx")


# Spieghiamo a FastAPI che i file dentro "static" sono accessibili
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/") #endpoint  punto dove chimiamo il nostro server web, lo / e la homepage
def home():
    # Restituisce direttamente il file HTML
    return FileResponse('static/index.html')

@app.post("/loginPandas")
def controlla_password(username: str = Form(...), password: str= Form(...)):
    risultato = df[(df["USERNAME" == username]) & (df["PASSWORD"] == password)]

    if not risultato.empty:
        return {"messaggio": 1}
    else:
        return {"messaggio": 0}