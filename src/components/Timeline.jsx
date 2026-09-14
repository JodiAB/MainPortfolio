export function Timeline({ data }) {
  return (
    <section tabIndex={-1} id="experience" className="c-space section-spacing">
      <p className="eyebrow">Professional background</p>
      <h2 className="text-heading">Experience</h2>
      <div className="experience-list">
        {data.map((item, index) => (
          <article
            className={`experience-item ${index > 3 ? "earlier-role" : ""}`}
            key={item.job}
          >
            <div className="experience-date">{item.date}</div>
            <div>
              <h3>{item.title}</h3>
              <p className="experience-company">{item.job}</p>
              {item.note && <p className="experience-note">{item.note}</p>}
              {index > 3 ? (
                <details>
                  <summary>Responsibilities</summary>
                  <ul>
                    {item.contents.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </details>
              ) : (
                <ul>
                  {item.contents.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
