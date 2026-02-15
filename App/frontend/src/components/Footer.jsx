function Footer() {
  return (
    <footer id="footer" className="bg-dark text-light pt-5 ">
      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-3">
            {/* <h5 className="fw-bold">LOGO</h5> */}
             <img
              src="/logo.png"
              alt="Logo"
              className="img-fluid rounded-4 "
              style={{ marginTop: '-100px' }}
            />
           
          </div>

        <div className="col-lg-3">
  <h6 className="fw-semibold mb-3">Types d'événements</h6>

<ul className="list-unstyled small">
    <li className="mb-2 d-flex align-items-center">
      <i className="bi bi-book me-2 text-primary"></i> 
      Éducatifs
    </li>
    <li className="mb-2 d-flex align-items-center">
      <i className="bi bi-people me-2 text-primary"></i> 
      Sociales
    </li>
    <li className="mb-2 d-flex align-items-center">
      <i className="bi bi-heart me-2 text-primary"></i> 
      Solidaires
    </li>
</ul>
</div>
          {/* <div className="col-lg-3">
            <h6 className="fw-semibold">Events</h6>
            <ul className="list-unstyled small">
              <li>Education</li>
              <li>Health</li>
              <li>Environment</li>
            </ul>
          </div> */}

          <div className="col-lg-4">
            <h6 className="fw-semibold">Contact</h6>
            <p className="small mb-1">📍 8 Rue des rossignols, 31700 Beauzelle, France</p>
            <p className="small">📧 fraternite.beauzelle@gmail.com</p>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <p className="text-center small  mb-0">
          © Developed by Mikah
        </p>
      </div>
    </footer>
  );
}

export default Footer;
