from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.market import router as market_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    """Return a welcome message."""
    return {
        "message": "Welcome to AlphaNexus AI"
    }

@app.get("/health")
def health_check():
    return{
        "status":"healthy"
    }

app.include_router(market_router)