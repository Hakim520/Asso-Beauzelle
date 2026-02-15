import { useEffect, useState } from "react";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/events/")
      .then(res => setEvents(res.data));
  }, []);

  return (
    <div id="events"  className="container my-5">
      <div className="row">
        {events.map(event => (
          <div className="col-md-4 mb-4" key={event.id}>
            <div className="card">
              <img
                src={event.image}
                className="card-img-top"
                alt={event.title}
              />
              <div className="card-body">
                <h5>{event.title}</h5>
                <p>{event.description}</p>
                <small className="text-muted">
                  📍 {event.location}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
