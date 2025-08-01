from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Only allow local frontend during development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/create-account")
async def create_account(request: Request):
    payload = await request.json()
    print("Received payload:", payload)
    return JSONResponse(content={"message": "Account payload received", "data": payload})