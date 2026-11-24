import React, { useState } from "react";

// CLASS 6: The parent passes character data and callbacks as props.
function DialogueCard({ character, onBack, onComplete }) {
  // CLASS 6: Dialogue state tracks which line is currently shown, starting at 0.
  const [dialogueIndex, setDialogueIndex] = useState(0);

  // CLASS 6: Read the current line from the character's dialogue array.
  const currentDialogue = character.dialogue[dialogueIndex];
  const isLastLine = dialogueIndex === character.dialogue.length - 1;

  // CLASS 6: Next advances one line until the conversation is finished.
  function handleNext() {
    if (isLastLine) {
      // CLASS 6: The child calls onComplete; the parent chooses the next screen.
      onComplete();
    } else {
      setDialogueIndex(dialogueIndex + 1);
    }
  }

  return (
    <article className="story-card dialogue-card">
      <div className="dialogue-card__portrait">
        <img src={character.image} alt={character.imageAlt} />
      </div>

      <div className="story-card__content">
        <p className="screen-eyebrow">Stakeholder interview</p>
        <h1>{character.name}</h1>
        <p className="dialogue-card__role">{character.role}</p>
        <p className="dialogue-card__perspective">{character.perspective}</p>
        <blockquote aria-live="polite">“{currentDialogue}”</blockquote>
        <p>Line {dialogueIndex + 1} of {character.dialogue.length}</p>

        <div className="story-actions">
          <button
            type="button"
            className="story-button story-button--secondary"
            onClick={onBack}
          >
            ← Previous Screen
          </button>
          <button type="button" className="story-button" onClick={handleNext}>
            {isLastLine ? "Finish conversation →" : "Next →"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default DialogueCard;
