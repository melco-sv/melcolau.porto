/* ------------------------------------------------------------------ */
/*  Single source of truth for all portfolio content (EN + ID).        */
/*  Edit text here — components read from it via the language context.  */
/* ------------------------------------------------------------------ */

export type Lang = "en" | "id";

export interface Localized {
  en: string;
  id: string;
}

/* --- Personal / contact -------------------------------------------- */
export const profile = {
  name: "Melco Lauwento",
  email: "melco05lauwento.1@gmail.com",
  github: "https://github.com/melco-sv",
  githubHandle: "melco-sv",
  linkedin: "https://www.linkedin.com/in/melco-lauwento-7a9668311",
  linkedinHandle: "melco-lauwento",
  university: "Universitas Komputer Indonesia",
  location: { en: "Bandung, Indonesia", id: "Bandung, Indonesia" } as Localized,
};

/* --- Hero ----------------------------------------------------------- */
export const hero = {
  kicker: {
    en: "Full-Stack Developer & Data Analyst",
    id: "Web Developer Full-Stack & Data Analyst",
  } as Localized,
  // Rotating words shown after "I build / Saya membangun"
  rotating: {
    en: ["web apps.", "dashboards.", "data stories.", "POS systems."],
    id: ["aplikasi web.", "dashboard.", "cerita data.", "sistem POS."],
  },
  headlineLead: { en: "I build", id: "Saya membangun" } as Localized,
  tagline: {
    en: "Final-year Information Systems student who builds reliable web applications and turns data into decisions.",
    id: "Mahasiswa tingkat akhir Sistem Informasi yang membangun aplikasi web yang andal dan mengubah data menjadi keputusan.",
  } as Localized,
};

/* --- About ---------------------------------------------------------- */
export const about = {
  paragraphs: {
    en: [
      "I'm a final-year Information Systems student at Universitas Komputer Indonesia who builds web applications and turns data into decisions. My work connects two things companies often keep apart: developing the systems that capture data, and analyzing that data to make it useful.",
      "I build full-stack web applications with Laravel, Vue.js, and Inertia.js, and design the databases behind them using DBeaver. On the analytics side, I use SQL, Excel, and Tableau to clean, query, and visualize data so teams can act on it with confidence.",
      "During my internship at PT Sucofindo, I helped develop the company's website and designed its database — shaping how the system stores and organizes its data. It showed me how software is actually used inside an organization, not just how it's written.",
    ],
    id: [
      "Saya mahasiswa tingkat akhir Sistem Informasi di Universitas Komputer Indonesia yang membangun aplikasi web dan mengubah data menjadi keputusan. Pekerjaan saya menghubungkan dua hal yang sering dipisahkan perusahaan: mengembangkan sistem yang menangkap data, dan menganalisis data tersebut agar berguna.",
      "Saya membangun aplikasi web full-stack dengan Laravel, Vue.js, dan Inertia.js, serta merancang basis data di baliknya menggunakan DBeaver. Di sisi analitik, saya menggunakan SQL, Excel, dan Tableau untuk membersihkan, mengkueri, dan memvisualisasikan data agar tim dapat bertindak dengan percaya diri.",
      "Selama magang di PT Sucofindo, saya membantu mengembangkan website perusahaan dan merancang basis datanya — membentuk cara sistem menyimpan dan mengelola data. Pengalaman ini menunjukkan bagaimana perangkat lunak benar-benar digunakan di dalam organisasi, bukan sekadar bagaimana ia ditulis.",
    ],
  },
};

/* --- Stats ---------------------------------------------------------- */
export interface Stat {
  value: string;
  label: Localized;
}
export const stats: Stat[] = [
  { value: "4+", label: { en: "Projects shipped", id: "Proyek selesai" } },
  { value: "2nd", label: { en: "Place · Bitlabs pitch", id: "Juara · pitch Bitlabs" } },
  { value: "93.11", label: { en: "Bootcamp score", id: "Nilai bootcamp" } },
  { value: "1", label: { en: "Industry internship", id: "Magang industri" } },
];

/* --- Skills --------------------------------------------------------- */
export interface SkillGroup {
  title: Localized;
  items: string[];
}
export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Backend & Web", id: "Backend & Web" },
    items: ["Laravel", "PHP", "Inertia.js", "REST APIs"],
  },
  {
    title: { en: "Frontend", id: "Frontend" },
    items: ["Vue.js", "JavaScript", "Blade", "Tailwind CSS"],
  },
  {
    title: { en: "Data & Databases", id: "Data & Basis Data" },
    items: ["MySQL", "SQL", "Python", "Tableau", "Excel"],
  },
  {
    title: { en: "Tools", id: "Tools" },
    items: ["DBeaver", "Git", "Google Colab"],
  },
];

