import Box from "./Box";

export default function PartyInfoBox() {
  const date = import.meta.env.VITE_PARTY_DATE;
  const place = import.meta.env.VITE_PARTY_PLACE;

  return (
    <Box
      title="Party Info"
      className="w-[120px] ml-4 my-3 p-2"
      contentClassName="space-y-1 text-center text-[13px] text-[#4b3b3b]"
    >
      <p>일시: {date}</p>
      <p>장소: {place}</p>
    </Box>
  );
}
