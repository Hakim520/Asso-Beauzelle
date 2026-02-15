function Hero() {
  return (
    <section id="hero"
      className="vh-100 d-flex align-items-center text-white vw-100"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-4">
         Association Fraternité 
         De Beauzelle
        </h1>

        <p className="lead mb-5">
        </p>

        {/* <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-success btn-lg"
          style={{ 
    backgroundColor: "#219D80", 
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)" // Optional: add a little depth
  }}>
            About Us
          </button>
          <button className="btn btn-outline-light btn-lg">
            Our Causes
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
