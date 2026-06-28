import type { Lesson } from "../types";

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
import { questionsPolite } from "./questions-polite";
import { teForm } from "./te-form";
import { potentialForm } from "./potential-form";
import { conditionals } from "./conditionals";
import { obligation } from "./obligation";
import { desireSuggestions } from "./desire-suggestions";
import { givingReceiving } from "./giving-receiving";

import { causativePassive } from "./causative-passive";
import { honorificHumble } from "./honorific-humble";
import { teShimau } from "./te-shimau";
import { certainty } from "./certainty";
import { similarityHearsay } from "./similarity-hearsay";
import { easeDifficulty } from "./ease-difficulty";

import { formalDearu } from "./formal-dearu";
import { hazuBeki } from "./hazu-beki";
import { deSaeDesura } from "./de-sae-desura";
import { zaruWoEnai } from "./zaru-wo-enai";
import { tendencies } from "./tendencies";
import { advancedVolitional } from "./advanced-volitional";

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
  politeForm,
  questionsPolite,
  teForm,
  potentialForm,
  conditionals,
  obligation,
  desireSuggestions,
  givingReceiving,
  causativePassive,
  honorificHumble,
  teShimau,
  certainty,
  similarityHearsay,
  easeDifficulty,
  formalDearu,
  hazuBeki,
  deSaeDesura,
  zaruWoEnai,
  tendencies,
  advancedVolitional,
];

export const lessonsById: Record<string, Lesson> = Object.fromEntries(
  allLessons.map((l) => [l.id, l]),
);
