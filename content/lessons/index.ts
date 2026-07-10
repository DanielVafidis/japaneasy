import type { Lesson } from "../types";

import { recapBasicGrammar } from "./recap-basic-grammar";
import { recapEssentialGrammar } from "./recap-essential-grammar";
import { recapSpecialExpressions } from "./recap-special-expressions";
import { recapAdvancedTopics } from "./recap-advanced-topics";

import { introduction } from "./introduction";
import { hiragana } from "./hiragana";
import { katakana } from "./katakana";
import { kanjiIntro } from "./kanji-intro";

import { stateOfBeing } from "./state-of-being";
import { particlesIntro } from "./particles-intro";
import { adjectives } from "./adjectives";
import { verbBasics } from "./verb-basics";
import { negativeVerbs } from "./negative-verbs";
import { pastTense } from "./past-tense";
import { verbParticles } from "./verb-particles";
import { transitivity } from "./transitivity";
import { relativeClauses } from "./relative-clauses";
import { nounParticles } from "./noun-particles";
import { adverbsParticles } from "./adverbs-particles";

import { politeForm } from "./polite-form";
import { verbStems } from "./verb-stems";
import { addressingPeople } from "./addressing-people";
import { questionsPolite } from "./questions-polite";
import { compoundSentences } from "./compound-sentences";
import { teForm } from "./te-form";
import { teFormUses } from "./te-form-uses";
import { potentialForm } from "./potential-form";
import { naruSuru } from "./naru-suru";
import { conditionals } from "./conditionals";
import { obligation } from "./obligation";
import { desireSuggestions } from "./desire-suggestions";
import { definingAndTrying } from "./defining-and-trying";
import { quotedSpeech } from "./quoted-speech";
import { givingReceiving } from "./giving-receiving";
import { makingRequests } from "./making-requests";
import { numbersCounting } from "./numbers-counting";
import { casualPatterns } from "./casual-patterns";

import { causativePassive } from "./causative-passive";
import { honorificHumble } from "./honorific-humble";
import { teShimau } from "./te-shimau";
import { genericNouns } from "./generic-nouns";
import { certainty } from "./certainty";
import { expressingAmounts } from "./expressing-amounts";
import { similarityHearsay } from "./similarity-hearsay";
import { comparisons } from "./comparisons";
import { easeDifficulty } from "./ease-difficulty";
import { hypothesizing } from "./hypothesizing";
import { timeSpecificActions } from "./time-specific-actions";
import { timeAndMama } from "./time-and-mama";

import { formalDearu } from "./formal-dearu";
import { hazuBeki } from "./hazu-beki";
import { deSaeDesura } from "./de-sae-desura";
import { showingSigns } from "./showing-signs";
import { zaruWoEnai } from "./zaru-wo-enai";
import { tendencies } from "./tendencies";
import { advancedVolitional } from "./advanced-volitional";
import { coveredEvents } from "./covered-events";
import { coveredBy } from "./covered-by";

export const allLessons: Lesson[] = [
  introduction,
  hiragana,
  katakana,
  kanjiIntro,
  stateOfBeing,
  particlesIntro,
  adjectives,
  verbBasics,
  negativeVerbs,
  pastTense,
  verbParticles,
  transitivity,
  relativeClauses,
  nounParticles,
  adverbsParticles,
  verbStems,
  politeForm,
  addressingPeople,
  questionsPolite,
  compoundSentences,
  teForm,
  teFormUses,
  potentialForm,
  naruSuru,
  conditionals,
  obligation,
  desireSuggestions,
  definingAndTrying,
  quotedSpeech,
  givingReceiving,
  makingRequests,
  numbersCounting,
  casualPatterns,
  causativePassive,
  honorificHumble,
  teShimau,
  genericNouns,
  certainty,
  expressingAmounts,
  similarityHearsay,
  comparisons,
  easeDifficulty,
  hypothesizing,
  timeSpecificActions,
  timeAndMama,
  formalDearu,
  hazuBeki,
  deSaeDesura,
  showingSigns,
  zaruWoEnai,
  tendencies,
  advancedVolitional,
  coveredEvents,
  coveredBy,

  recapBasicGrammar,
  recapEssentialGrammar,
  recapSpecialExpressions,
  recapAdvancedTopics,
];

export const lessonsById: Record<string, Lesson> = Object.fromEntries(
  allLessons.map((l) => [l.id, l]),
);
