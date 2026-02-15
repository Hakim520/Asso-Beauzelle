function About() {
  return (
    <section  id="about"  className="py-5">
      <div className="container">
        <div className="row align-items-center gy-4">

          <div className="col-lg-6">
            <img
              src="/about_me.png"
              alt="About"
              className="img-fluid rounded-4 "
            />
          </div>

          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Lorem Ipsum Dolor</h2>
            <p className="text-muted">
             
          L'Association Fraternité de Beauzelle est une association loi 1901 engagée au service du vivre-ensemble. Nous menons des actions sociales, solidaires et éducatives au profit de la population locale, et assurons la gestion d'un lieu de culte ouvert à tous dans un esprit de respect, de partage et de fraternité.
            </p>
          
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
