// Import React so this component can return JSX.
import React from "react";

// CLASS 9: Scene titles and character names come from the current chapter.
// Receive scene data and two navigation functions through props.
function CanalScene({ scene, nextCharacterName, onBack, onContinue }) {
  // Return the complete field-visit screen.
  return (
    // Reuse the shared story-card style and add a scene-specific class.
    <article className="story-card scene-card">
      {/* This container holds the large scene image and its caption. */}
      <div className="scene-card__image">
        {/* Read the image path and alt text from the scene data object. */}
        <img src={scene.image} alt={scene.imageAlt} />

        {/* The caption tells the player where this field visit takes place. */}
        <span className="scene-card__caption">Field visit · {scene.title}</span>
      </div>

      {/* This container holds the scene text and navigation buttons. */}
      <div className="story-card__content">
        {/* Insert the location label from the current chapter. */}
        <p className="screen-eyebrow">{scene.location}</p>

        {/* Insert the scene title from the current chapter. */}
        <h1>{scene.title}</h1>

        {/* Insert the player's field observation from the current chapter. */}
        <p className="scene-card__observation">{scene.observation}</p>

        {/* Group the two navigation buttons together. */}
        <div className="story-actions">
          {/* Run the onBack callback supplied by ChapterScreen. */}
          <button
            type="button"
            className="story-button story-button--secondary"
            onClick={onBack}
          >
            ← Back to Report
          </button>

          {/* CLASS 9: The parent chooses the next step; this button calls onContinue. */}
          <button type="button" className="story-button" onClick={onContinue}>
            Continue to {nextCharacterName} →
          </button>
        </div>
      </div>
    </article>
  );
}

// Export CanalScene so ChapterScreen can render it.
export default CanalScene;
