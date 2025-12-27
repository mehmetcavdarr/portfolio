import { Project, Experience, Education, Certificate, SkillSet } from './types';

// Data Types
interface ContentData {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    summary: string;
    downloadCV: string;
    viewWork: string;
    contactMe: string;
    availableForHire: string;
  };
  navigation: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    certificates: string;
    contact: string;
  };
  skills: SkillSet[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certificates: Certificate[];
  contact: {
    title: string;
    message: string;
    cta: string;
    copyright: string;
  };
  chatbot: {
    welcome: string;
    placeholder: string;
    error: string;
    title: string;
  };
}

const COMMON_PERSONAL_INFO = {
  name: "Mehmet Çavdar",
  phone: "+90 553 735 88 60",
  email: "mehmetcvdr4567@gmail.com",
  linkedin: "https://linkedin.com/in/mehmetcavdar",
  github: "https://github.com/mehmetcavdarr",
};

// ENGLISH CONTENT
const EN_CONTENT: ContentData = {
  personalInfo: {
    ...COMMON_PERSONAL_INFO,
    title: "Senior Computer Engineering Student & Full Stack Developer",
    location: "Istanbul, Sisli / Turkey",
    summary: "Senior Computer Engineering student at Istanbul Aydın University. Experienced in Agile/Scrum, back-end, and front-end technologies with international work experience.",
    downloadCV: "Download CV",
    viewWork: "View Work",
    contactMe: "Contact Me",
    availableForHire: "Open to Collaboration"
  },
  navigation: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    certificates: "Certificates",
    contact: "Contact"
  },
  skills: [
    {
      category: "Languages",
      skills: ["Java", "Go", "JavaScript", "TypeScript", "Python", "PHP", "HTML", "CSS"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Spring Boot", "Node.js", "Express.js", "Fiber (Go)", "Tailwind CSS"]
    },
    {
      category: "Databases & Tools",
      skills: ["MongoDB", "MySQL", "Git", "Postman", "Swagger", "Docker"]
    },
    {
      category: "Concepts",
      skills: ["RESTful APIs", "Agile/Scrum", "JWT Auth", "Full Stack Development", "Algorithms"]
    }
  ],
  experience: [
    {
      role: "Full Stack Developer",
      company: "Kartelam",
      duration: "04/2025 - Present",
      description: "Developing and maintaining features for a web-based project using React, Go, Node.js, and MongoDB.",
      details: [
        "Working in an Agile Scrum environment.",
        "Debugging, API integration, database management, and code reviews.",
        "Preparing project documentation (timelines, task breakdowns).",
        "Supporting sprint planning and progress tracking."
      ]
    }
  ],
  projects: [
    {
      title: "MERN E-Commerce Backend",
      description: "A production-ready e-commerce backend built with Node.js, Express, and MongoDB.",
      techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Stripe SDK"],
      features: [
        "JWT Authentication (Access + Refresh)",
        "Role-based authorization (User/Admin)",
        "Product CRUD with search, filtering, sorting",
        "Order management and Stripe payment integration"
      ],
      github: "https://github.com/mehmetcavdarr",
      date: "Side Project"
    },
    {
      title: "Jewelry Product Listing App",
      description: "Full-Stack Product Listing Web Application displaying dynamically priced jewelry based on real-time gold rates.",
      techStack: ["Go (Fiber)", "React", "TypeScript", "Vite", "Tailwind CSS"],
      features: [
        "Dynamic Price Calculation based on daily gold rates",
        "Custom Carousel & Color Picker",
        "Real-time USD conversion from TCMB",
        "Responsive UI (Desktop, Tablet, Mobile)"
      ],
      github: "https://github.com/mehmetcavdarr/product-listing",
      date: "Side Project"
    },
    {
      title: "sahibindenkarsilastir.com",
      description: "Full-Stack Car Comparison Platform allowing users to list and compare second-hand cars.",
      techStack: ["Java Spring Boot", "React.js", "MySQL", "Spring Security", "Swagger"],
      features: [
        "User roles (admin, buyer, seller)",
        "JWT-based login and registration",
        "Advanced car comparison logic",
        "RESTful API with Swagger documentation"
      ],
      date: "05/2025"
    },
    {
      title: "Library Management System",
      description: "RESTful library management system enabling user registration, book borrowing, and inventory management.",
      techStack: ["Go", "Fiber", "MongoDB", "JWT"],
      features: [
        "Secure user authentication with JWT & bcrypt",
        "Borrowing limits and access control",
        "Logging for debugging",
        "Endpoints tested with Postman"
      ],
      date: "04/2025"
    }
  ],
  education: [
    {
      degree: "Computer Engineering (English) (%100 Scholarship)",
      school: "Istanbul Aydın University",
      duration: "09/2021 - 06/2026",
      description: "Building a solid foundation in AI and deep learning through academic projects."
    }
  ],
  certificates: [
    {
      title: "Work and Travel Program (USA)",
      description: "Completed a 4-month cultural exchange in the United States, improving English communication, adaptability, and problem-solving skills while gaining international work experience."
    }
  ],
  contact: {
    title: "Get In Touch",
    message: "You can reach me via email or LinkedIn for any inquiries, project collaborations, or just to say hello.",
    cta: "Send Email",
    copyright: "All rights reserved."
  },
  chatbot: {
    welcome: "Hi! I'm Mehmet's AI assistant. Ask me anything about his projects, skills, or experience.",
    placeholder: "Ask about Mehmet's projects...",
    error: "Sorry, I'm having trouble connecting right now. Please try again later.",
    title: "AI Assistant"
  }
};