// Flat list for the scrolling marquee
export const marqueeSkills = [
  "Laravel",
  "Vue.js",
  "Inertia.js",
  "MySQL",
  "Python",
  "Tableau",
  "SQL",
  "Excel",
  "DBeaver",
  "PHP",
  "Git",
  "Tailwind CSS",
];

/* --- Projects ------------------------------------------------------- */
export interface ProjectLink {
  label: string;
  href: string;
  kind: "github" | "tableau" | "colab" | "external";
}
export interface Project {
  id: string;
  index: string;
  title: string;
  type: Localized;
  badge?: Localized;
  summary: Localized;
  contribution: Localized;
  tags: string[];
  images: { src: string; alt: string }[];
  links: ProjectLink[];
  accent: "violet" | "fuchsia" | "cyan" | "lime";
}

export const projects: Project[] = [
  {
    id: "sucofindo",
    index: "01",
    title: "Real-Time Commodity Dashboard",
    type: {
      en: "Full-stack web app · Internship @ PT Sucofindo",
      id: "Aplikasi web full-stack · Magang @ PT Sucofindo",
    },
    summary: {
      en: "A monitoring and analytics dashboard for tracking commodity intake (rice & dry grain) and quality across multiple branches. It records intake volumes, monitors quality indicators like water content and broken-grain ratios, and ranks branch performance in one centralized view.",
      id: "Dashboard pemantauan & analitik untuk melacak pemasukan komoditas (gabah & beras) dan kualitasnya di berbagai cabang. Sistem mencatat volume pemasukan, memantau indikator kualitas seperti kadar air dan butir patah, serta memeringkat performa cabang dalam satu tampilan terpusat.",
    },
    contribution: {
      en: "Designed and built end-to-end: the MySQL schema, the Laravel backend, and the Blade frontend — including the analytics & branch-ranking module.",
      id: "Dirancang & dibangun end-to-end: skema MySQL, backend Laravel, dan frontend Blade — termasuk modul analitik & peringkat cabang.",
    },
    tags: ["Laravel", "Blade", "MySQL"],
    images: [
      { src: "/images/projects/sucofindo-1.jpg", alt: "Sucofindo dashboard — quality KPIs and grain metrics" },
      { src: "/images/projects/sucofindo-2.jpg", alt: "Sucofindo dashboard — totals and monthly intake chart" },
      { src: "/images/projects/sucofindo-3.jpg", alt: "Sucofindo advanced analytics and branch ranking table" },
      { src: "/images/projects/sucofindo-4.jpg", alt: "Sucofindo monitoring system login screen" },
    ],
    links: [
      { label: "Source", href: "https://github.com/melco-sv/dashboard_realtime", kind: "github" },
    ],
    accent: "cyan",
  },
  {
    id: "workshop-pos",
    index: "02",
    title: "Workshop POS & Cash-Flow System",
    type: {
      en: "Full-stack web app · Personal project",
      id: "Aplikasi web full-stack · Proyek pribadi",
    },
    summary: {
      en: "A point-of-sale and bookkeeping system for an automotive workshop, handling the entire sales-to-reporting cycle in one place: product & service sales, inventory with low-stock alerts, purchasing, customers & suppliers, and financial reporting including profit/loss and daily cash flow.",
      id: "Sistem point-of-sale dan pembukuan untuk bengkel otomotif, menangani seluruh siklus penjualan hingga pelaporan dalam satu tempat: penjualan produk & jasa, inventori dengan peringatan stok menipis, pembelian, pelanggan & pemasok, serta laporan keuangan termasuk laba/rugi dan arus kas harian.",
    },
    contribution: {
      en: "Built the whole application end-to-end with Laravel, Vue.js & Inertia.js on a MySQL database — from the data model and business logic to the dashboards and reports.",
      id: "Membangun seluruh aplikasi end-to-end dengan Laravel, Vue.js & Inertia.js di atas basis data MySQL — dari model data dan logika bisnis hingga dashboard dan laporan.",
    },
    tags: ["Laravel", "Vue.js", "Inertia.js", "MySQL"],
    images: [
      { src: "/images/projects/scm-1.jpg", alt: "Workshop POS dashboard with revenue and profit cards" },
      { src: "/images/projects/scm-2.jpg", alt: "Point of sale screen with barcode scan and product list" },
      { src: "/images/projects/scm-3.jpg", alt: "Product inventory table with stock and status" },
      { src: "/images/projects/scm-4.jpg", alt: "Workshop POS reporting view" },
    ],
    links: [
      { label: "Source", href: "https://github.com/melco-sv/kasir-bengkel-SCM", kind: "github" },
    ],
    accent: "violet",
  },
  {
    id: "sekar-rental",
    index: "03",
    title: "Sekar Car Rental Platform",
    type: {
      en: "Full-stack web app · Personal project",
      id: "Aplikasi web full-stack · Proyek pribadi",
    },
    summary: {
      en: "A car-rental web platform where customers browse available vehicles, view specs and pricing, book by date, and extend active rentals. It handles vehicle catalog management, date-based availability, bookings, and rental extensions through customer accounts.",
      id: "Platform web rental mobil di mana pelanggan dapat menelusuri kendaraan yang tersedia, melihat spesifikasi & harga, memesan berdasarkan tanggal, dan memperpanjang sewa aktif. Mengelola katalog kendaraan, ketersediaan berbasis tanggal, pemesanan, serta perpanjangan sewa melalui akun pelanggan.",
    },
    contribution: {
      en: "Designed and built the application with Laravel and a MySQL database, covering catalog, availability and the booking lifecycle.",
      id: "Merancang & membangun aplikasi dengan Laravel dan basis data MySQL, mencakup katalog, ketersediaan, dan siklus pemesanan.",
    },
    tags: ["Laravel", "MySQL", "Blade"],
    images: [
      { src: "/images/projects/rental-1.png", alt: "Sekar car rental landing page" },
      { src: "/images/projects/rental-2.png", alt: "Sekar car rental — vehicle browsing view" },
    ],
    links: [
      { label: "Source", href: "https://github.com/melco-sv/rental-sekar", kind: "github" },
    ],
    accent: "fuchsia",
  },
  {
    id: "doku-analytics",
    index: "04",
    title: "DOKU Transaction Analytics",
    type: {
      en: "Data analytics · DOKU × Bitlabs",
      id: "Analitik data · DOKU × Bitlabs",
    },
    badge: { en: "🏆 2nd place", id: "🏆 Juara 2" },
    summary: {
      en: "A project-based learning program at Bitlabs with DOKU as the industry partner. I processed and analyzed transaction data with Python (Google Colab) and built an interactive Tableau dashboard to present the findings on promo performance and customer behaviour.",
      id: "Program pembelajaran berbasis proyek di Bitlabs dengan DOKU sebagai mitra industri. Saya memproses dan menganalisis data transaksi dengan Python (Google Colab) dan membangun dashboard Tableau interaktif untuk menyajikan temuan tentang performa promo dan perilaku pelanggan.",
    },
    contribution: {
      en: "Placed 2nd in the program's final pitch. Tools: Python (Google Colab), Tableau, SQL, Excel.",
      id: "Meraih juara 2 pada pitch final program. Tools: Python (Google Colab), Tableau, SQL, Excel.",
    },
    tags: ["Python", "Tableau", "SQL", "Excel"],
    images: [
      { src: "/images/projects/analytics-1.png", alt: "Tableau dashboard for DOKU campaign analytics" },
      { src: "/images/projects/analytics-2.png", alt: "Python data analysis in Google Colab with bar chart" },
      { src: "/images/projects/certificate.png", alt: "Certificate of completion — score 93.11" },
    ],
    links: [
      { label: "Tableau dashboard", href: "https://public.tableau.com/app/profile/melco.lauwento/viz/DashboardDokuPBL/Dashboard1", kind: "tableau" },
      { label: "Colab — analysis", href: "https://colab.research.google.com/drive/1tBLJ2UvK1OGCjxY-RkStpbvLFUVBMLMi?usp=sharing", kind: "colab" },
      { label: "Colab — modeling", href: "https://colab.research.google.com/drive/1b4FPjAIdjdThkjnWhmhFg4J5rw6ZkOVZ?usp=sharing", kind: "colab" },
    ],
    accent: "lime",
  },
];

