export default function Navbar() {
  const instagram = import.meta.env.VITE_INSTAGRAM;
  const linkedin = import.meta.env.VITE_LINKEDIN;
  const github = import.meta.env.VITE_GITHUB;

  return (
    <nav className="bg-[#fafafa] py-2">
      <ul className="flex items-center justify-center gap-3 text-[13px] text-[#9a4e68]">
        <li>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e58b5c]"
          >
            instagram
          </a>
        </li>

        <span>|</span>

        <li>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e58b5c]"
          >
            github
          </a>
        </li>

        <span>|</span>

        <li>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e58b5c]"
          >
            linkedin
          </a>
        </li>
      </ul>
    </nav>
  );
}
