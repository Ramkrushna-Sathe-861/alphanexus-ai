from pydantic import BaseModel


class ResearchRequest(BaseModel):
    question: str


class ResearchResponse(BaseModel):
    question: str
    answer: str