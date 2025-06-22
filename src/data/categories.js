// Backgrounds
import lampBg from "../assets/backgrounds/lamp.webp";
import bookBg from "../assets/backgrounds/book.webp";
import gridBg from "../assets/backgrounds/grid.webp";
import jsBg from "../assets/backgrounds/js-logo.webp";
import dtmBg from "../assets/backgrounds/dtm-logo.webp";
import workbagBg from "../assets/backgrounds/workbag.webp";
import ieltsBg from "../assets/backgrounds/ielts-logo.webp";
import nodejsBg from "../assets/backgrounds/nodejs-logo.webp";

const categories = [
  {
    icon: ieltsBg,
    name: `IELTS/CEFR`,
    link: "ielts-cefr",
    background: "bg-[#fff0f0]",
    description: `Ingliz tili testlari: grammatika, lug'at, o'qish va eshitish.`,
  },
  {
    icon: dtmBg,
    name: `DTM`,
    link: "dtm",
    background: "bg-[#f0f2ff]",
    description: `Abituriyentlar uchun testlar va tayyorgarlik materiallari.`,
  },
  {
    icon: bookBg,
    name: `Aniq fanlar`,
    link: "aniq-fanlar",
    background: "bg-[#fff8f0]",
    description: `Matematika, fizika, kimyo va boshqa fanlar bo'yicha testlar.`,
  },
  {
    icon: jsBg,
    name: `Frontend`,
    link: "frontend",
    background: "bg-[#fafbeb]",
    description: `HTML, CSS, JavaScript va UI asoslari bo'yicha testlar.`,
  },
  {
    icon: nodejsBg,
    name: `Backend`,
    link: "backend",
    background: "bg-[#f5fff0]",
    description: `Node.js, API, ma'lumotlar bazasi va server logikasi testlari.`,
  },
  {
    icon: lampBg,
    name: `Mantiqiy testlar`,
    link: "mantiqiy-testlar",
    background: "bg-[#f4f0ff]",
    description: `Analitik fikrlash va IQ savollar asosida testlar.`,
  },
  {
    icon: gridBg,
    name: `Umumiy bilimlar`,
    link: "umumiy-bilimlar",
    background: "bg-[#f8f0ff]",
    description: `Turli sohalarga oid qiziqarli va foydali savollar.`,
  },
  {
    icon: workbagBg,
    name: `Kasbiy testlar`,
    link: "kasbiy-testlar",
    background: "bg-[#f0fffa]",
    description: `Tibbiyot, huquq, IT va boshqa yo'nalishlar uchun testlar.`,
  },
];

export default categories;
