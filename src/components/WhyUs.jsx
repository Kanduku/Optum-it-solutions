import React from "react";

const HeartIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
  </svg>
);

const ZapIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const DatabaseIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
    <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const UsersIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SparklesIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
    strokeLinejoin="round">
    <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-2-5.8L4 11l6-2.2L12 3Z" />
    <path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z" />
    <path d="m5 2 .8 2.2L8 5l-2.2.8L5 8l-.8-2.2L2 5l2.2-.8L5 2Z" />
  </svg>
);

export default function WhyUs() {
  const benefits = [
    {
      icon: HeartIcon,
      title: "Customer focused",
      description: "Solutions shaped around real business needs."
    },
    {
      icon: ZapIcon,
      title: "Fast turnaround",
      description: "Clear communication and thoughtful delivery."
    },
    {
      icon: DatabaseIcon,
      title: "Technical expertise",
      description: "A broad toolkit for modern business systems."
    },
    {
      icon: ShieldCheckIcon,
      title: "Transparent process",
      description: "Collaborative planning from start to finish."
    },
    {
      icon: UsersIcon,
      title: "Flexible solutions",
      description: "Approaches tailored to your team and scale."
    },
    {
      icon: SparklesIcon,
      title: "Practical innovation",
      description: "Technology that makes everyday work better."
    }
  ];

  return (
    <section className="why-section" id="why-us">
      <div className="eyebrow">WHY OPTIMUS</div>

      <h2>A thoughtful partner for your next step</h2>

      <p className="why-description">
        The right technology is more than code. It's the
        way a solution fits your people, process and goals.
      </p>

      <div className="benefit-grid">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article
              className="benefit-card"
              key={benefit.title}
            >
              <div className="benefit-icon">
                <Icon />
              </div>

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      <style>{`
        .why-section {
          width: min(1240px, calc(100% - 48px));
          margin: auto;
          padding: 55px 0;
        }

        .why-section .eyebrow {
          color: #38d5f4;
          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 800;
        }

        .why-section h2 {
          font-size: 32px;
          letter-spacing: -1px;
          margin: 10px 0;
        }

        .why-description {
          font-size: 12px;
          color: #9eafc5;
          line-height: 1.7;
          max-width: 480px;
          margin-bottom: 25px;
        }

        .benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          border: 1px solid #18304b;
          border-radius: 16px;
          overflow: hidden;
          background: #18304b;
        }

        .benefit-card {
          background: #071424;
          padding: 22px;
          display: flex;
          gap: 14px;
          min-height: 105px;
        }

        .benefit-icon {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #0d2b49;
          color: #4ac9f3;
          display: grid;
          place-items: center;
        }

        .benefit-card h3 {
          font-size: 12px;
          margin: 2px 0 7px;
        }

        .benefit-card p {
          font-size: 10px;
          line-height: 1.6;
          color: #93a8c1;
          margin: 0;
        }

        @media(max-width:760px) {
          .benefit-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width:480px) {
          .benefit-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}