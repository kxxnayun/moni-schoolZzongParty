import Box from "./Box";

export default function VisitorBox() {
  return (
    <Box
      title="Visitor"
      className="w-[120px] ml-4 my-3 p-2"
      contentClassName="space-y-1 text-center text-[12px] text-[#4b3b3b]"
    >
      <p>today: 5</p>
      <p>total: 2026</p>
    </Box>
  );
}
