function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 px-8 py-5">
      <div>
        <h1 className="text-xl font-bold">
          AlphaNexus AI
        </h1>

        <p className="text-sm text-slate-400">
          Trading Research & Market Intelligence
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm text-green-400">
        <span className="h-2 w-2 rounded-full bg-green-400"></span>
        Backend: Connected
      </div>
    </header>
  );
}

export default Header;