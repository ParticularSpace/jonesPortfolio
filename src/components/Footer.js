import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-600 text-white text-center p-4 mt-4">
      <p>© {year} Sam Jones - All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://github.com/ParticularSpace"
          className="hover:text-gray-400 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-1" /> GitHub
        </a>
        <a
          href="https://linkedin.com"
          className="hover:text-gray-400 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="mr-1" /> LinkedIn
        </a>
        <a
          href="https://x.com/sam_jjones12"
          className="hover:text-gray-400 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="mr-1" /> X
        </a>
      </div>
    </footer>
  );
}

export default Footer;
