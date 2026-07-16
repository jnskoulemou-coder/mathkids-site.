export type Cycle = "primaire" | "college" | "lycee";

export type Level = {
  id: string;
  label: string;
  cycle: Cycle;
};

export const LEVELS: Level[] = [
  { id: "cp", label: "CP", cycle: "primaire" },
  { id: "ce1", label: "CE1", cycle: "primaire" },
  { id: "ce2", label: "CE2", cycle: "primaire" },
  { id: "cm1", label: "CM1", cycle: "primaire" },
  { id: "cm2", label: "CM2", cycle: "primaire" },
  { id: "6e", label: "6e", cycle: "college" },
  { id: "5e", label: "5e", cycle: "college" },
  { id: "4e", label: "4e", cycle: "college" },
  { id: "3e", label: "3e", cycle: "college" },
  { id: "2nde", label: "2nde", cycle: "lycee" },
  { id: "1ere", label: "1ère", cycle: "lycee" },
  { id: "terminale", label: "Terminale (BAC)", cycle: "lycee" },
];

export const CYCLE_LABELS: Record<Cycle, string> = {
  primaire: "Primaire",
  college: "Collège",
  lycee: "Lycée",
};

export type Subject = {
  id: string;
  label: string;
  emoji: string;
  // true = quiz interactif (MathGame), false = passe par l'outil de correction IA
  interactive: boolean;
};

const METHODE_CALCUL: Subject = {
  id: "methode-calcul",
  label: "Méthode de calcul",
  emoji: "🧮",
  interactive: true,
};

const AI_SUBJECTS: Subject[] = [
  { id: "maths", label: "Maths", emoji: "➗", interactive: false },
  { id: "physique-chimie", label: "Physique-Chimie", emoji: "⚗️", interactive: false },
  { id: "svt", label: "SVT", emoji: "🧬", interactive: false },
  { id: "francais", label: "Français", emoji: "📖", interactive: false },
  { id: "histoire-geo", label: "Histoire-Géographie", emoji: "🌍", interactive: false },
];

const PHILOSOPHIE: Subject = { id: "philosophie", label: "Philosophie", emoji: "💭", interactive: false };

const PRIMAIRE_AI_SUBJECTS: Subject[] = [
  { id: "francais", label: "Français", emoji: "📖", interactive: false },
  { id: "eveil", label: "Éveil & Sciences", emoji: "🔎", interactive: false },
];

export const SUBJECTS_BY_CYCLE: Record<Cycle, Subject[]> = {
  primaire: [METHODE_CALCUL, ...PRIMAIRE_AI_SUBJECTS],
  college: [METHODE_CALCUL, ...AI_SUBJECTS],
  lycee: [METHODE_CALCUL, ...AI_SUBJECTS, PHILOSOPHIE],
};

// Amplitude des nombres pour le quiz "Méthode de calcul", selon le niveau.
export const CALCUL_RANGE_BY_LEVEL: Record<string, { maxNum: number; operations: ("+" | "-" | "×" | "÷")[] }> = {
  cp: { maxNum: 10, operations: ["+", "-"] },
  ce1: { maxNum: 100, operations: ["+", "-", "×"] },
  ce2: { maxNum: 1000, operations: ["+", "-", "×"] },
  cm1: { maxNum: 10000, operations: ["+", "-", "×", "÷"] },
  cm2: { maxNum: 100000, operations: ["+", "-", "×", "÷"] },
  "6e": { maxNum: 100000, operations: ["+", "-", "×", "÷"] },
  "5e": { maxNum: 100000, operations: ["+", "-", "×", "÷"] },
  "4e": { maxNum: 1000000, operations: ["+", "-", "×", "÷"] },
  "3e": { maxNum: 1000000, operations: ["+", "-", "×", "÷"] },
  "2nde": { maxNum: 1000000, operations: ["+", "-", "×", "÷"] },
  "1ere": { maxNum: 1000000, operations: ["+", "-", "×", "÷"] },
  terminale: { maxNum: 1000000, operations: ["+", "-", "×", "÷"] },
};

export function getLevel(id: string): Level | undefined {
  return LEVELS.find((l) => l.id === id);
}

export function getSubject(cycle: Cycle, subjectId: string): Subject | undefined {
  return SUBJECTS_BY_CYCLE[cycle].find((s) => s.id === subjectId);
}
