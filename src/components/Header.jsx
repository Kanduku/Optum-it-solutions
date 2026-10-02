
import React, { useState } from "react";
import oip from "./optimus-logo.png";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About Us", "#about"],
  ["Why Us", "#why-us"],
  ["Contact", "#contact"]
];

// Manual menu icon
function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

// Manual close icon
function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// Manual arrow icon
function ArrowUpRightIcon() {
  return (
    <svg
      width="16"
      height="16"
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

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-left">
        {/* Hamburger menu on the left */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Logo and company name */}
        <a href="#home" className="brand" onClick={closeMenu}>
          <img
            src={oip}
            alt="Optimus IT Solutions Logo"
            className="brand-image"
          />

          <span className="brand-text">
            Optimus
            <small>IT SOLUTIONS</small>
          </span>
        </a>
      </div>

      {/* Navigation */}
      <nav
        id="main-navigation"
        className={open ? "nav nav-open" : "nav"}
      >
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}

        {/* CTA inside mobile navigation */}
        <a
          href="#contact"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Let's Talk <ArrowUpRightIcon />
        </a>
      </nav>

      {/* Desktop CTA */}
      <a href="#contact" className="header-cta">
        Let's Talk <ArrowUpRightIcon />
      </a>

      <style>{`
        .site-header {
          width: min(1240px, calc(100% - 48px));
          min-height: 76px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #18304b;
          position: relative;
          z-index: 100;
        }

        /* Left section */
        .header-left {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }

        /* Brand */
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 19px;
          font-weight: 800;
          color: white;
          text-decoration: none;
        }

        .brand-image {
          width: 40px;
          height: 40px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .brand-text {
          display: block;
          line-height: 1.2;
        }

        .brand small {
          display: block;
          color: #38d5f4;
          font-size: 10px;
          letter-spacing: 1px;
          margin-top: 3px;
        }

        /* Desktop navigation */
        .nav {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav a {
          text-decoration: none;
          color: #c5d3e5;
          font-size: 13px;
          font-weight: 500;
          transition: color 0.25s ease;
        }

        .nav a:hover {
          color: #38d5f4;
        }

        /* CTA */
        .header-cta,
        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 30px;
          color: white;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          background: linear-gradient(110deg, #2368f6, #8561fa);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .header-cta:hover,
        .mobile-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(35, 104, 246, 0.25);
        }

        .mobile-cta {
          display: none !important;
        }

        /* Hamburger */
        .menu-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          padding: 0;
          color: white;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .menu-toggle:hover {
          background: rgba(56, 213, 244, 0.1);
          border-color: #38d5f4;
        }

        /* Tablet */
        @media (max-width: 1000px) {
          .nav {
            gap: 18px;
          }

          .nav a {
            font-size: 12px;
          }

          .header-cta {
            padding: 11px 14px;
          }
        }

        /* Mobile and tablet menu */
        @media (max-width: 760px) {
          .site-header {
            width: calc(100% - 32px);
            min-height: 70px;
          }

          .header-left {
            gap: 12px;
          }

          .menu-toggle {
            display: flex;
            order: -1;
          }

          .brand {
            gap: 8px;
            font-size: 17px;
          }

          .brand-image {
            width: 36px;
            height: 36px;
          }

          .brand small {
            font-size: 9px;
          }

          /* Dropdown navigation */
          .nav {
            position: absolute;
            top: calc(100% + 10px);
            left: 0;
            right: 0;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 4px;
            padding: 12px;
            background: rgba(8, 23, 42, 0.98);
            border: 1px solid #18304b;
            border-radius: 16px;
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);

            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(-10px);
            transition:
              opacity 0.25s ease,
              transform 0.25s ease,
              visibility 0.25s ease;
          }

          .nav.nav-open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
          }

          .nav a {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 14px 16px;
            border-radius: 10px;
            font-size: 14px;
            color: #c5d3e5;
            box-sizing: border-box;
          }

          .nav a:hover {
            color: #38d5f4;
            background: rgba(56, 213, 244, 0.08);
          }

          .mobile-cta {
            display: flex !important;
            width: 100%;
            margin-top: 8px;
            padding: 14px;
            box-sizing: border-box;
            font-size: 13px !important;
            color: white !important;
          }

          .header-cta {
            display: none;
          }
        }

        /* Small mobile */
        @media (max-width: 400px) {
          .site-header {
            width: calc(100% - 24px);
            min-height: 64px;
          }

          .header-left {
            gap: 8px;
          }

          .menu-toggle {
            width: 38px;
            height: 38px;
          }

          .brand {
            font-size: 15px;
            gap: 6px;
          }

          .brand-image {
            width: 32px;
            height: 32px;
          }

          .brand small {
            font-size: 8px;
            letter-spacing: 0.8px;
          }
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .nav,
          .nav a,
          .menu-toggle,
          .header-cta,
          .mobile-cta {
            transition: none;
          }
        }
      `}</style>
    </header>
  );
}

