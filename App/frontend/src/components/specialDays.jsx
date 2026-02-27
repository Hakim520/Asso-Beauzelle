import React from 'react';

const RamadanCalendar = () => {

  const ramadanStart = new Date(2026, 1, 18); 
  const ramadanEnd = new Date(2026, 2, 19);   
  const eidDate = new Date(2026, 2, 20);      

  const renderMonth = (year, month, title) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay(); 
    
    const days = [];
    
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`}></div>);
    }
    
    for (let d = 1; d <= daysInMonth; d++) {
      const currentDate = new Date(year, month, d);
      
      const isRamadan = currentDate >= ramadanStart && currentDate <= ramadanEnd;
      const isEid = currentDate.getTime() === eidDate.getTime();
      
      let bgClass = "text-dark";
      
      if (isEid) {
        bgClass = "bg-warning text-dark fw-bold shadow-sm border border-2 border-warning";
      } else if (isRamadan) {
        bgClass = "bg-success text-white fw-bold shadow-sm";
      }

      days.push(
        <div key={d} className="d-flex justify-content-center">
          <div 
            className={`d-flex align-items-center justify-content-center rounded-circle ${bgClass}`}
style={{
  width: 'clamp(28px, 8.5vw, 40px)',
  height: 'clamp(28px, 8.5vw, 40px)',
  fontSize: 'clamp(0.65rem, 2.8vw, 0.875rem)',
  lineHeight: 1
}}          >
            {d}
          </div>
        </div>
      );
    }

    return (
<div className="bg-white border rounded-4 shadow-sm p-3 p-md-4 flex-fill mb-4 w-100" style={{ maxWidth: '400px' }}>        <h3 className="h4 fw-bold text-center mb-4 text-success">{title} {year}</h3>
        
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 'clamp(0.2rem, 1.2vw, 0.5rem)' }}>          {['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'].map(day => (
<div
  key={day}
  className="text-center fw-bold text-secondary small text-uppercase mb-2"
  style={{ whiteSpace: "nowrap" }}
>              {day}
            </div>
          ))}
          
          {days}
        </div>
      </div>
    );
  };

  return (
    <section className="py-5 bg-light rounded-4 w-100">
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-dark mb-3">
            Ramadan & Aïd el-Fitr 2026
          </h2>
          <p className="text-muted mx-auto lead" style={{ maxWidth: '700px' }}>
            Le mois sacré du Ramadan devrait commencer le 18 février et se terminer le 19 mars, suivi de l’Aïd el-Fitr le 20 mars.
          </p>
        </div>
        
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start gap-4 mb-5">
          {renderMonth(2026, 1, 'Février')}
          {renderMonth(2026, 2, 'Mars')}
        </div>

        <div className="d-flex justify-content-center">
          <div className="d-flex flex-wrap justify-content-center gap-4 bg-white p-3 rounded-3 border shadow-sm">
            <div className="d-flex align-items-center gap-2">
              <div className="rounded-circle bg-success shadow-sm" style={{ width: '20px', height: '20px' }}></div>
              <span className="fw-medium text-dark">Ramadan</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="rounded-circle bg-warning border border-warning shadow-sm" style={{ width: '20px', height: '20px' }}></div>
              <span className="fw-medium text-dark">Aïd el-Fitr</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RamadanCalendar;