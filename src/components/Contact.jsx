
import React from "react";

// Manual arrow-up-right SVG icon
function ArrowUpRightIcon() {
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
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-banner">
        <div className="banner-content">
          <div className="eyebrow">HAVE AN IDEA?</div>

          <h2>
            Let's make something meaningful.
          </h2>

          <p>
            Tell us what you're looking to build.
            Let's explore how technology can help.
          </p>
        </div>

        <a
          href="mailto:info@optimusitsolutions.com?subject=Project%20enquiry"
          className="contact-button"
        >
          Discuss your project
          <ArrowUpRightIcon />
        </a>
      </div>

      <style>{`
        /* Main section */
        .contact-section {
          width: min(1240px, calc(100% - 48px));
          margin: auto;
          padding: 30px 0 60px;
        }

        /* Contact banner */
        .contact-banner {
          min-height: 175px;
          border: 1px solid #3d6fb766;
          border-radius: 20px;
          padding: 32px 38px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          background: linear-gradient(
            110deg,
            #0b2442,
            #101b42 65%,
            #211849
          );
          box-sizing: border-box;
        }

        /* Banner content */
        .banner-content .eyebrow {
          color: #38d5f4;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .banner-content h2 {
          font-size: 32px;
          line-height: 1.2;
          margin: 0;
          letter-spacing: -1px;
          color: #fff;
        }

        .banner-content p {
          font-size: 12px;
          line-height: 1.7;
          color: #b1c2d8;
          margin-top: 10px;
        }

        /* Contact button */
        .contact-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 13px 21px;
          border-radius: 30px;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          background: linear-gradient(
            105deg,
            #258bfa,
            #8d50f3
          );
          transition:
            transform 0.25s ease,
            filter 0.25s ease,
            box-shadow 0.25s ease;
        }

        .contact-button:hover {
          filter: brightness(1.15);
          transform: translateY(-2px);
          box-shadow: 0 8px 22px #258bfa35;
        }

        .contact-button svg {
          flex-shrink: 0;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .contact-banner {
            padding: 30px;
          }

          .banner-content h2 {
            font-size: 28px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .contact-section {
            width: calc(100% - 36px);
            padding: 25px 0 45px;
          }

          .contact-banner {
            padding: 26px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
            border-radius: 16px;
          }

          .banner-content h2 {
            font-size: 26px;
          }

          .banner-content p {
            font-size: 13px;
          }

          .contact-button {
            padding: 13px 18px;
            font-size: 12px;
          }
        }

        /* Small mobile */
        @media (max-width: 400px) {
          .contact-section {
            width: calc(100% - 28px);
          }

          .contact-banner {
            padding: 23px 16px;
          }

          .banner-content h2 {
            font-size: 23px;
          }

          .contact-button {
            width: 100%;
            box-sizing: border-box;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .contact-button {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

