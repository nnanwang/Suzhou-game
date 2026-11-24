// CLASS 8: Teaching draft for Chapter 2; replace this story with the student's writing.
// CLASS 8: Each chapter supplies its own scene and character images.
const image = "/images/chapter2/old-town-courtyard.png";
export const chapter2 = {
  id: 2,
  title: "Old Town & Heritage",
  symbol: "城",
  decisionTitle: "The old town's next chapter",
  resultBackground: image,
  report: {
    title: "Old Town Housing Report",
    summary: "Historic homes need safer wiring and better drainage. The council must improve living conditions while protecting the neighbourhood's character.",
    findings: [
      { label: "Safety", text: "Residents need reliable utilities and repairs." },
      { label: "Heritage", text: "Traditional courtyards and workshops give the area its identity." },
      { label: "Affordability", text: "Renovation costs could force existing residents to leave." },
    ],
    note: "Hear from a resident and a local craft worker before choosing a renovation plan.",
  },
  scene: {
    title: "Old Town Courtyard", location: "Historic district · Field observation",
    image, imageAlt: "Old Suzhou courtyard with traditional houses, bicycles and an open workshop",
    observation: "Residents share a narrow courtyard with a small craft workshop. The buildings need repairs, but the community wants to keep its homes and local businesses.",
  },
  characters: [
    { name: "Old Town Resident", role: "Community representative", image: "/images/chapter2/old-town-resident.png",
      imageAlt: "Old Town Resident standing in her courtyard with a shopping bag", perspective: "Safe homes · Affordable living",
      dialogue: ["We need safer wiring and better drainage, but we cannot afford a large rent increase.", "Please let families stay in their neighbourhood while the repairs happen."] },
    { name: "Local Craft Worker", role: "Workshop owner", image: "/images/chapter2/local-craft-worker.png",
      imageAlt: "Local Craft Worker holding a carved wooden window panel outside his workshop", perspective: "Living heritage · Local livelihoods",
      dialogue: ["Our workshop is part of this street's history. A new building alone cannot replace it.", "Repair the old buildings and give small businesses time to adapt."] },
  ],
  policies: [
    { id: "redevelop", image, priority: "Speed & investment", title: "Redevelop the block",
      description: "Replace older homes with modern buildings and new commercial space.",
      tradeoff: "Attracts investment, but removes historic buildings and disrupts residents.",
      effects: { environment: -5, economy: 15, heritage: -20, public: -10 },
      result: { headline: "Redevelopment approved for the old town", summary: "Investment rises, while demolition and relocation put pressure on heritage and community confidence." } },
    { id: "restore", image, priority: "Homes & heritage", title: "Restore homes in stages",
      description: "Repair utilities and historic buildings while supporting existing residents.",
      tradeoff: "Protects the community and heritage, but requires funding and takes longer.",
      effects: { environment: 5, economy: -5, heritage: 15, public: 10 },
      result: { headline: "Phased restoration protects local homes", summary: "The council funds repairs and keeps residents involved. Heritage and trust improve, with a short-term economic cost." } },
    { id: "safety", image, priority: "Essential repairs", title: "Fund urgent safety repairs",
      description: "Fix the most urgent hazards while postponing wider renovation.",
      tradeoff: "Limits immediate spending and disruption, but leaves larger problems unresolved.",
      effects: { environment: 0, economy: -2, heritage: 3, public: 3 },
      result: { headline: "Safety repairs begin in the historic district", summary: "Urgent repairs provide modest improvements. The city still needs a long-term plan for the old town." } },
  ],
};
