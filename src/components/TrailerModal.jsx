import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./styles/trailerModal.css";

function TrailerModal({ isOpen, videoKey, onClose, title }) {
  const { t } = useTranslation();
  useEffect(() => {
    if (!isOpen) return;

    // Disable body scroll when modal opens
    document.body.style.overflow = "hidden";

    // Handle ESC key press
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      // Restore body scroll
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Handle click outside the modal content
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="trailer-modal-backdrop" onClick={handleBackdropClick}>
      <div className="trailer-modal-content">
        {/* Close Button */}
        <button className="trailer-modal-close" onClick={onClose} aria-label={t("closeTrailer") }>
          ✕
        </button>

        {/* Title */}
        {title && <h2 className="trailer-modal-title">{title}</h2>}

        {/* YouTube Iframe */}
        <div className="trailer-video-container">
          {videoKey ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=1&modestbranding=1`}
              title={t("trailerTitle", { title })}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="trailer-iframe"
            ></iframe>
          ) : (
            <div className="trailer-error">
              <p>{t("trailerNotAvailable")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrailerModal;
