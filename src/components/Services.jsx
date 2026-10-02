import React from "react";

const CodeIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 0 20" />
    <path d="M12 2a15.3 15.3 0 0 0 0 20" />
  </svg>
);

const SmartphoneIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const MessageIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
    <path d="M8 12h8" />
    <path d="M8 9h5" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 2.9-.2-.1a1.7 1.7 0 0 0-1.8.3l-.2.1h-3.4l-.1-.2a1.7 1.7 0 0 0-1.7-.8l-.2.1-3-1.7.1-.2a1.7 1.7 0 0 0-.3-1.8l-.1-.2v-3.4l.2-.1a1.7 1.7 0 0 0 .8-1.7l-.1-.2 1.7-3 .2.1a1.7 1.7 0 0 0 1.8-.3l.2-.1h3.4l.1.2a1.7 1.7 0 0 0 1.7.8l.2-.1 3 1.7-.1.2a1.7 1.7 0 0 0 .3 1.8l.1.2v3.4Z" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export default function Services() {
  const services = [
    {
      icon: CodeIcon,
      title: "Software Development",
      color: "#64a4ff",
      description:
        "Custom applications, business software, automation systems and enterprise solutions."
    },
    {
      icon: GlobeIcon,
      title: "Web Development",
      color: "#3fe4e3",
      description:
        "Modern, responsive websites and e-commerce experiences built around your goals."
    },
    {
      icon: SmartphoneIcon,
      title: "Mobile Applications",
      color: "#c18aff",
      description:
        "Intuitive mobile app experiences for businesses, teams and growing startups."
    },
    {
      icon: MessageIcon,
      title: "Bulk SMS Services",
      color: "#ffbd5b",
      description:
        "Reliable messaging solutions that help businesses reach customers at scale."
    },
    {
      icon: SettingsIcon,
      title: "IT Consultancy",
      color: "#57d8bb",
      description:
        "System analysis, architecture, database administration and performance tuning."
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="eyebrow">WHAT WE DO</div>

      <h2>Technology that moves you forward</h2>

      <p className="section-description">
        From the first idea to the final product, we
        help turn complex challenges into clear digital
        solutions.
      </p>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <article className="service-card" key={service.title}>
              <div
                className="service-icon"
                style={{ color: service.color }}
              >
                <Icon />
              </div>

              <span className="service-number">
                0{index + 1}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact">
                Explore service <ArrowUpRightIcon />
              </a>
            </article>
          );
        })}
      </div>

      <style>{`
        .services-section {
          width: min(1240px, calc(100% - 48px));
          margin: auto;
          padding: 60px 0;
        }

        .services-section .eyebrow {
          color: #38d5f4;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .services-section h2 {
          font-size: 32px;
          letter-spacing: -1px;
          margin: 10px 0;
        }

        .section-description {
          color: #9eafc5;
          font-size: 12px;
          line-height: 1.7;
          max-width: 480px;
          margin-bottom: 26px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 13px;
        }

        .service-card {
          position: relative;
          min-height: 220px;
          padding: 19px;
          border: 1px solid #18304b;
          border-radius: 15px;
          background: linear-gradient(145deg, #08172a, #06111f);
          transition: transform .2s, border-color .2s;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: #3b83d4;
        }

        .service-icon {
          width: 39px;
          height: 39px;
          border-radius: 11px;
          display: grid;
          place-items: center;
          background: #102d4a;
          margin-bottom: 18px;
        }

        .service-number {
          position: absolute;
          right: 15px;
          top: 17px;
          color: #8ba4c22c;
          font-weight: 800;
        }

        .service-card h3 {
          font-size: 13px;
          margin: 0 0 9px;
        }

        .service-card p {
          font-size: 11px;
          line-height: 1.65;
          color: #9eafc5;
          min-height: 55px;
        }

        .service-card a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          color: #44d5f5;
          text-decoration: none;
        }

        @media(max-width:1050px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media(max-width:650px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width:430px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}