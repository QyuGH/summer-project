function Footer(){
    return (
      <footer
        id="footer"
        className="flex flex-col items-center justify-center mt-8 p-8"
      >
        <p>
          2025 &copy;{" "}
          <a
            href="https://github.com/QyuGH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Anton
          </a>{" "}
          | All rights reserved.
        </p>
      </footer>
    );
}

export default Footer