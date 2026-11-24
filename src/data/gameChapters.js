import { chapter1Report, canalScene, characters, policyChoices } from "./chapter1";
import { chapter2 } from "./chapter2";

// CLASS 8: Every chapter supplies the same fields to one ChapterScreen.
// Preserve Chapter 1's existing story, portraits and policies.
// CLASS 9: App follows this array order to find the current and next chapters.
export const gameChapters = [
  {
    id: 1, title: "Water & Environment", symbol: "水",
    decisionTitle: "The canal's next chapter",
    resultBackground: canalScene.image,
    report: chapter1Report, scene: canalScene,
    characters: [characters.feng, characters.lin], policies: policyChoices,
  },
  chapter2,
];