/* --- Achievements / timeline --------------------------------------- */
export interface Achievement {
  year: string;
  title: Localized;
  org: Localized;
  detail: Localized;
  icon: "trophy" | "certificate" | "briefcase" | "cap";
}
export const achievements: Achievement[] = [
  {
    year: "2024",
    title: { en: "2nd Place — Final Pitch", id: "Juara 2 — Pitch Final" },
    org: { en: "Bitlabs × DOKU Partner Program", id: "Program Mitra Bitlabs × DOKU" },
    detail: {
      en: "Out of all teams in the partner pitching program for the data-analytics track.",
      id: "Dari seluruh tim dalam program pitching mitra untuk jalur analitik data.",
    },
    icon: "trophy",
  },
  {
    year: "2024",
    title: { en: "Data Analytics for Business", id: "Data Analytics for Business" },
    org: { en: "MSIB Kampus Merdeka · Bitlabs Academy", id: "MSIB Kampus Merdeka · Bitlabs Academy" },
    detail: {
      en: "Completed the intensive Batch 7 program with a final score of 93.11.",
      id: "Menyelesaikan program intensif Batch 7 dengan nilai akhir 93,11.",
    },
    icon: "certificate",
  },
  {
    year: "2025",
    title: { en: "Web Developer Intern", id: "Magang Web Developer" },
    org: { en: "PT Sucofindo (Persero)", id: "PT Sucofindo (Persero)" },
    detail: {
      en: "Helped develop the company website and designed its database schema.",
      id: "Membantu mengembangkan website perusahaan dan merancang skema basis datanya.",
    },
    icon: "briefcase",
  },
  {
    year: "now",
    title: { en: "Information Systems", id: "Sistem Informasi" },
    org: { en: "Universitas Komputer Indonesia", id: "Universitas Komputer Indonesia" },
    detail: {
      en: "Final-year student — open to new roles and challenges.",
      id: "Mahasiswa tingkat akhir — terbuka untuk peran & tantangan baru.",
    },
    icon: "cap",
  },
];

