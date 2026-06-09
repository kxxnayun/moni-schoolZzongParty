export default function VisitorBox() {
  return (
    <div className="w-[120px] ml-4 my-3 border border-[#efd6d6] bg-[#fafafa] p-2 shadow-sm">
      <div className="mb-2 border-b border-[#e8cfcf] pb-1">
        <div className="text-[12px] font-bold tracking-[0.15em] text-[#e58b5c]">
          Visitor
        </div>
      </div>

      <div className="space-y-1 text-center text-[12px] text-[#4b3b3b]">
        <p>today: 5</p>
        <p>total: 2026</p>
      </div>
    </div>
  );
}
