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
  linkedin: "https://www.linkedin.com/in/melco-lauwento-7a9668311",
};

/* --- Hero ----------------------------------------------------------- */
export const hero = {
  role: {
    en: ["Full-stack developer", "& data analyst"],
    id: ["Full-stack developer", "& data analyst"],
  },
  location: {
    en: ["Bandung, Indonesia", "Available for work"],
    id: ["Bandung, Indonesia", "Tersedia untuk bekerja"],
  },
  tagline: {
    en: "I build reliable web applications and turn data into decisions.",
    id: "Saya membangun aplikasi web yang andal dan mengubah data menjadi keputusan.",
  } as Localized,
};

/* --- Work ----------------------------------------------------------- */
export interface Project {
  id: string;
  kicker: Localized;
  title: string;
  /** What was going wrong before the system existed. */
  problem: Localized;
  /** What the system does about it. */
  solution: Localized;
  stack: string;
  /** First image is the cover. Add more entries to grow the gallery. */
  images: { src: string; alt: string }[];
  href: string;
}

export const projects: Project[] = [
  {
    id: "pantau",
    kicker: {
      en: "Team leader · Sectors Hackathon 2026",
      id: "Ketua tim · Sectors Hackathon 2026",
    },
    title: "PANTAU Stock Agent",
    problem: {
      en: "Retail investors pick up tickers from Telegram groups with no easy way to tell whether an unusual price move is real, or a stock being pumped.",
      id: "Investor ritel mendapat kode saham dari grup Telegram tanpa cara mudah untuk menilai apakah pergerakan harga yang tidak wajar itu nyata, atau saham yang sedang digoreng.",
    },
    solution: {
      en: "An AI agent that investigates unusually moving IDX stocks and shows step by step how it reached its conclusion. I led the team in the AI Agents & Assistants track. A daily cron sweeps the market via the Sectors API, and the agent works under a limited data-credit budget across six checks, from broker concentration and volume anomalies to free float and foreign flow. The 0–100 score comes from deterministic code, not the LLM, and every number in the summary must be backed by evidence. An analysis tool, not investment advice.",
      id: "Agen AI yang menyelidiki saham IDX yang bergerak tidak wajar dan menunjukkan langkah demi langkah bagaimana ia sampai ke kesimpulan. Saya memimpin tim di track AI Agents & Assistants. Cron harian menyisir pasar lewat Sectors API, dan agen bekerja dengan anggaran kredit data terbatas melalui enam pemeriksaan, dari konsentrasi broker dan anomali volume hingga free float dan arus asing. Skor 0–100 dihitung oleh kode deterministik, bukan LLM, dan setiap angka di ringkasan wajib didukung bukti. Alat analisis, bukan saran investasi.",
    },
    stack: "Python, DuckDB, Sectors API, GitHub Actions, Next.js, Recharts",
    images: [
      { src: "/images/projects/pantau-1.png", alt: "PANTAU landing page with ticker search and alert scores for IDX stocks" },
      { src: "/images/projects/pantau-2.png", alt: "PANTAU investigations list with scores, alert levels, steps, and credits used" },
      { src: "/images/projects/pantau-3.png", alt: "PANTAU analysis history chart tracking a stock's score over time" },
      { src: "/images/projects/pantau-4.png", alt: "PANTAU methodology — six scoring components and their weights" },
    ],
    href: "https://github.com/hamzadlnitb/sectors2026",
  },
  {
    id: "sucofindo",
    kicker: {
      en: "Internship project · PT Sucofindo",
      id: "Proyek magang · PT Sucofindo",
    },
    title: "Real-Time Commodity Dashboard",
    problem: {
      en: "Commodity intake and quality data from multiple branches was hard to see in one place, so comparing branch performance or spotting quality issues like high water content and broken grain was slow.",
      id: "Data pemasukan dan kualitas komoditas dari banyak cabang sulit dilihat di satu tempat, sehingga membandingkan performa cabang atau menemukan masalah kualitas seperti kadar air tinggi dan butir patah berjalan lambat.",
    },
    solution: {
      en: "A centralized dashboard that records intake volumes, tracks quality indicators, and ranks branches in a single view. I designed the MySQL schema and built the Laravel and Blade application end-to-end, including the analytics and branch-ranking module.",
      id: "Dashboard terpusat yang mencatat volume pemasukan, memantau indikator kualitas, dan memeringkat cabang dalam satu tampilan. Saya merancang skema MySQL dan membangun aplikasi Laravel dan Blade dari awal hingga akhir, termasuk modul analitik dan peringkat cabang.",
    },
    stack: "Laravel, Blade, MySQL",
    images: [
      { src: "/images/projects/sucofindo-1.jpg", alt: "Sucofindo dashboard — quality KPIs and grain metrics" },
      { src: "/images/projects/sucofindo-2.jpg", alt: "Sucofindo dashboard — totals and monthly intake chart" },
      { src: "/images/projects/sucofindo-3.jpg", alt: "Sucofindo advanced analytics and branch ranking table" },
      { src: "/images/projects/sucofindo-4.jpg", alt: "Sucofindo monitoring system login screen" },
    ],
    href: "https://github.com/melco-sv/dashboard_realtime",
  },
  {
    id: "workshop-pos",
    kicker: { en: "Personal project", id: "Proyek pribadi" },
    title: "Workshop POS & Cash Flow",
    problem: {
      en: "Sales, stock, purchasing, and bookkeeping in an automotive workshop were handled as separate tasks, so low stock went unnoticed and daily cash flow and profit were hard to see.",
      id: "Penjualan, stok, pembelian, dan pembukuan di bengkel otomotif ditangani terpisah-pisah, sehingga stok menipis tidak terpantau dan arus kas harian serta laba sulit dilihat.",
    },
    solution: {
      en: "One system for the whole cycle: product and service sales, inventory with low-stock alerts, purchasing, customers and suppliers, and reports for profit and loss and daily cash flow. Built end-to-end with Laravel, Vue.js, and Inertia.js on MySQL.",
      id: "Satu sistem untuk seluruh siklus: penjualan produk dan jasa, inventori dengan peringatan stok menipis, pembelian, pelanggan dan pemasok, serta laporan laba rugi dan arus kas harian. Dibangun dari awal hingga akhir dengan Laravel, Vue.js, dan Inertia.js di atas MySQL.",
    },
    stack: "Laravel, Vue.js, Inertia.js, MySQL",
    images: [
      { src: "/images/projects/scm-1.jpg", alt: "Workshop POS dashboard with revenue and profit cards" },
      { src: "/images/projects/scm-2.jpg", alt: "Point of sale screen with barcode scan and product list" },
      { src: "/images/projects/scm-3.jpg", alt: "Product inventory table with stock and status" },
      { src: "/images/projects/scm-4.jpg", alt: "Workshop POS reporting view" },
    ],
    href: "https://github.com/melco-sv/kasir-bengkel-SCM",
  },
  {
    id: "sekar-rental",
    kicker: { en: "Personal project", id: "Proyek pribadi" },
    title: "Sekar Car Rental",
    problem: {
      en: "Renting a car meant checking availability and handling rental extensions by hand, with no clear view of which vehicles were free on which dates.",
      id: "Menyewa mobil berarti mengecek ketersediaan dan mengurus perpanjangan sewa secara manual, tanpa gambaran jelas kendaraan mana yang kosong pada tanggal berapa.",
    },
    solution: {
      en: "A booking platform with a vehicle catalog showing specs and pricing, date-based availability that shows what is free and when, customer accounts, and extensions for active rentals. Built with Laravel and MySQL.",
      id: "Platform pemesanan dengan katalog kendaraan yang menampilkan spesifikasi dan harga, ketersediaan berbasis tanggal yang menunjukkan kendaraan kosong dan kapan, akun pelanggan, serta perpanjangan untuk sewa yang sedang berjalan. Dibangun dengan Laravel dan MySQL.",
    },
    stack: "Laravel, Blade, MySQL",
    images: [
      { src: "/images/projects/rental-1.png", alt: "Sekar car rental landing page" },
      { src: "/images/projects/rental-2.png", alt: "Sekar car rental — vehicle browsing view" },
    ],
    href: "https://github.com/melco-sv/rental-sekar",
  },
  {
    id: "doku-analytics",
    kicker: {
      en: "2nd place · DOKU × Bitlabs",
      id: "Juara 2 · DOKU × Bitlabs",
    },
    title: "DOKU Transaction Analytics",
    problem: {
      en: "Raw transaction data did not yet show which promo campaigns performed well or how customers behaved.",
      id: "Data transaksi mentah belum menunjukkan kampanye promo mana yang berhasil atau bagaimana perilaku pelanggan.",
    },
    solution: {
      en: "I cleaned and analyzed the transactions in Python on Google Colab, then built an interactive Tableau dashboard that presents campaign performance and customer behavior. The project placed 2nd in the program's final pitch.",
      id: "Saya membersihkan dan menganalisis transaksi dengan Python di Google Colab, lalu membangun dashboard Tableau interaktif yang menyajikan performa kampanye dan perilaku pelanggan. Proyek ini meraih juara 2 pada pitch final program.",
    },
    stack: "Python, Tableau, SQL, Excel",
    images: [
      { src: "/images/projects/analytics-1.png", alt: "Tableau dashboard for DOKU campaign analytics" },
      { src: "/images/projects/analytics-2.png", alt: "Python data analysis in Google Colab with bar chart" },
      { src: "/images/projects/certificate.png", alt: "Certificate of completion — score 93.11" },
    ],
    href: "https://public.tableau.com/app/profile/melco.lauwento/viz/DashboardDokuPBL/Dashboard1",
  },
];

