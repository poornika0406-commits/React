function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} Student Portal</p>
    </footer>
  );
}

export default Footer;