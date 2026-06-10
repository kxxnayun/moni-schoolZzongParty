import Box from "./Box";

export default function MessageBox() {
  const message = import.meta.env.VITE_MESSAGE;

  return (
    <Box
      title="Moni's Message"
      className="mr-4 my-3 p-3"
      contentClassName="space-y-1 text-center text-[13px] text-[#4b3b3b]"
    >
      {message}
    </Box>
  );
}