/* --- About ---------------------------------------------------------- */
export const about = {
  title: {
    en: "I connect the systems that capture data with the analysis that makes it useful.",
    id: "Saya menghubungkan sistem yang menangkap data dengan analisis yang membuatnya berguna.",
  } as Localized,
  paragraphs: {
    en: [
      "I'm an Information Systems graduate from Universitas Komputer Indonesia. My focus spans full-stack development and data analytics—two disciplines I use together to understand a problem from database to decision.",
      "During my internship at PT Sucofindo, I helped develop an internal web application and designed its database. The work taught me to prioritize clarity, maintainability, and how a system actually fits into an organization.",
    ],
    id: [
      "Saya lulusan Sistem Informasi dari Universitas Komputer Indonesia. Fokus saya mencakup pengembangan full-stack dan analitik data—dua disiplin yang saya gunakan bersamaan untuk memahami masalah dari basis data hingga keputusan.",
      "Selama magang di PT Sucofindo, saya membantu mengembangkan aplikasi web internal dan merancang basis datanya. Pekerjaan itu mengajarkan saya untuk mengutamakan kejelasan, kemudahan perawatan, dan bagaimana sebuah sistem benar-benar menyatu dengan organisasi.",
    ],
  },
};

/* --- Capabilities --------------------------------------------------- */
export const capabilities: { title: Localized; items: string }[] = [
  {
    title: { en: "Web development", id: "Pengembangan web" },
    items: "Laravel / PHP / Vue.js / Inertia.js / REST APIs",
  },
  {
    title: { en: "Data & analytics", id: "Data & analitik" },
    items: "SQL / Python / Tableau / Excel / MySQL",
  },
  {
    title: { en: "Workflow", id: "Alur kerja" },
    items: "Git / DBeaver / Google Colab / Tailwind CSS",
  },
];

