type BoxProps = {
  title: string;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
};

export default function Box({
  title,
  className = "",
  contentClassName = "",
  children,
}: BoxProps) {
  return (
    <div className={`border border-[#efd6d6] bg-[#fafafa] shadow-sm ${className}`}>
      <div className="mb-2 border-b border-[#e8cfcf] pb-1">
        <div className="text-[12px] font-bold tracking-[0.15em] text-[#e58b5c]">
          {title}
        </div>
      </div>

      <div className={contentClassName}>{children}</div>
    </div>
  );
}
