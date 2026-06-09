export default function PartyInfoBox() {
  return (
    <div className="w-[120px] ml-4 my-3 border border-[#efd6d6] bg-[#fafafa] p-2 shadow-sm">
      <div className="mb-2 border-b border-[#e8cfcf] pb-1">
        <div className="text-[12px] font-bold tracking-[0.15em] text-[#e58b5c]">
          Party Info
        </div>
      </div>

      <div className="space-y-1 text-[13px] text-[#4b3b3b]">
        <p>2026.06.20 시간</p>
        <p>장소</p>
      </div>
    </div>
  );
}
