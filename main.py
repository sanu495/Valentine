from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn
from datetime import datetime

app = FastAPI()

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Templates
templates = Jinja2Templates(directory="templates")

# Store response
user_response = {"answered": False, "answer": None}

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    """Main page - Will you be my Valentine?"""
    return templates.TemplateResponse("question.html", {"request": request})

@app.get("/celebration", response_class=HTMLResponse)
async def celebration(request: Request):
    """Celebration page after clicking Yes"""
    return templates.TemplateResponse("celebration.html", {"request": request})

@app.get("/love-letter", response_class=HTMLResponse)
async def love_letter(request: Request):
    """Love letter page"""
    # Calculate days together (change this date to your actual meeting date)
    meeting_date = datetime(2024, 2, 14)
    today = datetime.now()
    days_together = (today - meeting_date).days
    
    return templates.TemplateResponse("love_letter.html", {
        "request": request,
        "days_together": days_together
    })

@app.get("/memories", response_class=HTMLResponse)
async def memories(request: Request):
    """Photo memories page"""
    return templates.TemplateResponse("memories.html", {"request": request})

@app.get("/reasons", response_class=HTMLResponse)
async def reasons(request: Request):
    """Reasons why I love you page"""
    reasons_list = [
        "Your smile brightens my darkest days",
        "You make me laugh like no one else can",
        "Your kindness touches everyone around you",
        "You believe in me even when I don't believe in myself",
        "Your hugs are my favorite place in the world",
        "You make ordinary moments extraordinary",
        "Your voice is the sweetest sound I know",
        "You understand me without words",
        "Your patience amazes me every day",
        "You inspire me to be a better person",
        "Your love makes me feel complete",
        "You're my best friend and my soulmate",
        "Your strength gives me courage",
        "You make every day an adventure",
        "Your beauty takes my breath away",
        "You're the first thing I think of every morning",
        "Your dreams become my dreams too",
        "You make me feel like the luckiest person alive",
        "Your laughter is contagious and pure joy",
        "You're everything I've ever wished for"
    ]
    
    return templates.TemplateResponse("reasons.html", {
        "request": request,
        "reasons": reasons_list
    })

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
