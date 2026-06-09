export default function DdayBox() {
  const partyDate = new Date("2026-06-20");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffDay = Math.ceil(
    (partyDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  return (
    <div className="w-[120px] ml-4 my-3 border border-[#efd6d6] bg-[#fafafa] p-2 shadow-sm">
      <div className="mb-2 border-b border-[#e8cfcf] pb-1">
        <div className="text-[12px] font-bold tracking-[0.15em] text-[#e58b5c]">
          D-DAY
        </div>
      </div>

      <div className="flex h-[60px] items-center justify-center">
        <p className="text-xl font-bold">
          {diffDay === 0 ? "D-DAY" : `D-${diffDay}`}
        </p>
      </div>
    </div>
  );
}
