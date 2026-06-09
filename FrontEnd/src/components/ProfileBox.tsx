export default function ProfileBox() {
  const name = import.meta.env.VITE_NAME;
  const age = import.meta.env.VITE_AGE;
  const major = import.meta.env.VITE_MAJOR;

  return (
    <div className="mr-4 my-3 border border-[#efd6d6] bg-[#fafafa] p-3 shadow-sm">
      <div className="mb-2 border-b border-[#e8cfcf] pb-1">
        <div className="text-[12px] font-bold tracking-[0.15em] text-[#e58b5c]">
          Profile
        </div>
      </div>

      <div className="space-y-1 text-[13px] text-[#4b3b3b]">
        <p className="font-semibold">Name: {name}</p>
        <p className="font-semibold">Age: {age}</p>
        <p className="font-semibold">Major: {major}</p>
      </div>
    </div>
  );
}
