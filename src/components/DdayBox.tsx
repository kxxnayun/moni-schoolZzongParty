import Box from "./Box";

export default function DdayBox() {
  const partyDate = new Date("2026-06-20");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffDay = Math.ceil(
    (partyDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  return (
    <Box
      title="D-day"
      className="w-[120px] ml-4 my-3 p-2"
      contentClassName="flex h-[60px] items-center justify-center"
    >
      <p className="text-xl font-bold">
        {diffDay === 0 ? "D-DAY" : diffDay > 0 ? `D-${diffDay}` : `D+${-diffDay}`}
      </p>
    </Box>
  );
}
