
import React from "react";
import aboutImage from "./optimus-logo.png";

export default function About() {
  const points = [
    "Tailored to your business",
    "Collaborative delivery",
    "Focus on useful outcomes"
  ];

  // Manual check-circle SVG icon
  function CheckCircleIcon() {
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
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  return (
    <section className="about-section" id="about">

      {/* Left side logo image */}
      <div className="about-visual">
        <img
          src={aboutImage}
          alt="Optimus IT Solutions"
          className="about-image"
        />
      </div>

      {/* Right side content */}
      <div className="about-copy">
        <div className="eyebrow">A LITTLE ABOUT US</div>

        <h2>
          Good technology starts with understanding.
        </h2>

        <p>
          Optimus IT Solutions is an IT services and
          software development company based in Nellore.
          We work across custom software, web and mobile
          applications, messaging and IT consultancy.
        </p>

        <p>
          Our focus is simple: understand the challenge,
          build a practical solution and support the
          people who use it.
        </p>

        {/* Feature points */}
        <div className="about-points">
          {points.map((point) => (
            <span key={point}>
              <CheckCircleIcon />
              {point}
            </span>
          ))}
        </div>

        {/* Contact link */}
        <a className="about-link" href="#contact">
          Start a conversation
          <span className="about-arrow">→</span>
        </a>
      </div>

      <style>{`
        /* Main section */
        .about-section {
          width: min(1240px, calc(100% - 48px));
          margin: auto;
          padding: 50px 0 75px;
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 55px;
          align-items: center;
        }

        /* Left image container */
        .about-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: none;
          background: transparent;
          border-radius: 0;
          height: auto;
        }

        /* Logo image */
        .about-image {
          width: 50%;
          height: auto;
          max-width: 200px;
          object-fit: contain;
          display: block;
          border-radius: 20px;
        }

        /* Right content */
        .about-copy .eyebrow {
          margin-bottom: 13px;
          color: #38d5f4;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .about-copy h2 {
          font-size: 32px;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0 0 20px;
          color: #fff;
        }

        .about-copy p {
          color: #a4b5ca;
          font-size: 13px;
          line-height: 1.8;
          margin: 0 0 16px;
        }

        /* Feature points */
        .about-points {
          display: grid;
          gap: 13px;
          margin: 25px 0;
        }

        .about-points span {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #c7d6e8;
        }

        .about-points svg {
          color: #3bd6c2;
          flex-shrink: 0;
        }

        /* Contact link */
        .about-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: #45d4f3;
          text-decoration: none;
          transition: gap .25s ease;
        }

        .about-link:hover {
          gap: 14px;
        }

        .about-arrow {
          font-size: 18px;
        }

        /* Tablet */
        @media (max-width: 1000px) {
          .about-section {
            gap: 35px;
            grid-template-columns: 1fr 1fr;
          }

          .about-image {
            width: 60%;
            max-width: 180px;
          }

          .about-copy h2 {
            font-size: 28px;
          }
        }

        /* Mobile */
        @media (max-width: 700px) {
          .about-section {
            width: calc(100% - 36px);
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 40px 0 55px;
          }

          .about-visual {
            min-height: 160px;
          }

          .about-image {
            width: 35%;
            max-width: 130px;
            border-radius: 14px;
          }

          .about-copy h2 {
            font-size: 28px;
          }

          .about-copy p {
            font-size: 13px;
          }

          .about-points span {
            font-size: 13px;
          }
        }

        /* Small mobile */
        @media (max-width: 400px) {
          .about-section {
            width: calc(100% - 28px);
            padding: 32px 0 45px;
          }

          .about-image {
            width: 40%;
            max-width: 110px;
          }

          .about-copy h2 {
            font-size: 25px;
          }

          .about-points {
            gap: 12px;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .about-link {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

