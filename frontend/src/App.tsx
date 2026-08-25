import {useState , useEffect} from 'react';

function App() {
  const[backendStatus, setBackendStatus]= useState("checking...");

  useEffect(() => {
    async function checkBackendHealth() {
      try {
        const response = await fetch("http://127.0.0.1:8000/health");
        const data = await response.json();

        setBackendStatus(data.status);
      } catch (error) {
        setBackendStatus("offline");
      }
    }

    checkBackendHealth();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
        <div>
          <h1 className="text-xl font-bold">AlphaNexus AI</h1>
          <p className="text-sm text-slate-400">
            Trading Research & Market Intelligence
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-green-400">
          <span className="h-2 w-2 rounded-full bg-green-400"></span>
          Backend: {backendStatus}
        </div>
      </header>

      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center">
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
          />

          <button
            className="rounded-lg bg-blue-600 px-6 py-4 font-medium hover:bg-blue-500"
          >
            Research
          </button>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Example: Why is NVIDIA stock moving today?
        </p>
      </section>
    </main>
  );
}

export default App;