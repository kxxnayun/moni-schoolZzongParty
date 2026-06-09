import Navbar from "../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#FAFAFA]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
