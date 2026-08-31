// useState lets a component remember a value that can change.
import React, { useState } from "react";

// Imports bring our smaller, reusable components into App.
import Header from "./components/Header";
import Menu from "./components/Menu";
import AboutModal from "./components/AboutModal";
import CityIllustration from "./components/CityIllustration";
import ChapterHub from "./components/ChapterHub";
import StatusMeters from "./components/StatusMeters";
import ReportCard from "./components/ReportCard";

// App assembles the page and owns its one piece of state.
function App() {
  // isAboutOpen remembers whether the About modal should be visible.
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  // currentScreen controls our simple game flow without React Router.
  const [currentScreen, setCurrentScreen] = useState("home");

  // Every navigation button calls this helper with the next screen name.
  function showScreen(screenName) {
    setCurrentScreen(screenName);
  }

  return (
    <>
      {/* Only the section matching currentScreen is rendered. */}
      {currentScreen === "home" && (
        <main className="game-shell">
          <CityIllustration />

          <section className="menu-panel">
            <div className="menu-panel__content">
              <Header
                title="SUZHOU"
                subtitle="A Narrative Strategy Experience"
              />

              <Menu
                startButtonText="Start Game"
                aboutButtonText="About"
                onStartGame={() => showScreen("chapterHub")}
                onOpenAbout={() => setIsAboutOpen(true)}
              />

              <p className="menu-panel__lesson">CLASS 04 · FROM WIREFRAME TO UI</p>
            </div>
          </section>
        </main>
      )}

      {/* App passes navigation functions down as props. */}
      {currentScreen === "chapterHub" && (
        <ChapterHub
          onBack={() => showScreen("home")}
          onSelectChapter={() => showScreen("chapter1")}
        />
      )}

      {currentScreen === "chapter1" && (
        <main className="chapter-screen chapter-screen--dark">
          <header className="game-topbar">
            <button
              type="button"
              className="text-button"
              onClick={() => showScreen("chapterHub")}
            >
              ← Chapter Hub
            </button>
            <p>CHAPTER 1 · WATER &amp; ENVIRONMENT</p>
            <span className="game-topbar__progress">01 / 07</span>
          </header>

          {/* The meter data stays in App; StatusMeters only displays it. */}
          <StatusMeters
            meters={[
              { name: "Environment", value: 62 },
              { name: "Economy", value: 55 },
              { name: "Public", value: 48 },
            ]}
          />

          <h1 className="chapter-briefing-title">
            City Water Quality Briefing
          </h1>

          <ReportCard />
        </main>
      )}

      {/* Conditional rendering: the modal exists only when this value is true. */}
      {isAboutOpen && (
        <AboutModal
          title="About Suzhou 2035"
          description="Suzhou 2035 is an interactive narrative strategy game. Players return to Suzhou in the year 2035 as a young urban planning advisor. Throughout the game, players will balance economic growth, environmental protection, cultural heritage, tourism, and technological innovation. Every decision changes the future of the city."
          onClose={() => setIsAboutOpen(false)}
        />
      )}

      {/* TODO: Continue Chapter 1 with the Shantang Canal field visit. */}
      {/* TODO: Later add Mr. Feng, Auntie Lin, the policy decision, and news. */}
    </>
  );
}

// export default makes this top-level component available to main.jsx.
export default App;
