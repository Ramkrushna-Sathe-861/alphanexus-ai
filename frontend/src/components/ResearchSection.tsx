import { useState } from "react";

function ResearchSection() {
    const [question, setQuestion] = useState("");
    function handleResearch() {
       console.log(question);
}
  return (
    <section className="border-t border-slate-800 px-6 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-medium text-blue-400">
          AI-POWERED MARKET RESEARCH
        </p>

        <h2 className="max-w-3xl text-4xl font-bold leading-tight">
          Research the market with an intelligent AI agent.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          Ask questions about stocks, market trends, companies, and trading
          insights. AlphaNexus AI will analyze available information and
          generate structured research results.
        </p>

        <div className="mt-10 flex w-full max-w-2xl gap-3">
          <input
            type="text"
            placeholder="Ask a market research question..."
            className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button
            className="rounded-lg bg-blue-600 px-6 py-4 font-medium hover:bg-blue-500"
            onClick={handleResearch}
          >
            Research
          </button>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Example: Why is NVIDIA stock moving today?
        </p>
      </div>
    </section>
  );
}

export default ResearchSection;