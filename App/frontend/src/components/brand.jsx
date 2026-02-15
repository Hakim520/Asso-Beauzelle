function LogoSection() {
  return (
    // <section className="container-fluid py-5 bg-light w-100">
    <div className="container-fluid py-5 bg-light w-100">
      <div className="d-flex justify-content-center align-items-center">
        <a >
          <img 
            src="/beauzelle_logo.png" 
            alt="Mairie de Beauzelle" 
            style={{ 
              maxWidth: "200px", 
              height: "auto",
              display: "block"
            }} 
          />
        </a>
      </div>
    </div>
    // </section>
  );
}

export default LogoSection;