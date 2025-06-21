import type { Content } from "./types";

export const SPOTIFY_EMBED_URL =
  import.meta.env.PUBLIC_SPOTIFY_EMBED_URL ||
  "https://open.spotify.com/embed/track/3Zs6OEJmiSzn4Cwspokmrx?utm_source=generator&theme=0";

export const FOOTER_TEXT_1 = "© 2025 MAAZ ISMAIL.";
export const FOOTER_TEXT_2 = "About this website?";
export const FOOTER_TEXT_3 = "MAAZ IS ONLINE. THANKS FOR COMING.";

export const content: Content = {
  name1: "MAAZ",
  name2: "ISMAIL",
  subtitle: "Germany, 24 y/o",
  currentWorks: {
    title: "At The Moment",
    items: [
      "journalist at Impakter",
      "postgraduate in Philosophy and Computer Science",
      "literary project on recent South Asian history",
      "(archival research x narrative fiction)",
    ],
  },
  links: {
    samples: {
      url: "https://www.dropbox.com/scl/fo/tph0xutoxkfxk4vpj3aou/ADAsyW8HFeN6UHCLSNSUssQ?rlkey=eyjwflfzt4s3qcnqe5bp0vdec&st=052edpyt&dl=0",
      text: "WRITING SAMPLES",
      iconClass: "ph-bold ph-file",
    },
    resume: {
      url: "https://www.dropbox.com/scl/fo/q6qfg2hq4xa4q7criqqy6/AAKfK8V5pS6djxm0kVS2oMk?rlkey=ov0h7myaga966e9exawnt2cp7&dl=0",
      text: "RESUME / CV",
      iconClass: "ph-bold ph-folder",
    },
  },
  contactItems: {
    email: {
      url: "mailto:ismail@moazz.co",
      text: "ismail@moazz.co",
      iconClass: "ph-bold ph-envelope-simple mr-1",
    },
    linkedin: {
      url: "https://www.linkedin.com/in/maazis/",
      text: "linkedin.com/in/maazis",
      iconClass: "ph-bold ph-linkedin-logo mr-1",
    },
    github: {
      url: "https://www.github.com/maazis",
      text: "github.com/maazis",
      iconClass: "ph-bold ph-github-logo mr-1",
    },
  },
  roles: {
    writer: {
      title: "writer",
      items: [
        "journalism",
        "creative non-fiction",
        "fiction (literary, genre)",
        "theatre playwright/director",
      ],
    },
    engineer: {
      title: "backend engineer",
      items: [
        "Y Combinator startup in the restaurant industry",
        "international clientele (details on request)",
      ],
    },
  },
  interestItems: {
    title: "interested in",
    items: [
      "narrative design",
      "news media & editorial",
      "the esports industry (incl. Dota 2)",
      "culture (incl. Music, fashion)",
      "literature",
    ],
  },
};
