
import React from "react";
import oip from "./optimus-logo.png";

// Manual arrow-up-right icon
function ArrowUpRightIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <a href="#home" className="footer-brand">
        <img
          src={oip}
          alt="Optimus IT Solutions Logo"
          className="footer-image"
        />

        <span className="footer-brand-text">
          Optimus
          <small>IT SOLUTIONS</small>
        </span>
      </a>

      <p>Thoughtful technology. Practical impact.</p>

      <div className="footer-right">
        <a
          href="https://optimusitsolutions.com"
          target="_blank"
          rel="noreferrer"
        >
          Website <ArrowUpRightIcon />
        </a>

        <span>
          © {new Date().getFullYear()} Optimus IT Solutions
        </span>
      </div>

      <style>{`
        .site-footer {
          width: min(1240px, calc(100% - 48px));
          margin: auto;
          border-top: 1px solid #18304b;
          padding: 22px 0 26px;
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #fff;
          font-size: 15px;
          font-weight: 800;
          text-decoration: none;
        }

        .footer-image {
          width: 34px;
          height: 34px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .footer-brand-text {
          display: block;
          line-height: 1.2;
        }

        .footer-brand small {
          display: block;
          font-size: 9px;
          color: #38d5f4;
          letter-spacing: 1px;
          margin-top: 3px;
        }

        .site-footer > p {
          font-size: 10px;
          color: #8298b4;
        }

        .footer-right {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 22px;
          font-size: 10px;
          color: #8298b4;
        }

        .footer-right a {
          color: #b4c6dc;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .footer-right a:hover {
          color: #38d5f4;
        }

        @media(max-width:600px) {
          .footer-right {
            margin-left: 0;
            width: 100%;
            justify-content: space-between;
            gap: 10px;
          }
        }
      `}</style>
    </footer>
  );
}

