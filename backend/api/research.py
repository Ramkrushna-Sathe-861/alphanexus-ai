from fastapi import APIRouter

from models.research import ResearchRequest, ResearchResponse
from services.research_service import research_market


router = APIRouter(
    prefix="/research",
    tags=["Research"],
)


@router.post("/", response_model=ResearchResponse)
def create_research(request: ResearchRequest):
    answer = research_market(request.question)

    return ResearchResponse(
        question=request.question,
        answer=answer,
    )