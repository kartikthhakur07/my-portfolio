function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        Designed & built with <span>♥</span> by <strong>Kartik Thakur</strong> · {year}
      </p>
    </footer>
  );
}

export default Footer;
