const questions = [
  {
    id: 1,
    text: "At a party, do you",
    answers: [
      { id: "a", text: "interact with many, including strangers", type: "E" },
      { id: "b", text: "interact with a few, known to you", type: "I" },
    ],
  },
  {
    id: 2,
    text: "Are you more",
    answers: [
      { id: "a", text: "realistic than speculative", type: "S" },
      { id: "b", text: "speculative than realistic", type: "N" },
    ],
  },
  {
    id: 3,
    text: "Is it worse to",
    answers: [
      { id: "a", text: "have your \"head in the clouds\"", type: "S" },
      { id: "b", text: "be \"in a rut\"", type: "N" },
    ],
  },
  {
    id: 4,
    text: "Are you more impressed by",
    answers: [
      { id: "a", text: "principles", type: "T" },
      { id: "b", text: "emotions", type: "F" },
    ],
  },
  {
    id: 5,
    text: "Are you more drawn toward the",
    answers: [
      { id: "a", text: "convincing", type: "T" },
      { id: "b", text: "touching", type: "F" },
    ],
  },
  {
    id: 6,
    text: "Do you prefer to work",
    answers: [
      { id: "a", text: "to deadlines", type: "J" },
      { id: "b", text: "just \"whenever\"", type: "P" },
    ],
  },
  {
    id: 7,
    text: "Do you tend to choose",
    answers: [
      { id: "a", text: "rather carefully", type: "J" },
      { id: "b", text: "somewhat impulsively", type: "P" },
    ],
  },
  {
    id: 8,
    text: "At parties, do you",
    answers: [
      { id: "a", text: "stay late, with increasing energy", type: "E" },
      { id: "b", text: "leave early, with decreased energy", type: "I" },
    ],
  },
  {
    id: 9,
    text: "Are you more attracted to",
    answers: [
      { id: "a", text: "sensible people", type: "S" },
      { id: "b", text: "imaginative people", type: "N" },
    ],
  },
  {
    id: 10,
    text: "Are you more interested in",
    answers: [
      { id: "a", text: "what is actual", type: "S" },
      { id: "b", text: "what is possible", type: "N" },
    ],
  },
  {
    id: 11,
    text: "In judging others, are you more swayed by",
    answers: [
      { id: "a", text: "laws than circumstances", type: "T" },
      { id: "b", text: "circumstances than laws", type: "F" },
    ],
  },
  {
    id: 12,
    text: "In approaching others is your inclination to be somewhat",
    answers: [
      { id: "a", text: "objective", type: "T" },
      { id: "b", text: "personal", type: "F" },
    ],
  },
  {
    id: 13,
    text: "Are you more",
    answers: [
      { id: "a", text: "punctual", type: "J" },
      { id: "b", text: "leisurely", type: "P" },
    ],
  },
  {
    id: 14,
    text: "Does it bother you more having things",
    answers: [
      { id: "a", text: "incomplete", type: "J" },
      { id: "b", text: "completed", type: "P" },
    ],
  },
  {
    id: 15,
    text: "In your social groups, do you",
    answers: [
      { id: "a", text: "keep abreast of other's happenings", type: "E" },
      { id: "b", text: "get behind on the news", type: "I" },
    ],
  },
  {
    id: 16,
    text: "In doing ordinary things, are you more likely to",
    answers: [
      { id: "a", text: "do it the usual way", type: "S" },
      { id: "b", text: "do it your own way", type: "N" },
    ],
  },
  {
    id: 17,
    text: "Writers should",
    answers: [
      { id: "a", text: "\"say what they mean and mean what they say\"", type: "S" },
      { id: "b", text: "express things more by use of analogy", type: "N" },
    ],
  },
  {
    id: 18,
    text: "Which appeals to you more:",
    answers: [
      { id: "a", text: "consistency of thought", type: "T" },
      { id: "b", text: "harmonious human relationships", type: "F" },
    ],
  },
  {
    id: 19,
    text: "Are you more comfortable in making",
    answers: [
      { id: "a", text: "logical judgements", type: "T" },
      { id: "b", text: "value judgements", type: "F" },
    ],
  },
  {
    id: 20,
    text: "Do you want things",
    answers: [
      { id: "a", text: "settled and decided", type: "J" },
      { id: "b", text: "unsettled and undecided", type: "P" },
    ],
  },
  {
    id: 21,
    text: "Would you say you are more",
    answers: [
      { id: "a", text: "serious and determined", type: "J" },
      { id: "b", text: "easy-going", type: "P" },
    ],
  },
  {
    id: 22,
    text: "In phoning, do you",
    answers: [
      { id: "a", text: "rarely question that it will all be said", type: "E" },
      { id: "b", text: "rehearse what you'll say", type: "I" },
    ],
  },
  {
    id: 23,
    text: "Facts",
    answers: [
      { id: "a", text: "\"speak for themselves\"", type: "S" },
      { id: "b", text: "illustrate principles", type: "N" },
    ],
  },
  {
    id: 24,
    text: "Are visionaries",
    answers: [
      { id: "a", text: "somewhat annoying", type: "S" },
      { id: "b", text: "rather fascinating", type: "N" },
    ],
  },
  {
    id: 25,
    text: "Are you more often",
    answers: [
      { id: "a", text: "a cool-headed person", type: "T" },
      { id: "b", text: "a warm-hearted person", type: "F" },
    ],
  },
  {
    id: 26,
    text: "Is it worse to be",
    answers: [
      { id: "a", text: "unjust", type: "T" },
      { id: "b", text: "merciless", type: "F" },
    ],
  },
  {
    id: 27,
    text: "Should one usually let events occur",
    answers: [
      { id: "a", text: "by careful selection and choice", type: "J" },
      { id: "b", text: "randomly and by chance", type: "P" },
    ],
  },
  {
    id: 28,
    text: "Do you feel better about",
    answers: [
      { id: "a", text: "having purchased", type: "J" },
      { id: "b", text: "having the option to buy", type: "P" },
    ],
  },
  {
    id: 29,
    text: "In company do you",
    answers: [
      { id: "a", text: "initiate conversation", type: "E" },
      { id: "b", text: "wait to be approached", type: "I" },
    ],
  },
  {
    id: 30,
    text: "Common sense is",
    answers: [
      { id: "a", text: "rarely questionable", type: "S" },
      { id: "b", text: "frequently questionable", type: "N" },
    ],
  },
  {
    id: 31,
    text: "Children often do not",
    answers: [
      { id: "a", text: "make themselves useful enough", type: "S" },
      { id: "b", text: "exercise their fantasy enough", type: "N" },
    ],
  },
  {
    id: 32,
    text: "In making decisions, do you feel more comfortable with",
    answers: [
      { id: "a", text: "standards", type: "T" },
      { id: "b", text: "feelings", type: "F" },
    ],
  },
  {
    id: 33,
    text: "Are you more",
    answers: [
      { id: "a", text: "firm than gentle", type: "T" },
      { id: "b", text: "gentle than firm", type: "F" },
    ],
  },
  {
    id: 34,
    text: "Which is more admirable:",
    answers: [
      { id: "a", text: "the ability to organize and be methodical", type: "J" },
      { id: "b", text: "the ability to adapt and make do", type: "P" },
    ],
  },
  {
    id: 35,
    text: "Do you put more value on the",
    answers: [
      { id: "a", text: "definite", type: "J" },
      { id: "b", text: "open-ended", type: "P" },
    ],
  },
  {
    id: 36,
    text: "Does new and non-routine interaction with others",
    answers: [
      { id: "a", text: "stimulate and energize you", type: "E" },
      { id: "b", text: "tax your reserves", type: "I" },
    ],
  },
  {
    id: 37,
    text: "Are you more frequently",
    answers: [
      { id: "a", text: "a practical sort of person", type: "S" },
      { id: "b", text: "a fanciful sort of person", type: "N" },
    ],
  },
  {
    id: 38,
    text: "Are you more likely to",
    answers: [
      { id: "a", text: "see how others are useful", type: "S" },
      { id: "b", text: "see how others see", type: "N" },
    ],
  },
  {
    id: 39,
    text: "Which is more satisfying:",
    answers: [
      { id: "a", text: "to discuss an issue thoroughly", type: "T" },
      { id: "b", text: "to arrive at agreement on an issue", type: "F" },
    ],
  },
  {
    id: 40,
    text: "Which rules you more:",
    answers: [
      { id: "a", text: "your head", type: "T" },
      { id: "b", text: "your heart", type: "F" },
    ],
  },
  {
    id: 41,
    text: "Are you more comfortable with work that is",
    answers: [
      { id: "a", text: "contracted", type: "J" },
      { id: "b", text: "done on a casual basis", type: "P" },
    ],
  },
  {
    id: 42,
    text: "Do you tend to look for",
    answers: [
      { id: "a", text: "the orderly", type: "J" },
      { id: "b", text: "whatever turns up", type: "P" },
    ],
  },
  {
    id: 43,
    text: "Do you prefer",
    answers: [
      { id: "a", text: "many friends with brief contact", type: "E" },
      { id: "b", text: "a few friends with more lengthy contact", type: "I" },
    ],
  },
  {
    id: 44,
    text: "Do you go more by",
    answers: [
      { id: "a", text: "facts", type: "S" },
      { id: "b", text: "principles", type: "N" },
    ],
  },
  {
    id: 45,
    text: "Are you more interested in",
    answers: [
      { id: "a", text: "production and distribution", type: "S" },
      { id: "b", text: "design and research", type: "N" },
    ],
  },
  {
    id: 46,
    text: "Which is more of a compliment:",
    answers: [
      { id: "a", text: "\"There is a very logical person\"", type: "T" },
      { id: "b", text: "\"There is a very sentimental person\"", type: "F" },
    ],
  },
  {
    id: 47,
    text: "Do you value in yourself more that you are",
    answers: [
      { id: "a", text: "unwavering", type: "T" },
      { id: "b", text: "devoted", type: "F" },
    ],
  },
  {
    id: 48,
    text: "Do you more often prefer the",
    answers: [
      { id: "a", text: "final and unalterable statement", type: "J" },
      { id: "b", text: "tentative and preliminary statement", type: "P" },
    ],
  },
  {
    id: 49,
    text: "Are you more comfortable",
    answers: [
      { id: "a", text: "after a decision", type: "J" },
      { id: "b", text: "before a decision", type: "P" },
    ],
  },
  {
    id: 50,
    text: "Do you",
    answers: [
      { id: "a", text: "speak easily and at length with strangers", type: "E" },
      { id: "b", text: "find little to say to strangers", type: "I" },
    ],
  },
  {
    id: 51,
    text: "Are you more likely to trust your",
    answers: [
      { id: "a", text: "experience", type: "S" },
      { id: "b", text: "hunch", type: "N" },
    ],
  },
  {
    id: 52,
    text: "Do you feel",
    answers: [
      { id: "a", text: "more practical than ingenious", type: "S" },
      { id: "b", text: "more ingenious than practical", type: "N" },
    ],
  },
  {
    id: 53,
    text: "Which person is more to be complimented: one of",
    answers: [
      { id: "a", text: "clear reason", type: "T" },
      { id: "b", text: "strong feeling", type: "F" },
    ],
  },
  {
    id: 54,
    text: "Are you inclined more to be",
    answers: [
      { id: "a", text: "fair-minded", type: "T" },
      { id: "b", text: "sympathetic", type: "F" },
    ],
  },
  {
    id: 55,
    text: "Is it preferable mostly to",
    answers: [
      { id: "a", text: "make sure things are arranged", type: "J" },
      { id: "b", text: "just let things happen", type: "P" },
    ],
  },
  {
    id: 56,
    text: "In relationships, should most things be",
    answers: [
      { id: "a", text: "renegotiable", type: "J" },
      { id: "b", text: "random and circumstantial", type: "P" },
    ],
  },
  {
    id: 57,
    text: "When the phone rings, do you",
    answers: [
      { id: "a", text: "hasten to get to it first", type: "E" },
      { id: "b", text: "hope someone else will answer", type: "I" },
    ],
  },
  {
    id: 58,
    text: "Do you prize more in yourself",
    answers: [
      { id: "a", text: "a strong sense of reality", type: "S" },
      { id: "b", text: "a vivid imagination", type: "N" },
    ],
  },
  {
    id: 59,
    text: "Are you drawn more to",
    answers: [
      { id: "a", text: "fundamentals", type: "S" },
      { id: "b", text: "overtones", type: "N" },
    ],
  },
  {
    id: 60,
    text: "Which seems the greater error:",
    answers: [
      { id: "a", text: "to be too passionate", type: "T" },
      { id: "b", text: "to be too objective", type: "F" },
    ],
  },
  {
    id: 61,
    text: "Do you see yourself as basically",
    answers: [
      { id: "a", text: "hard-headed", type: "T" },
      { id: "b", text: "soft-hearted", type: "F" },
    ],
  },
  {
    id: 62,
    text: "Which situation appeals to you more:",
    answers: [
      { id: "a", text: "the structured and scheduled", type: "J" },
      { id: "b", text: "the unstructured and unscheduled", type: "P" },
    ],
  },
  {
    id: 63,
    text: "Are you a person that is more",
    answers: [
      { id: "a", text: "routinized than whimsical", type: "J" },
      { id: "b", text: "whimsical than routinized", type: "P" },
    ],
  },
  {
    id: 64,
    text: "Are you more inclined to be",
    answers: [
      { id: "a", text: "easy to approach", type: "E" },
      { id: "b", text: "somewhat reserved", type: "I" },
    ],
  },
  {
    id: 65,
    text: "In writings, do you prefer",
    answers: [
      { id: "a", text: "the more literal", type: "S" },
      { id: "b", text: "the more figurative", type: "N" },
    ],
  },
  {
    id: 66,
    text: "Is it harder for you to",
    answers: [
      { id: "a", text: "identify with others", type: "S" },
      { id: "b", text: "utilize others", type: "N" },
    ],
  },
  {
    id: 67,
    text: "Which do you wish more for yourself:",
    answers: [
      { id: "a", text: "clarity of reason", type: "T" },
      { id: "b", text: "strength of compassion", type: "F" },
    ],
  },
  {
    id: 68,
    text: "Which is the greater fault:",
    answers: [
      { id: "a", text: "being indiscriminate", type: "T" },
      { id: "b", text: "being critical", type: "F" },
    ],
  },
  {
    id: 69,
    text: "Do you prefer the",
    answers: [
      { id: "a", text: "planned event", type: "J" },
      { id: "b", text: "unplanned event", type: "P" },
    ],
  },
  {
    id: 70,
    text: "Do you tend to be more",
    answers: [
      { id: "a", text: "deliberate than spontaneous", type: "J" },
      { id: "b", text: "spontaneous than deliberate", type: "P" },
    ],
  },
];

export default questions;