/* --- Experience / education ----------------------------------------- */
export const experience: { year: string; title: Localized; org: Localized }[] = [
  {
    year: "2024",
    title: {
      en: "Data Analytics for Business",
      id: "Data Analytics for Business",
    },
    org: {
      en: "Bitlabs Academy · Score 93.11",
      id: "Bitlabs Academy · Nilai 93,11",
    },
  },
  {
    year: "2024",
    title: { en: "2nd Place — Final Pitch", id: "Juara 2 — Pitch Final" },
    org: {
      en: "DOKU × Bitlabs Partner Program",
      id: "Program Mitra DOKU × Bitlabs",
    },
  },
  {
    year: "2025",
    title: { en: "Web Developer Intern", id: "Magang Web Developer" },
    org: { en: "PT Sucofindo (Persero)", id: "PT Sucofindo (Persero)" },
  },
  {
    year: "2026",
    title: {
      en: "Information Systems, S.Kom",
      id: "Sistem Informasi, S.Kom",
    },
    org: {
      en: "UNIKOM · GPA 3.70 / 4.00",
      id: "UNIKOM · IPK 3,70 / 4,00",
    },
  },
  {
    year: "2026",
    title: { en: "Associate Data Analyst", id: "Analis Data Madya" },
    org: {
      en: "BNSP national certification",
      id: "Sertifikasi nasional BNSP",
    },
  },
];

/* --- UI strings (nav, section labels, buttons) ---------------------- */
export interface Dictionary {
  nav: { work: string; about: string; experience: string; contact: string };
  menu: string;
  close: string;
  scroll: string;
  work_kicker: string;
  work_title: string;
  problem: string;
  solution: string;
  about_kicker: string;
  capabilities_kicker: string;
  experience_kicker: string;
  contact_kicker: string;
  contact_cta: string;
  email: string;
  rights: string;
}

export const ui: Record<Lang, Dictionary> = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      experience: "Experience",
      contact: "Get in touch",
    },
    menu: "Menu",
    close: "Close",
    scroll: "Scroll to work",
    work_kicker: "Selected work / 05",
    work_title: "Systems built for real use.",
    problem: "The problem",
    solution: "What I built",
    about_kicker: "About / approach",
    capabilities_kicker: "Capabilities",
    experience_kicker: "Experience / education",
    contact_kicker: "Open to opportunities",
    contact_cta: "Let's work together.",
    email: "Email",
    rights: "© 2026 Melco Lauwento · Bandung, ID",
  },
  id: {
    nav: {
      work: "Karya",
      about: "Tentang",
      experience: "Pengalaman",
      contact: "Hubungi saya",
    },
    menu: "Menu",
    close: "Tutup",
    scroll: "Gulir ke karya",
    work_kicker: "Karya pilihan / 05",
    work_title: "Sistem yang dibangun untuk dipakai.",
    problem: "Masalahnya",
    solution: "Yang saya bangun",
    about_kicker: "Tentang / pendekatan",
    capabilities_kicker: "Kemampuan",
    experience_kicker: "Pengalaman / pendidikan",
    contact_kicker: "Terbuka untuk peluang",
    contact_cta: "Mari bekerja sama.",
    email: "Email",
    rights: "© 2026 Melco Lauwento · Bandung, ID",
  },
};
