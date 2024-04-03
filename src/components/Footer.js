function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>© {year} Sam Jones - All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://github.com/ParticularSpace"
          className="hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          className="hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/sam_jjones12"
          className="hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
      </div>
    </footer>
  );
}

export default Footer;
