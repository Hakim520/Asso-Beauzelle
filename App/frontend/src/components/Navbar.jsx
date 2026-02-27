function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top w-100 custom-navbar"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
        textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
      }}
    >
      <div className="container d-flex align-items-center justify-content-between py-0">
        <a className="navbar-brand logo-wrapper m-0 p-0" href="/">
          <img src="/logo.png" alt="Logo" className="rounded-2 navbar-logo" />
        </a>

        {/* ✅ Mobile hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="mainNav">
          <ul className="navbar-nav gap-lg-4">
            <li className="nav-item">
              <a className="nav-link active" href="#hero">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                À propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#causes">
                Nos actions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;