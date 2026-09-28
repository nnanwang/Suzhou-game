import React, { useState } from "react";

import ReportCard from "./ReportCard";
import StatusMeters from "./StatusMeters";
import CanalScene from "./CanalScene";
import DialogueCard from "./DialogueCard";
import PolicyDecision from "./PolicyDecision";

import {
  canalScene,
  chapter1Report,
  characters,
  startingMeters,
  policyChoices,
} from "../data/chapter1";

const stepNumbers = {
  report: "01",
  canal: "02",
  feng: "03",
  lin: "04",
  decision: "05",
};

function ChapterOne({ onBack }) {
  // Remember which story screen is visible; begin with the report.
  const [currentStep, setCurrentStep] = useState("report");

  // Keep the chosen policy and its confirmation in the parent.
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [isPolicyConfirmed, setIsPolicyConfirmed] = useState(false);

  // Choosing another policy clears the previous confirmation.
  function handlePolicySelect(policy) {
    setSelectedPolicy(policy);
    setIsPolicyConfirmed(false);
  }

  // Record the choice for this visit; the meters stay unchanged.
  function handlePolicyConfirm() {
    if (selectedPolicy) {
      setIsPolicyConfirmed(true);
    }
  }

  return (
    <main className="chapter-screen chapter-screen--dark">

      <header className="game-topbar">

        <button type="button" className="text-button" onClick={onBack}>
          ← Chapter Hub
        </button>

        <p>CHAPTER 1 · WATER &amp; ENVIRONMENT</p>

        <span className="game-topbar__progress">
          {stepNumbers[currentStep]} / 05
        </span>
      </header>

      {/* Outside the screen conditions, the meters stay visible. */}
      <StatusMeters meters={startingMeters} />

      <section className={`chapter-stage${currentStep === "decision" ? " chapter-stage--policy" : ""}`}>

        {/* Pass content and a callback so the child can request the next screen. */}
        {currentStep === "report" && (
          <ReportCard
            report={chapter1Report}
            onContinue={() => setCurrentStep("canal")}
          />
        )}

        {currentStep === "canal" && (
          <CanalScene
            scene={canalScene}
            onBack={() => setCurrentStep("report")}
            onContinue={() => setCurrentStep("feng")}
          />
        )}

        {/* Reuse one DialogueCard with the data for the current character. */}
        {/* A different key starts each conversation again at line zero. */}
        {(currentStep === "feng" || currentStep === "lin") && (
          <DialogueCard
            key={currentStep}
            character={characters[currentStep]}
            onBack={() => setCurrentStep(currentStep === "feng" ? "canal" : "feng")}

            // When the child finishes, the parent chooses the next screen.
            onComplete={() => setCurrentStep(currentStep === "feng" ? "lin" : "decision")}
          />
        )}

        {/* Pass the selection down; callbacks let the child request changes. */}
        {currentStep === "decision" && (
          <PolicyDecision
            choices={policyChoices}
            selectedPolicy={selectedPolicy}
            isConfirmed={isPolicyConfirmed}
            onSelect={handlePolicySelect}
            onConfirm={handlePolicyConfirm}
            onEdit={() => setIsPolicyConfirmed(false)}
            onBack={() => setCurrentStep("lin")}
          />
        )}
      </section>

    </main>
  );
}

export default ChapterOne;
