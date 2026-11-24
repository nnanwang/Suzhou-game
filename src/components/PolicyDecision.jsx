import React from "react";

// CLASS 8: Chapter data supplies the heading, symbol and interview link.
function PolicyDecision({ choices, title, symbol, lastCharacterName, selectedPolicy, onSelect, onConfirm, onBack }) {
  return (
    <article className="policy-desk">
      <header className="policy-desk__heading">
        <p className="screen-eyebrow">Suzhou · Council chamber</p>
        <h1>{title}</h1>
        <p>Three proposals. Compare the cards, then sign your decree.</p>
      </header>
      <div className="policy-hand" role="group" aria-label="Policy proposals">
        {/* CLASS 6: map displays all policies so the player can compare them. */}
        {choices.map((choice, index) => (
          <button
            key={choice.id}
            type="button"
            className="policy-playing-card"
            aria-pressed={selectedPolicy?.id === choice.id}
            // CLASS 6: Clicking a card sends that policy to the parent.
            onClick={() => onSelect(choice)}
          >
            <span className="policy-card__top"><span>0{index + 1}</span><span>{choice.priority}</span><span>{symbol}</span></span>
            <span className="policy-card__art"><img src={choice.image} alt="" /></span>
            <span className="policy-card__title">{choice.title}</span>
            <span className="policy-card__description">{choice.description}</span>
            <span className="policy-card__tradeoff"><strong>The trade-off</strong>{choice.tradeoff}</span>
            <span className="policy-card__pick">{selectedPolicy?.id === choice.id ? "✓ Selected decree" : "Choose this decree"}</span>
          </button>
        ))}
      </div>
      <div className="policy-signing">
        <p aria-live="polite">{selectedPolicy ? `Ready to sign: ${selectedPolicy.title}` : "Choose a card to prepare your decree."}</p>
        {/* CLASS 6: Selection and confirmation are separate actions. */}
        <button type="button" className="story-button" disabled={!selectedPolicy} onClick={onConfirm}>Sign decree →</button>
      </div>
      <button type="button" className="text-button policy-back" onClick={onBack}>← Hear {lastCharacterName} again</button>
    </article>
  );
}

export default PolicyDecision;
