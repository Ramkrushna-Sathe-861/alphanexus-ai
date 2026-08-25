from fastapi import FastAPI


app = FastAPI()


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