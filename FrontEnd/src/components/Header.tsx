import moni from "../assets/private/moni.png";

export default function Header() {
  const name = import.meta.env.VITE_NAME;

  return (
    <div className="mx-2 max-w-[430px]">
      <div
        className="relative h-[190px] overflow-hidden bg-[#f8a29a] shadow-lg"
        style={{
          backgroundImage: `
      radial-gradient(white 3px, transparent 3px),
      radial-gradient(white 3px, transparent 3px)
    `,
          backgroundSize: "35px 35px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      >
        <img
          src={moni}
          alt=""
          className="absolute left-[-10px] top-4 w-[200px]"
        />

        <div className="absolute left-[155px] top-[50px]">
          <div className="inline-block border border-gray-300 bg-white px-2 py-1 text-[12px] text-[#d88768] shadow-sm">
            이 편지는 영국에서부터 시작되어...
          </div>
        </div>

        <div className="absolute left-[180px] top-[80px]">
          <div className="mt-1 inline-block border border-gray-300 bg-white px-3 py-1 shadow-sm">
            <div className="text-[22px] font-bold tracking-[0.1em] text-[#ef8c63]">
              {name}졸업파티
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
