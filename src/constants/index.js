import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Tentang",
  },
  {
    id: "work",
    title: "Kerja",
  },
  {
    id: "contact",
    title: "Kontak",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Sofware Enginering",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Intern Garena",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jul 2022 - Dec 2022",
    points: [
      "Mengembangkan dan memelihara aplikasi web menggunakan React.js dan teknologi terkait lainnya.",
      "Bekerja sama dengan tim lintas fungsi termasuk desainer, manajer produk, dan pengembang lainnya untuk menciptakan produk berkualitas tinggi.",
      "Menerapkan desain responsif dan memastikan kompatibilitas antar browser.",
      "Berpartisipasi dalam tinjauan kode dan memberikan masukan konstruktif kepada pengembang lain.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "PT Techbros Digital Solution",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Jun 2023",
    points: [
      "Mengembangkan dan memelihara aplikasi web menggunakan React.js dan teknologi terkait lainnya.",
      "Bekerja sama dengan tim lintas fungsi termasuk desainer, manajer produk, dan pengembang lainnya untuk menciptakan produk berkualitas tinggi.",
      "Menerapkan desain responsif dan memastikan kompatibilitas antar browser.",
      "Berpartisipasi dalam tinjauan kode dan memberikan masukan konstruktif kepada pengembang lain.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Traveloka",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2024 - Jun 2025",
    points: [
      "Mengembangkan dan memelihara aplikasi web menggunakan Next.js dan teknologi terkait lainnya.",
      "Bekerja sama dengan tim lintas fungsi termasuk desainer, manajer produk, dan pengembang lainnya untuk menciptakan produk berkualitas tinggi.",
      "Menerapkan desain responsif dan memastikan kompatibilitas antar browser.",
      "Berpartisipasi dalam tinjauan kode dan memberikan masukan konstruktif kepada pengembang lain.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "envytech",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Present",
    points: [
      "Mengembangkan dan memelihara aplikasi web menggunakan Next.js dan teknologi terkait lainnya.",
      "Bekerja sama dengan tim lintas fungsi termasuk desainer, manajer produk, dan pengembang lainnya untuk menciptakan produk berkualitas tinggi.",
      "Menerapkan desain responsif dan memastikan kompatibilitas antar browser.",
      "Berpartisipasi dalam tinjauan kode dan memberikan masukan konstruktif kepada pengembang lain.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Saya pikir mustahil membuat website yang secantik produk kami, tapi Eggy membuktikan saya salah.",
    name: "Sarah Lestari",
    designation: "CFO",
    company: "PT Acme Jaya",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    testimonial:
      "Saya belum pernah bertemu pengembang web yang benar-benar peduli terhadap kesuksesan kliennya seperti Eggy.",
    name: "Christian Pratama",
    designation: "COO",
    company: "DEF Corp Indonesia",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Setelah Eggy mengoptimalkan website kami, trafik meningkat hingga 50%. Kami sangat berterima kasih!",
    name: "Lisa Wulandari",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Wonka Agent",
    description:
      "Web multi chatbot yang bisa menjalankan banyak model AI sekaligus, dan di lengkapi dengan fitur-fitur seperti voice agent, Workflows, MCP, 15 Tema, 5 Bahasa.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://wonkaagent.site",
  },
  {
    name: "Wonka Zoom",
    description:
      "Wonka Zoom yang memungkinkan pengguna untuk melakukan video conference, screen sharing, dan chat dengan fitur keamanan yang kuat.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://wonkazoom.vercel.app",
  },
  {
    name: "AI Resume Builder",
    description:
      "AI Resume Builder yang memungkinkan pengguna untuk membuat resume profesional dengan mudah menggunakan teknologi AI.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://ezzresume.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
