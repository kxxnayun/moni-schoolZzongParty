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
      <p>장소:
        <a href="https://map.naver.com/p/entry/place/32407273?c=15.00,0,0,0,dh" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">
          {place}
        </a>
      </p>
    </Box>
  );
}
