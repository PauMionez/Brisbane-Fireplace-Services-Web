export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Why do I need to clean my chimney?",
    answer:
      "Creosote is a flammable substance that builds up in your chimney and fireplace as a result of burning wood. Build-up causes draw issues, poor performance, smoke blowing back into the room, and can lead to chimney fires if not cleared.",
  },
  {
    question: "What does a chimney sweep involve?",
    answer:
      "We tarp off the area around your stove or fireplace, seal the firebox opening, and use an industrial soot vacuum while brushing the full length of the flue. Once finished, we let you know about any issues, missing parts, or repairs we'd recommend.",
  },
  {
    question: "How long does a chimney sweep take?",
    answer:
      "An average sweep takes around 45 minutes from arrival to finishing up, though this can vary depending on the condition of the fireplace and access to the flue.",
  },
  {
    question: "Does someone need to be home while you work?",
    answer:
      "No, as long as we can access the fireplace. We're happy to work with whatever arrangement suits you.",
  },
  {
    question: "Is the process messy or noisy?",
    answer:
      "We take care to leave no mess behind. There is a period of noise during the sweep, usually around five minutes, so it's a good idea to keep pets somewhere calm while we work.",
  },
  {
    question: "How often should I have my chimney cleaned?",
    answer:
      "Once a year is the general recommendation from fireplace manufacturers, though homes that use their fireplace heavily may benefit from more frequent servicing.",
  },
  {
    question: "Can I light my fire the night before a sweep?",
    answer:
      "We ask that you don't. Fireplaces can retain heat for up to 24 hours, and a cold fire lets us do the job safely and thoroughly.",
  },
];
