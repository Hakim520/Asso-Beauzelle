import { useEffect, useState } from "react";
import axios from "axios";

function Causes() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/events/")
      .then(res => setEvents(res.data));
  }, []);

  return (
    <section id="causes" className="py-5 bg-light w-100">
      <div className="container">
        <h2 className="fw-bold mb-4">Our Causes</h2>

        <div className="d-flex overflow-auto gap-4 pb-3">
          {events.map(event => (
            <div className="card shadow-sm" style={{ minWidth: "280px" }} key={event.id}>
              <img
                src={event.image}
                className="card-img-top"
                alt={event.title}
                style={{ height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="card-title">{event.title}</h6>
                <p className="text-muted small mb-1">
                  📍 {event.location}
                </p>
                <p className="small text-muted">
                  {event.description.substring(0, 60)}...
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Causes;
