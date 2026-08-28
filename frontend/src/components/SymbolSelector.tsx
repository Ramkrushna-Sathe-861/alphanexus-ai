interface SymbolSelectorProps {
  selectedSymbol: string;
  onSymbolChange: (symbol: string) => void;
}

function SymbolSelector({
  selectedSymbol,
  onSymbolChange,
}: SymbolSelectorProps) {
  return (
    <select
      value={selectedSymbol}
      onChange={(event) => onSymbolChange(event.target.value)}
      className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-white outline-none focus:border-blue-500"
    >
      <option value="AAPL">AAPL</option>
      <option value="NVDA">NVDA</option>
      <option value="MSFT">MSFT</option>
      <option value="GOOGL">GOOGL</option>
      <option value="TSLA">TSLA</option>
    </select>
  );
}

export default SymbolSelector;