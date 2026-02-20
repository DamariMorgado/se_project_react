import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">Developed by Damari Morgado</p>
      <p className="footer__year">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
