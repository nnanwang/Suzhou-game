// Keep story content as data so components can focus on displaying it.
export const chapter1Report = {
  title: "Water Quality Report",

  summary:
    "The canal running through the Shantang district is still swimmable in most sections, but water clarity has dropped noticeably over the past three years.",

  findings: [
    {
      label: "Three years",

      text: "of noticeably declining water clarity",
    },
    {
      label: "Three quarters",
      text: "of increased industrial runoff",
    },
    {
      label: "Nine months",
      text: "of rising runoff-related chemical markers",
    },
  ],

  note:
    "Suzhou's canals are central to the city's identity and economy. Visit Shantang Canal and hear from the people who live and work there before any decision is made.",
};

export const canalScene = {
  title: "Shantang Canal",
  location: "Industrial edge · Field observation",
  image: "/images/chapter1/shantang-canal.webp",
  imageAlt:
    "Shantang Canal lined with traditional white houses, with an industrial skyline in the distance",
  observation:
    "Near the factory outflow points, sediment buildup has left the water a duller green, and a faint chemical smell is sometimes detectable. Local fishing families also report smaller and less frequent catches than five years ago.",
};

// Each character has the same fields, so one DialogueCard can display either one.
export const characters = {
  feng: {
    name: "Mr. Feng",

    role: "Factory Owner",

    image: "/images/chapter1/mr-feng.webp",

    imageAlt: "Portrait of Mr. Feng, the factory owner",

    perspective: "Industrial growth · Forty proposed jobs",

    // DialogueCard reads these lines in order using dialogueIndex.
    dialogue: [
      "This expansion means forty new jobs for this district.",
      "Why should we be held back for a canal that's going to change anyway?",

      "Those jobs could help local families build a future here. That matters to this district too.",
      "Cleaner equipment costs money. If you ask us to upgrade, we need time to plan how to pay for it.",
      "I understand that people are worried about the water. Give us clear rules and a realistic timeline, so we can protect jobs while making improvements.",
    ],
  },

  lin: {
    name: "Auntie Lin",
    role: "Local Resident · Lifelong canal-side fisher",
    image: "/images/chapter1/auntie-lin.webp",
    imageAlt: "Portrait of Auntie Lin, a lifelong canal-side fisher",
    perspective: "Water quality · Community trust",

    // DialogueCard reads these lines in order using dialogueIndex.
    dialogue: [
      "My family has fished this water for three generations.",
      "It's not the same water it was ten years ago.",

      "We bring home fewer fish now. When the catch gets smaller, families like mine feel the difference at the dinner table.",
      "I know the factory provides jobs. But fishing is work too, and our work depends on clean water.",
      "Before you approve more growth, tell us how the canal will be protected and how we will know the water is getting better. We need more than a promise.",
    ],
  },
};

// These percentages are display-only and do not change when a policy is confirmed.
export const startingMeters = [

  { name: "Environment", value: 62 },
  { name: "Economy", value: 55 },
  { name: "Heritage", value: 58 },
  { name: "Public", value: 48 },
];

// Each policy has a unique id for tracking which card is selected.
export const policyChoices = [
  {
    id: "approve",
    image: "/images/chapter1/mr-feng.webp",
    priority: "Jobs & growth",
    title: "Approve the expansion",
    description: "Allow the factory to expand under the current requirements.",
    tradeoff: "Prioritizes the proposed jobs, but leaves residents' water concerns unresolved.",
  },
  {
    id: "conditional",
    image: "/images/chapter1/shantang-canal.webp",
    priority: "Growth & safeguards",
    title: "Approve with environmental conditions",
    description: "Require cleaner equipment and a water-monitoring plan before expansion begins.",
    tradeoff: "Supports growth with safeguards, but adds costs and may delay hiring.",
  },
  {
    id: "pause",
    image: "/images/chapter1/auntie-lin.webp",
    priority: "Water investigation",
    title: "Pause the expansion",
    description: "Delay approval while the city investigates canal water quality.",
    tradeoff: "Prioritizes investigation, but postpones the proposed jobs and creates uncertainty for the factory.",
  },
];