/* --- UI strings (nav, section headers, buttons) -------------------- */
export interface Dictionary {
  nav: { about: string; skills: string; work: string; contact: string };
  nav_resume: string;
  hero_cta_work: string;
  hero_cta_contact: string;
  hero_scroll: string;
  section_about_kicker: string;
  section_about_title: string;
  section_skills_kicker: string;
  section_skills_title: string;
  section_work_kicker: string;
  section_work_title: string;
  section_journey_kicker: string;
  section_journey_title: string;
  section_contact_kicker: string;
  section_contact_title: string;
  contact_lead: string;
  contact_email: string;
  email_copied: string;
  project_view: string;
  footer_built: string;
  footer_rights: string;
  available: string;
}

export const ui: Record<Lang, Dictionary> = {
  en: {
    nav: { about: "About", skills: "Skills", work: "Work", contact: "Contact" },
    nav_resume: "Let's talk",
    hero_cta_work: "View my work",
    hero_cta_contact: "Get in touch",
    hero_scroll: "Scroll to explore",
    section_about_kicker: "About me",
    section_about_title: "Bridging software and data.",
    section_skills_kicker: "Toolkit",
    section_skills_title: "What I build with.",
    section_work_kicker: "Selected work",
    section_work_title: "Projects I've shipped.",
    section_journey_kicker: "Milestones",
    section_journey_title: "A short journey.",
    section_contact_kicker: "Contact",
    section_contact_title: "Let's build something.",
    contact_lead: "I'm looking for a role where I can build reliable web applications and put data to work. Open to feedback and new challenges.",
    contact_email: "Email me",
    email_copied: "Copied to clipboard!",
    project_view: "Visit",
    footer_built: "Designed & built with Next.js, Framer Motion & Tailwind.",
    footer_rights: "All rights reserved.",
    available: "Available for work",
  },
  id: {
    nav: { about: "Tentang", skills: "Keahlian", work: "Karya", contact: "Kontak" },
    nav_resume: "Hubungi saya",
    hero_cta_work: "Lihat karya saya",
    hero_cta_contact: "Hubungi saya",
    hero_scroll: "Gulir untuk menjelajah",
    section_about_kicker: "Tentang saya",
    section_about_title: "Menjembatani software dan data.",
    section_skills_kicker: "Toolkit",
    section_skills_title: "Teknologi yang saya gunakan.",
    section_work_kicker: "Karya pilihan",
    section_work_title: "Proyek yang telah saya buat.",
    section_journey_kicker: "Pencapaian",
    section_journey_title: "Perjalanan singkat.",
    section_contact_kicker: "Kontak",
    section_contact_title: "Mari bangun sesuatu.",
    contact_lead: "Saya sedang mencari peran untuk membangun aplikasi web yang andal dan memanfaatkan data. Terbuka untuk masukan dan tantangan baru.",
    contact_email: "Kirim email",
    email_copied: "Tersalin ke clipboard!",
    project_view: "Kunjungi",
    footer_built: "Didesain & dibangun dengan Next.js, Framer Motion & Tailwind.",
    footer_rights: "Hak cipta dilindungi.",
    available: "Tersedia untuk bekerja",
  },
};
