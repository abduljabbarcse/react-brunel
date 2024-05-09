function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--content--container">
        <p className="footer--content">
          &copy; Talup 2023. All rights reserved
        </p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a href="/" className="text-sm">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="text-sm">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
