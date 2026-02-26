// import { useEffect, useState } from "react";
// import axios from "axios";

// // Production: comes from Cloudflare env var
// // Local dev fallback: Django local server
// const API_BASE = (import.meta.env.VITE_API_URL || "http://127.0.0.1:8000").replace(/\/$/, "");

// function toAbsoluteUrl(maybeUrl) {
//   if (!maybeUrl) return "";
//   if (maybeUrl.startsWith("http://") || maybeUrl.startsWith("https://")) return maybeUrl;

//   return `${API_BASE}${maybeUrl.startsWith("/") ? "" : "/"}${maybeUrl}`;
// }

// function Causes() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${API_BASE}/api/events/`)
//       .then((res) => setEvents(res.data))
//       .catch((err) => {
//         console.error("Failed to load events:", err);
//       });
//   }, []);

//   return (
//     <section id="causes" className="py-5 bg-light w-100">
//       <div className="container">
//         <h2 className="fw-bold mb-4">Événements</h2>

//         <div className="d-flex overflow-auto gap-4 pb-3">
//           {events.map((event) => (
//             <div className="card shadow-sm" style={{ minWidth: "280px" }} key={event.id}>
//               <img
//                 src={toAbsoluteUrl(event.image)}
//                 className="card-img-top"
//                 alt={event.title}
//                 style={{ height: "160px", objectFit: "cover" }}
//               />
//               <div className="card-body">
//                 <h6 className="card-title">{event.title}</h6>
//                 <p className="text-muted small mb-1">📍 {event.location}</p>
//                 <p className="small text-muted">
//                   {event.description?.substring(0, 60)}...
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Causes;



import { useEffect, useRef, useState } from "react";
import axios from "axios";

// Production: comes from Cloudflare env var
// Local dev fallback: Django local server
const API_BASE = (import.meta.env.VITE_API_URL || "http://127.0.0.1:8000").replace(/\/$/, "");

function toAbsoluteUrl(maybeUrl) {
  if (!maybeUrl) return "";
  if (maybeUrl.startsWith("http://") || maybeUrl.startsWith("https://")) return maybeUrl;

  return `${API_BASE}${maybeUrl.startsWith("/") ? "" : "/"}${maybeUrl}`;
}


function formatDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function Causes() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef(null);



  useEffect(() => {
    axios
      .get(`${API_BASE}/api/events/`)
      .then((res) => setEvents(res.data))
      .catch((err) => {
        console.error("Failed to load events:", err);
      });
  }, []);



  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    updateScrollState();

    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    const timeout = setTimeout(updateScrollState, 200);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      clearTimeout(timeout);
    };
  }, [events]);

  const scrollCards = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth * 0.9;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section id="causes" className="events-section py-5 bg-light w-100">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold events-title">Événements</h2>
            <p className="text-muted events-subtitle mx-auto">
              Découvrez nos actions, rencontres et événements à venir.
            </p>
          </div>

          <div className="events-wrapper position-relative">
            {events.length > 4 && (
              <>
                <button
                  className="events-arrow events-arrow-left"
                  onClick={() => scrollCards("left")}
                  disabled={!canScrollLeft}
                  aria-label="Faire défiler vers la gauche"
                >
                  ‹
                </button>

                <button
                  className="events-arrow events-arrow-right"
                  onClick={() => scrollCards("right")}
                  disabled={!canScrollRight}
                  aria-label="Faire défiler vers la droite"
                >
                  ›
                </button>
              </>
            )}

            <div
              ref={scrollRef}
              className={`events-scroll ${events.length < 4 ? "justify-center" : ""}`}
            >
              {events.map((event) => (
                <div
                  className="event-card shadow-sm"
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="event-card-image-wrapper">
                    <img
                      src={toAbsoluteUrl(event.image)}
                      className="event-card-image"
                      alt={event.title}
                    />

                    <div className="event-card-hover">
                      <h6 className="fw-bold mb-2">{event.title}</h6>
                      <p className="mb-2 small">📍 {event.location}</p>
                      <p className="mb-2 small">📅 {formatDate(event.date)}</p>
                      <p className="small mb-0">{event.description}</p>
                    </div>
                  </div>

                  <div className="card-body event-card-body">
                    <h5 className="card-title fw-bold mb-2">{event.title}</h5>
                    <p className="text-muted small mb-1">📍 {event.location}</p>
                    <p className="text-muted small mb-2">📅 {formatDate(event.date)}</p>
                    <p className="small text-muted mb-0">
                      {event.description?.length > 85
                        ? `${event.description.substring(0, 85)}...`
                        : event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {events.length === 0 && (
            <div className="text-center text-muted mt-4">
              Aucun événement disponible pour le moment.
            </div>
          )}
        </div>
      </section>

      {selectedEvent && (
        <div className="event-modal-backdrop" onClick={() => setSelectedEvent(null)}>
          <div
            className="event-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="event-modal-close"
              onClick={() => setSelectedEvent(null)}
              aria-label="Fermer la fenêtre"
            >
              ×
            </button>

            <img
              src={toAbsoluteUrl(selectedEvent.image)}
              alt={selectedEvent.title}
              className="event-modal-image"
            />

            <div className="event-modal-content">
              <h3 className="fw-bold mb-3">{selectedEvent.title}</h3>
              <p className="text-muted mb-2">📍 {selectedEvent.location}</p>
              <p className="text-muted mb-3">📅 {formatDate(selectedEvent.date)}</p>
              <p className="mb-0">{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Causes;