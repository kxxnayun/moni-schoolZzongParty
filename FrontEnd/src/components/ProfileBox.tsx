import Box from "./Box";

export default function ProfileBox() {
  const name = import.meta.env.VITE_NAME;
  const age = import.meta.env.VITE_AGE;
  const major = import.meta.env.VITE_MAJOR;

  return (
    <Box
      title="Profile"
      className="mr-4 my-3 p-3"
      contentClassName="space-y-1 text-[13px] text-[#4b3b3b]"
    >
      <p className="font-semibold">Name: {name}</p>
      <p className="font-semibold">Age: {age}</p>
      <p className="font-semibold">Major: {major}</p>
    </Box>
  );
}