// TURKISH CONTENT
const TR_CONTENT: ContentData = {
  personalInfo: {
    ...COMMON_PERSONAL_INFO,
    title: "Bilgisayar Mühendisliği Öğrencisi & Full Stack Geliştirici",
    location: "İstanbul, Şişli / Türkiye",
    summary: "İstanbul Aydın Üniversitesi Bilgisayar Mühendisliği öğrencisi. Agile, backend ve frontend teknolojilerinde ve uluslararası çalışma ortamlarında deneyimli.",
    downloadCV: "CV İndir",
    viewWork: "Çalışmalarımı Gör",
    contactMe: "İletişime Geç",
    availableForHire: "İşbirliğine Açık"
  },
  navigation: {
    about: "Hakkımda",
    skills: "Yetenekler",
    experience: "Deneyim",
    projects: "Projeler",
    education: "Eğitim",
    certificates: "Sertifikalar",
    contact: "İletişim"
  },
  skills: [
    {
      category: "Diller",
      skills: ["Java", "Go", "JavaScript", "TypeScript", "Python", "PHP", "HTML", "CSS"]
    },
    {
      category: "Framework & Kütüphaneler",
      skills: ["React", "Spring Boot", "Node.js", "Express.js", "Fiber (Go)", "Tailwind CSS"]
    },
    {
      category: "Veritabanları & Araçlar",
      skills: ["MongoDB", "MySQL", "Git", "Postman", "Swagger", "Docker"]
    },
    {
      category: "Kavramlar",
      skills: ["RESTful APIs", "Agile/Scrum", "JWT Auth", "Full Stack Geliştirme", "Algoritmalar"]
    }
  ],
  experience: [
    {
      role: "Full Stack Geliştirici",
      company: "Kartelam",
      duration: "04/2025 - Günümüz",
      description: "React, Go, Node.js ve MongoDB kullanarak web tabanlı bir proje için özellikler geliştiriyor ve bakımını yapıyorum.",
      details: [
        "Agile Scrum ortamında çalışma.",
        "Hata ayıklama, API entegrasyonu, veritabanı yönetimi ve kod incelemeleri.",
        "Proje dökümantasyonunun hazırlanması (zaman çizelgeleri, görev dağılımları).",
        "Sprint planlama ve ilerleme takibine destek."
      ]
    }
  ],
  projects: [
    {
      title: "MERN E-Ticaret Backend",
      description: "Node.js, Express ve MongoDB ile oluşturulmuş, üretime hazır bir e-ticaret backend projesi.",
      techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Stripe SDK"],
      features: [
        "JWT Kimlik Doğrulama (Erişim + Yenileme)",
        "Rol tabanlı yetkilendirme (Kullanıcı/Admin)",
        "Ürün CRUD işlemleri, arama, filtreleme, sıralama",
        "Sipariş yönetimi ve Stripe ödeme entegrasyonu"
      ],
      github: "https://github.com/mehmetcavdarr",
      date: "Yan Proje"
    },
    {
      title: "Takı Ürün Listeleme Uygulaması",
      description: "Gerçek zamanlı altın kurlarına göre dinamik olarak fiyatlandırılmış takıları gösteren Full-Stack Web Uygulaması.",
      techStack: ["Go (Fiber)", "React", "TypeScript", "Vite", "Tailwind CSS"],
      features: [
        "Günlük altın kurlarına göre dinamik fiyat hesaplama",
        "Özel Carousel ve Renk Seçici",
        "TCMB'den gerçek zamanlı USD dönüşümü",
        "Responsive Arayüz (Masaüstü, Tablet, Mobil)"
      ],
      github: "https://github.com/mehmetcavdarr/product-listing",
      date: "Yan Proje"
    },
    {
      title: "sahibindenkarsilastir.com",
      description: "Kullanıcıların ikinci el arabaları listelemesini ve karşılaştırmasını sağlayan Full-Stack Araç Karşılaştırma Platformu.",
      techStack: ["Java Spring Boot", "React.js", "MySQL", "Spring Security", "Swagger"],
      features: [
        "Kullanıcı rolleri (admin, alıcı, satıcı)",
        "JWT tabanlı giriş ve kayıt",
        "Gelişmiş araç karşılaştırma mantığı",
        "Swagger dökümantasyonlu RESTful API"
      ],
      date: "05/2025"
    },
    {
      title: "Kütüphane Yönetim Sistemi",
      description: "Kullanıcı kaydı, kitap ödünç alma ve envanter yönetimi sağlayan RESTful kütüphane yönetim sistemi.",
      techStack: ["Go", "Fiber", "MongoDB", "JWT"],
      features: [
        "JWT & bcrypt ile güvenli kimlik doğrulama",
        "Ödünç alma limitleri ve erişim kontrolü",
        "Hata ayıklama için loglama",
        "Postman ile test edilmiş uç noktalar"
      ],
      date: "04/2025"
    }
  ],
  education: [
    {
      degree: "Bilgisayar Mühendisliği (İngilizce) (%100 Burslu)",
      school: "İstanbul Aydın Üniversitesi",
      duration: "09/2021 - 06/2026",
      description: "Akademik projelerle yapay zeka ve derin öğrenme konusunda sağlam bir temel oluşturulması."
    }
  ],
  certificates: [
    {
      title: "Work and Travel Programı (ABD)",
      description: "Amerika Birleşik Devletleri'nde 4 aylık kültürel değişim programı tamamlandı. Uluslararası iş deneyimi kazanılırken İngilizce iletişimi, uyum sağlama ve problem çözme becerileri geliştirildi."
    }
  ],
  contact: {
    title: "İletişime Geç",
    message: "Her türlü soru, proje işbirliği veya sadece merhaba demek için bana e-posta veya LinkedIn üzerinden ulaşabilirsiniz.",
    cta: "E-posta Gönder",
    copyright: "Tüm hakları saklıdır."
  },
  chatbot: {
    welcome: "Merhaba! Ben Mehmet'in yapay zeka asistanıyım. Projeleri, yetenekleri veya deneyimleri hakkında bana her şeyi sorabilirsiniz.",
    placeholder: "Mehmet'in projeleri hakkında sor...",
    error: "Üzgünüm, şu anda bağlantı kurmakta sorun yaşıyorum. Lütfen daha sonra tekrar deneyin.",
    title: "Yapay Zeka Asistanı"
  }
};

export const DICTIONARY = {
  en: EN_CONTENT,
  tr: TR_CONTENT
};

export const CHATBOT_SYSTEM_PROMPT = `
You are an AI assistant for Mehmet Çavdar's personal portfolio website. 
Your goal is to answer questions about Mehmet's skills, experience, and projects in a professional, friendly, and concise manner.
Use the following context to answer questions. If the answer is not in the context, politely say you don't have that information but suggest contacting Mehmet directly.

CONTEXT:
Name: ${COMMON_PERSONAL_INFO.name}
Contact: ${COMMON_PERSONAL_INFO.email}, ${COMMON_PERSONAL_INFO.phone}
LinkedIn: ${COMMON_PERSONAL_INFO.linkedin}
Github: ${COMMON_PERSONAL_INFO.github}

Skills: Java, Go, JS, React, Spring Boot, Node.js, MongoDB, SQL.
Experience: Kartelam (Full Stack Dev).
Projects: E-Commerce Backend, Jewelry Listing App, Car Comparison Platform, Library Management System.

When asked about "contact", provide his email and LinkedIn.
When asked about "projects", summarize 1-2 key projects and mention the tech stack.
Always maintain a helpful and polite tone.
`;