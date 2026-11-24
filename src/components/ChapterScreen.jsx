import React, { useState } from "react";
import ReportCard from "./ReportCard";
import StatusMeters from "./StatusMeters";
import CanalScene from "./CanalScene";
import DialogueCard from "./DialogueCard";
import PolicyDecision from "./PolicyDecision";
import PolicyResult from "./PolicyResult";

const stepNumbers = { report: "01", scene: "02", character1: "03", character2: "04", decision: "05" };

// CLASS 8: The same screen reads different chapter data through props.
function ChapterScreen({ chapter, meters, onApplyPolicy, onRestoreMeters, onNextChapter, nextChapter, onBack }) {
  const [currentStep, setCurrentStep] = useState("report");
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [isPolicyConfirmed, setIsPolicyConfirmed] = useState(false);
  // CLASS 9: Capture this chapter's starting values, not the game's original values.
  const [chapterStartMeters] = useState(meters);

  function handlePolicySelect(policy) {
    if (!isPolicyConfirmed) setSelectedPolicy(policy);
  }
  function handlePolicyConfirm() {
    if (!selectedPolicy || isPolicyConfirmed) return;
    // CLASS 9: The child requests a change; App updates the shared city state.
    onApplyPolicy(selectedPolicy);
    setIsPolicyConfirmed(true);
  }
  function handleRestart() {
    // CLASS 9: Undo only this chapter's effects. Earlier chapters still count.
    onRestoreMeters(chapterStartMeters);
    setSelectedPolicy(null);
    setIsPolicyConfirmed(false);
    setCurrentStep("report");
  }
  const characterIndex = currentStep === "character1" ? 0 : 1;

  return (
    <main className={`chapter-screen chapter-screen--dark${isPolicyConfirmed ? " chapter-screen--result" : ""}`}
      style={{ "--chapter-result-image": `url("${chapter.resultBackground}")` }}>
      <header className="game-topbar">
        <button type="button" className="text-button" onClick={onBack}>← Chapter Hub</button>
        <p>CHAPTER {chapter.id} · {chapter.title.toUpperCase()}</p>
        <span className="game-topbar__progress">{stepNumbers[currentStep]} / 05</span>
      </header>
      <StatusMeters meters={meters} />
      <section key={isPolicyConfirmed ? "result" : "story"}
        className={`chapter-stage${currentStep === "decision" ? " chapter-stage--policy" : ""}`}>
        {/* CLASS 9: Pass chapter content down and change steps through callbacks. */}
        {currentStep === "report" && (
          <ReportCard report={chapter.report} chapterId={chapter.id} chapterTitle={chapter.title}
            sceneTitle={chapter.scene.title} onContinue={() => setCurrentStep("scene")} />
        )}
        {currentStep === "scene" && (
          <CanalScene scene={chapter.scene} nextCharacterName={chapter.characters[0].name}
            onBack={() => setCurrentStep("report")} onContinue={() => setCurrentStep("character1")} />
        )}
        {(currentStep === "character1" || currentStep === "character2") && (
          <DialogueCard key={currentStep} character={chapter.characters[characterIndex]}
            onBack={() => setCurrentStep(characterIndex === 0 ? "scene" : "character1")}
            onComplete={() => setCurrentStep(characterIndex === 0 ? "character2" : "decision")} />
        )}
        {currentStep === "decision" && !isPolicyConfirmed && (
          <PolicyDecision choices={chapter.policies} title={chapter.decisionTitle} symbol={chapter.symbol}
            lastCharacterName={chapter.characters[1].name} selectedPolicy={selectedPolicy}
            onSelect={handlePolicySelect} onConfirm={handlePolicyConfirm}
            onBack={() => setCurrentStep("character2")} />
        )}
        {/* CLASS 9: Compare with this chapter's baseline and forward App's Next callback. */}
        {currentStep === "decision" && isPolicyConfirmed && (
          <PolicyResult policy={selectedPolicy} before={chapterStartMeters} after={meters}
            onRestart={handleRestart} nextChapter={nextChapter} onNextChapter={onNextChapter} />
        )}
      </section>
    </main>
  );
}
export default ChapterScreen;
