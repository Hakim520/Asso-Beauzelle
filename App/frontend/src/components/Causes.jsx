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



  // useEffect(() => {
  //   axios
  //     .get(`${API_BASE}/api/events/`)
  //     .then((res) => setEvents(res.data))
  //     .catch((err) => {
  //       console.error("Failed to load events:", err);
  //     });
  // }, []);


  useEffect(() => {
  let cancelled = false;

  const fetchEvents = async (attempt = 0) => {
    try {
      const res = await axios.get(`${API_BASE}/api/events/`, { timeout: 15000 });
      if (!cancelled) setEvents(res.data);
    } catch (err) {
      if (cancelled) return;

      
      const maxAttempts = 8; 
      if (attempt < maxAttempts) {
        const delay = Math.min(2000 * Math.pow(1.5, attempt), 15000); 
        setTimeout(() => fetchEvents(attempt + 1), delay);
      } else {
        console.error("Failed to load events after retries:", err);
      }
    }
  };

  fetchEvents();

  return () => { cancelled = true; };
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
  className="events-nav events-nav-left"
  onClick={() => scrollCards("left")}
  disabled={!canScrollLeft}
  aria-label="Défiler vers la gauche"
>
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M15 18l-6-6 6-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>

<button
  className="events-nav events-nav-right"
  onClick={() => scrollCards("right")}
  disabled={!canScrollRight}
  aria-label="Défiler vers la droite"
>
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M9 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
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

                    {/* <div className="event-card-hover">
                      <h6 className="fw-bold mb-2">{event.title}</h6>
                      <p className="mb-2 small">📍 {event.location}</p>
                      <p className="mb-2 small">📅 {formatDate(event.date)}</p>
                      <p className="small mb-0">{event.description}</p>
                    </div> */}
                  </div>

                 <div className="event-card-body">
  <h5 className="event-title">{event.title}</h5>

  <div className="event-meta">
    <span className="event-pill" title="Lieu">
      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 22s7-4.5 7-12a7 7 0 10-14 0c0 7.5 7 12 7 12z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="10" r="2.2" fill="currentColor" />
      </svg>
      <span className="event-pill-text">{event.location}</span>
    </span>

    <span className="event-pill" title="Date">
      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 3v3M17 3v3M4 8h16M6 6h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="event-pill-text">{formatDate(event.date)}</span>
    </span>
  </div>

  <p className="event-desc">
    {event.description?.length > 100
      ? `${event.description.substring(0, 100)}…`
      : event.description}
  </p>

  <div className="event-cta">
    <span>Voir détails</span>
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
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
  aria-label="Fermer"
>
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M18 6L6 18M6 6l12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
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