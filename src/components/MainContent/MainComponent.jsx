import React, { useState, useEffect, useRef } from "react";
import "./MainComponent.css";
import FAQ from "../FAQ/FAQ";
import Arrow from "../../assets/Arrow.png";
import ExplainerComponent from "../ExplainerComponent/ExplainerComponent";

export default function MainComponent({ openCalendly }) {

  // Referenz für den FAQ-Bereich
  const faqRef = useRef(null);

  const handleClick = () => {
    openCalendly();
  };

  // Funktion für das Scrollen zum FAQ-Bereich
  const handleLearnMoreClick = () => {
    faqRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="main">
        <div className="arrow-container">
          <img src={Arrow} alt="Arrow Icon" className="arrow-image" />
        </div>
        <div className="margin-center">
          <div className="main-container">
            <div className="cta-container">
              <h1 className="h1-header">
                Schluss mit wiederholten E-Mails – keine Zeit mehr verschwenden.
              </h1>
              <ul>
                <li>
                  Wiederkehrende Fragen eliminieren: Automatische Antworten auf
                  häufige Anfragen.
                </li>
                <li>
                  Buchungen automatisieren: Anfragen direkt mit CRM-Integration
                  bearbeiten.
                </li>
                <li>
                  Gästezufriedenheit erhöhen: Schnelle und präzise Antworten.
                </li>
                <li>
                  Zeit sparen: Fokus auf die wichtigen Aufgaben Ihres
                  Campingplatzes.
                </li>
              </ul>
              <div className="button-container">
                <button
                  onClick={handleClick}
                  className="call-to-action button-effect"
                >
                  Termin Vereinbaren
                </button>
              </div>
            </div>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/IiB02GFi1FU"
                id="video"
                allowFullScreen
                title="YouTube video"
              ></iframe>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="small-screen-call-to-action button-effect"
              >
                Termin Vereinbaren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
