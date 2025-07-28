import { FaDownload } from "react-icons/fa";

export default function DownloadButton() {
  return (
    <div className={`download-container`}>
      <a href="https://vicolraj.github.io/Pictures/MyResume.pdf" download className="download-btn">
        View CV
        <span className="download-icon">
          <FaDownload />
        </span>
      </a>

      <style jsx = "true">{`
        .download-container {
          display: flex;
          justify-content: center;
          align-items: center;
          font: var(--bodyText);
        }

        .download-btn {
          position: relative;
          padding: .6rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 50px;
          color: #fff;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 32px rgba(255, 255, 255, 0.05),
            inset 0 0 0 0 rgba(255, 255, 255, 0.2);
          overflow: hidden;
          transition: all 0.35s ease-in-out;
          cursor: pointer;
        }

        .download-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          transition: all 0.75s ease-in-out;
          z-index: 0;
        }

        .download-btn:hover::before {
          left: 100%;
        }

        .download-btn:hover {
          transform: scale(1.03);
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3),
            inset 0 0 10px rgba(255, 255, 255, 0.1);
        }

        .download-icon {
          display: inline-block;
          margin-left: 10px;
          font-size: 1.4rem;
          transition: transform 0.3s ease;
          scale: 0.75;
          margin-bottom: -2px;
          transform: translateY(5.5px);
        }

        .download-btn:hover .download-icon {
          transform: translateY(3px);
        }

        .download-btn:active {
          animation: pulse 0.4s;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }
      `}</style>
    </div>
  );
}
