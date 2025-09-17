import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-700/40 text-sm text-zinc-500">
      <div className="container flex flex-col items-center py-10 mx-auto max-w-7xl space-y-4">
        
        <div className="flex space-x-6">
          <a
            href="https://github.com/giliannereyes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 duration-300 hover:text-zinc-300"
          >
            <SiGithub size={20} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/giliannereyes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 duration-300 hover:text-zinc-300"
          >
            <SiLinkedin size={20} />
            LinkedIn
          </a>

          <a
            href="mailto:giliannekatereyes@yahoo.com"
            className="flex items-center gap-2 duration-300 hover:text-zinc-300"
          >
            <MdEmail size={20} />
            Email
          </a>
        </div>

        <p>© 2025 Gilianne Reyes. All rights reserved.</p>
      </div>
    </footer>
  );
}
