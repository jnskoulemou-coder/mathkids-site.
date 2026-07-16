export type Video = {
  title: string;
  youtubeId: string;
  channel: string;
};

// Videos verifiees, existantes sur YouTube (juillet 2026) - on ne fabrique
// jamais de contenu video, on relie vers de vraies ressources.
export const CALCUL_RAPIDE_VIDEOS: Video[] = [
  {
    title: "Petit truc de calcul mental",
    youtubeId: "obmESuCAgZk",
    channel: "Maths et Tiques",
  },
  {
    title: "Les techniques de calcul (ultra) rapide",
    youtubeId: "aQKJJV7COeA",
    channel: "YouTube",
  },
  {
    title: "Apprendre le calcul mental en 3 minutes",
    youtubeId: "0H5RSHWFgig",
    channel: "YouTube",
  },
  {
    title: "Calcul mental : réussir les additions en ligne au CE1",
    youtubeId: "i2Zwv6vlG0U",
    channel: "YouTube",
  },
];
