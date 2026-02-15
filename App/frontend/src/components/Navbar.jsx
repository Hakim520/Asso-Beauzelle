// function Navbar() {
//   return (
//   //   <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100 top-0"
//   //   style={{
//   //   background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
//   //   textShadow: "1px 1px 2px rgba(0,0,0,0.5)" 
//   // }}>
//   <nav
//   className="navbar navbar-expand-lg navbar-dark fixed-top w-100"
//   style={{
//     background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
//     textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
//   }}
// >

//       <div className="container py-3">

//         {/* Logo */}
//         {/* <a className="navbar-brand fw-bold fs-4" href="/">
//           LOGO
//         </a> */}

//           <img
//               src="/logo.png"
//               alt="Logo"
//               className="img-fluid rounded-4 "
//               style={{ marginTop: '-100px' }}
//             />

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#mainNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Links */}
//         <div className="collapse navbar-collapse justify-content-end" id="mainNav">
//           <ul className="navbar-nav gap-lg-4">
//             <li className="nav-item"><a className="nav-link active" href="#hero">Accueil</a></li>
//             <li className="nav-item"><a className="nav-link" href="#about">À propos</a></li>
//             <li className="nav-item"><a className="nav-link" href="#causes">Nos actions</a></li>
//             <li className="nav-item"><a className="nav-link" href="#footer">Contact</a></li>
//           </ul>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;



function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top w-100"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
        textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
      }}
    >
      <div className="container d-flex align-items-center py-1"> {/* Réduit de py-3 à py-2 pour gagner de l'espace */}

        {/* Logo optimisé */}
        <a className="navbar-brand" href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="img-fluid rounded-2"
            style={{ 
              height: '250px',    /* Force la hauteur du logo */
              width: 'auto',      /* Garde les proportions */
              objectFit: 'contain' ,
              transition: '0.3s'
            }}
          />
        </a>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse justify-content-end" id="mainNav">
          <ul className="navbar-nav gap-lg-4">
            <li className="nav-item"><a className="nav-link active" href="#hero">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">À propos</a></li>
            <li className="nav-item"><a className="nav-link" href="#causes">Nos actions</a></li>
            <li className="nav-item"><a className="nav-link" href="#footer">Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
}


export default Navbar;