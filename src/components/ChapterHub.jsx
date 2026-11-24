import React from "react";
import chapters from "../data/chapters";
import ChapterCard from "./ChapterCard";

// ChapterHub receives navigation functions from App instead of owning screen state.
function ChapterHub({ onBack, onSelectChapter, activeChapterId, hasStarted }) {
  return (
    <main className="hub-screen">
      <header className="game-topbar">
        <button type="button" className="text-button" onClick={onBack}>
          ← Home
        </button>
        <p>SUZHOU 2035 · CITY ARCHIVE</p>
      </header>

      <section className="hub-content">
        <p className="screen-eyebrow">Your decisions shape the city</p>
        <h1>Choose a Chapter</h1>
        <p className="screen-intro">
          Resume the current chapter. Continue from its signed result to enter the next chapter.
        </p>

        <div className="chapter-list">
          {chapters.map((chapter) => {
            // CLASS 9: Only the active chapter can open or resume.
            const isCurrentChapter = chapter.id === activeChapterId;
            let statusLabel = "Locked";

            // CLASS 9: Earlier chapters stay closed so their effects cannot repeat.
            if (chapter.id < activeChapterId) {
              statusLabel = "Completed";
            } else if (isCurrentChapter) {
              statusLabel = hasStarted ? "Resume →" : "Begin →";
            }

            const chapterCard = {
              ...chapter,
              available: isCurrentChapter,
              statusLabel,
            };

            return (
              <ChapterCard
                key={chapter.id}
                chapter={chapterCard}
                onSelect={onSelectChapter}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default ChapterHub;
