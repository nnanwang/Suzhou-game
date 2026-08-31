import React from "react";

// This component groups the report and mission into the two main game cards.
function ReportCard() {
  return (
    <section className="report-layout">
      <article className="report-card">
        <div className="report-card__heading">
          <div>
            <p>SUZHOU MUNICIPAL GOVERNMENT</p>
            <h1>Water Quality Report</h1>
          </div>
          <span>2035</span>
        </div>

        <p className="report-card__summary">
          New monitoring data shows that water quality in the Shantang Canal
          district has declined after a period of rapid development.
        </p>

        <div className="report-findings">
          <div>
            <strong>74%</strong>
            <span>of tested sites meet the city standard</span>
          </div>
          <div>
            <strong>−12%</strong>
            <span>water quality change since 2032</span>
          </div>
          <div>
            <strong>High</strong>
            <span>public concern in nearby communities</span>
          </div>
        </div>

        <aside className="report-note">
          <span>Advisor's note</span>
          The numbers tell only part of the story. Visit Shantang Canal and
          speak with the people who live and work there.
        </aside>
      </article>

      {/* The mission card explains the player's task and next action. */}
      <aside className="mission-card">
        <p className="screen-eyebrow">Chapter 01</p>
        <h2>Water & Environment</h2>
        <p>
          Your first task is to review the report before beginning the field
          investigation.
        </p>
        {/* Disabled keeps the future scene visible without making it playable yet. */}
        <button type="button" disabled>
          Canal Visit · Coming next
        </button>
      </aside>
    </section>
  );
}

export default ReportCard;