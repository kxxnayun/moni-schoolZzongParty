export default function MessageBox() {
  const message = import.meta.env.VITE_MESSAGE;

  return (
    <div className="mr-4 my-3 border border-[#efd6d6] bg-[#fafafa] p-3 shadow-sm">
      <div className="mb-2 border-b border-[#e8cfcf] pb-1">
        <div className="text-[12px] font-bold tracking-[0.15em] text-[#e58b5c]">
          Moni's Message
        </div>
      </div>

      <div className="space-y-1 text-center text-[13px] text-[#4b3b3b]">
        {message}
      </div>
    </div>
  );
}
