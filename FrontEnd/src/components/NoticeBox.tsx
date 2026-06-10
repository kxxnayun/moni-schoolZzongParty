import Box from "./Box";

export default function NoticeBox() {
  return (
    <Box
      title="Notice"
      className="w-[120px] ml-4 my-3 p-2"
      contentClassName="space-y-1 text-center text-[13px] text-[#4b3b3b]"
    >
      드디어 졸업이다 ㅋ
    </Box>
  );
}
