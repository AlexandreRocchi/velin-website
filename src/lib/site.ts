/** Constantes du site et lien relatif à la base de publication (GitHub Pages). */
export const SITE = {
  name: "Vélin",
  tagline: "La PSSI vivante, reliée à vos risques",
  description:
    "Vélin, application libre et auto-hébergée pour rédiger, valider et faire vivre la politique de sécurité des systèmes d'information (PSSI), en équipe, reliée aux risques analysés dans Beffroi.",
  /** Profil GitHub de l'auteur ; le dépôt du code de Vélin sera publié ici. */
  github: "https://github.com/AlexandreRocchi",
  beffroi: "https://alexandrerocchi.github.io/beffroi-website/",
  beffroiGithub: "https://github.com/AlexandreRocchi/beffroi",
  status: "En conception",
};

export function url(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
