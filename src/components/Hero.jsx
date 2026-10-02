
import React from "react";
import TechScene from "./TechScene";

// Manual arrow-right icon
function ArrowRightIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// Manual location icon
function MapPinIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

// Manual phone icon
function PhoneIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.76 2.04Z" />
    </svg>
  );
}

// Manual clock icon
function ClockIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function Hero() {
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Visit our office",
      description:
        "Shop No. 36A, 3rd Floor, Sesha Sai Towers, RR Street, Nellore, Andhra Pradesh"
    },
    {
      icon: PhoneIcon,
      title: "Call us",
      description: "+91 88858 05500 · 0861 2333123"
    },
    {
      icon: ClockIcon,
      title: "Office hours",
      description: "Mon – Sat, 10:00 AM – 7:00 PM"
    }
  ];

  return (
    <section className="hero" id="home">

      {/* Hero content */}
      <div className="hero-copy">
        <div className="eyebrow">
          YOUR VISION + OUR TECHNOLOGY = SUCCESS
        </div>

        <h1>
          Build what's next with{" "}
          <span>smarter</span> technology.
        </h1>

        <p>
          We turn ambitious ideas into useful digital
          experiences through custom software, web and
          mobile solutions.
        </p>

        <div className="hero-actions">
          <a href="#services" className="primary-button">
            Explore services
            <ArrowRightIcon size={16} />
          </a>

          <a href="#contact" className="secondary-button">
            Get in touch
          </a>
        </div>

        <div className="hero-note">
          <span className="status-dot" />
          Nellore-based. Built for what's ahead.
        </div>
      </div>

      {/* 3D scene */}
      <div className="hero-art">
        <TechScene />

        <div className="floating-card">
          <strong>Digital experiences</strong>
          <small>Designed to scale</small>
        </div>
      </div>

      {/* Contact information */}
      <aside className="hero-contact">
        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div className="contact-row" key={item.title}>
              <div className="contact-icon">
                <Icon />
              </div>

              <div className="contact-info">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </aside>

      <style>{`
        /* Main hero */
        .hero {
          width: min(1240px, calc(100% - 48px));
          margin: auto;
          min-height: 490px;
          padding: 55px 0;
          display: grid;
          grid-template-columns: 1.05fr 1.15fr .78fr;
          align-items: center;
          gap: 20px;
          box-sizing: border-box;
        }

        /* Eyebrow */
        .hero .eyebrow {
          font-size: 10px;
          color: #38d5f4;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 16px;
          line-height: 1.6;
        }

        /* Heading */
        .hero h1 {
          font-size: clamp(34px, 4vw, 49px);
          line-height: 1.13;
          letter-spacing: -1.8px;
          margin: 0;
          font-weight: 800;
          color: #fff;
        }

        .hero h1 span {
          background: linear-gradient(100deg, #37c7f4, #6e7bff);
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }

        /* Description */
        .hero-copy > p {
          color: #aebfd3;
          font-size: 14px;
          line-height: 1.8;
          margin: 22px 0 25px;
        }

        /* Buttons */
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 13px 20px;
          border-radius: 28px;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform .25s ease,
            background .25s ease,
            box-shadow .25s ease;
        }

        .primary-button {
          color: white;
          background: linear-gradient(105deg, #258bfa, #8d50f3);
        }

        .primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px #258bfa35;
        }

        .secondary-button {
          color: #e4efff;
          border: 1px solid #52708e;
        }

        .secondary-button:hover {
          border-color: #38d5f4;
          background: #38d5f410;
        }

        /* Status note */
        .hero-note {
          font-size: 11px;
          color: #8195b0;
          margin-top: 28px;
          line-height: 1.6;
        }

        .status-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          background: #31d5b0;
          border-radius: 50%;
          margin-right: 7px;
        }

        /* 3D scene */
        .hero-art {
          height: 370px;
          position: relative;
          min-width: 0;
          width: 100%;
        }

        .floating-card {
          position: absolute;
          top: 18px;
          right: 0;
          padding: 12px;
          border: 1px solid #24517b;
          border-radius: 12px;
          background: #09182be8;
          font-size: 11px;
          color: #fff;
          z-index: 2;
          pointer-events: none;
        }

        .floating-card small {
          display: block;
          color: #8da5c0;
          margin-top: 4px;
        }

        /* Contact information panel */
        .hero-contact {
          padding: 18px;
          border: 1px solid #24517b66;
          border-radius: 16px;
          background: #071426;
          display: grid;
          gap: 22px;
          min-width: 0;
        }

        .contact-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 11px;
          line-height: 1.6;
          min-width: 0;
        }

        .contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #40c8f0;
          background: #0a2b4b;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .contact-info {
          min-width: 0;
        }

        .contact-row strong {
          color: #fff;
        }

        .contact-row p {
          color: #aabbd0;
          margin: 4px 0 0;
          overflow-wrap: anywhere;
        }

        /* Tablet */
        @media (max-width: 1100px) {
          .hero {
            grid-template-columns: 1fr 1fr;
            gap: 25px;
          }

          .hero-contact {
            grid-column: 1 / -1;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
          }
        }

        /* Small tablet */
        @media (max-width: 850px) {
          .hero {
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }

          .hero h1 {
            font-size: clamp(32px, 5vw, 42px);
          }

          .hero-art {
            height: 320px;
          }

          .hero-contact {
            grid-template-columns: 1fr;
          }
        }

        /* Mobile */
        @media (max-width: 680px) {
          .hero {
            width: calc(100% - 36px);
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 26px;
            padding: 42px 0;
            min-height: auto;
          }

          .hero-copy {
            width: 100%;
          }

          .hero .eyebrow {
            font-size: 9px;
            letter-spacing: 1.5px;
          }

          .hero h1 {
            font-size: clamp(32px, 8vw, 42px);
            letter-spacing: -1.2px;
          }

          .hero-copy > p {
            font-size: 13px;
            margin: 18px 0 22px;
          }

          .hero-actions {
            gap: 10px;
          }

          .primary-button,
          .secondary-button {
            padding: 12px 16px;
          }

          .hero-note {
            margin-top: 22px;
          }

          .hero-art {
            width: 100%;
            height: 300px;
          }

          .floating-card {
            top: 8px;
            right: 5px;
          }

          .hero-contact {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 20px;
          }

          .contact-row {
            font-size: 12px;
          }
        }

        /* Small mobile */
        @media (max-width: 400px) {
          .hero {
            width: calc(100% - 28px);
            padding: 32px 0;
            gap: 22px;
          }

          .hero h1 {
            font-size: 31px;
          }

          .hero-art {
            height: 250px;
          }

          .floating-card {
            padding: 9px;
            font-size: 10px;
          }

          .hero-contact {
            padding: 16px;
          }

          .primary-button,
          .secondary-button {
            font-size: 11px;
            padding: 11px 13px;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .primary-button,
          .secondary-button {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

