
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Juraj Developer",
  title: "Full-stack Software Engineer",
  bio: "Vášnivý vývojár so zameraním na moderné webové technológie. Baví ma riešiť zložité problémy a premieňať nápady na funkčné, vizuálne príťažlivé digitálne produkty. Aktuálne sa špecializujem na React, TypeScript a integráciu AI riešení.",
  email: "kontakt@priklad.sk",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  skills: [
    { name: "React", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "Tailwind CSS", level: 95, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "PostgreSQL", level: 80, category: "Backend" },
    { name: "Python", level: 75, category: "Ostatné" },
    { name: "Git", level: 90, category: "Ostatné" },
    { name: "Docker", level: 70, category: "Ostatné" }
  ],
  projects: [
    {
      title: "AI Task Manager",
      description: "Inteligentný plánovač úloh, ktorý automaticky prioritizuje váš kalendár pomocou umelej inteligencie.",
      tags: ["React", "Gemini API", "Node.js"],
      link: "#",
      image: "https://picsum.photos/seed/ai-task/600/400"
    },
    {
      title: "E-commerce Platform",
      description: "Moderný internetový obchod s rýchlym vyhľadávaním a integrovanou platobnou bránou.",
      tags: ["Next.js", "Stripe", "Prisma"],
      link: "#",
      image: "https://picsum.photos/seed/shop/600/400"
    },
    {
      title: "Dátový Dashboard",
      description: "Vizualizácia v reálnom čase pre IoT zariadenia monitorujúce kvalitu ovzdušia.",
      tags: ["D3.js", "React", "Socket.io"],
      link: "#",
      image: "https://picsum.photos/seed/dashboard/600/400"
    }
  ],
  experience: [
    {
      company: "Tech Solutions s.r.o.",
      role: "Senior Frontend Developer",
      period: "2021 - Súčasnosť",
      description: "Vediem vývoj klientskych aplikácií v Reacte, optimalizujem výkon a mentorujem junior kolegov."
    },
    {
      company: "Digital Agency",
      role: "Full-stack Developer",
      period: "2019 - 2021",
      description: "Vývoj custom webových stránok pre lokálnych aj medzinárodných klientov."
    }
  ]
};
