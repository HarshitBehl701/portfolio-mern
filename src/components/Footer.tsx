
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs poppins-regular">&copy; {new Date().getFullYear()} Harshit Behl. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2 text-xs poppins-regular">
          <a
            href="https://www.instagram.com/harshitbehl22/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/harshit-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/HarshitBehl701"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer