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
    longDescription: `Ushbu bo'limda IELTS va CEFR darajalariga tayyorlanish uchun mo'ljallangan testlar jamlangan. Grammatika, lug'at boyligi, o'qish (Reading) va tinglab tushunish (Listening) bo'yicha turli darajadagi savollar mavjud.`,
  },
  {
    icon: dtmBg,
    name: `DTM`,
    link: "dtm",
    background: "bg-[#f0f2ff]",
    description: `Abituriyentlar uchun testlar va tayyorgarlik materiallari.`,
    longDescription: `DTM (Davlat Test Markazi) formatidagi testlar orqali siz oliy o'quv yurtlariga kirish imtihonlariga tayyorgarlik ko'rishingiz mumkin. Bo'limda blok fanlari bo'yicha amaliy testlar va eski yillardagi savollar mavjud.`,
  },
  {
    icon: bookBg,
    name: `Aniq fanlar`,
    link: "aniq-fanlar",
    background: "bg-[#fff8f0]",
    description: `Matematika, fizika, kimyo va boshqa fanlar bo'yicha testlar.`,
    longDescription: `Matematika, fizika, kimyo, informatika kabi aniq fanlardan bilimlarni mustahkamlovchi testlar jamlangan. Har bir fan bo'yicha mavzulashtirilgan va umumiy testlar mavjud.`,
  },
  {
    icon: jsBg,
    name: `Frontend`,
    link: "frontend",
    background: "bg-[#fafbeb]",
    description: `HTML, CSS, JavaScript va UI asoslari bo'yicha testlar.`,
    longDescription: `Veb-ishlab chiqishning asosiy yo'nalishi — Frontend bo'yicha testlar: HTML, CSS, JavaScript asoslari, DOM bilan ishlash, React, va foydalanuvchi interfeysi elementlari haqida bilimlaringizni sinab ko'ring.`,
  },
  {
    icon: nodejsBg,
    name: `Backend`,
    link: "backend",
    background: "bg-[#f5fff0]",
    description: `Node.js, API, ma'lumotlar bazasi va server logikasi testlari.`,
    longDescription: `Server tomonidagi dasturlash asoslari: Node.js, Express, REST API, ma'lumotlar bazasi (MongoDB, PostgreSQL) va autentifikatsiya kabi tushunchalar bo'yicha testlar orqali bilimlaringizni mustahkamlang.`,
  },
  {
    icon: lampBg,
    name: `Mantiqiy testlar`,
    link: "mantiqiy-testlar",
    background: "bg-[#f4f0ff]",
    description: `Analitik fikrlash va IQ savollar asosida testlar.`,
    longDescription: `Mantiqiy fikrlash, IQ testlari va analitik yondashuvni talab qiluvchi savollar orqali aqliy salohiyatingizni sinab ko'rishingiz mumkin. Bo'lim intervyular yoki imtihonlar uchun foydalidir.`,
  },
  {
    icon: gridBg,
    name: `Umumiy bilimlar`,
    link: "umumiy-bilimlar",
    background: "bg-[#f8f0ff]",
    description: `Turli sohalarga oid qiziqarli va foydali savollar.`,
    longDescription: `Geografiya, tarix, madaniyat, texnologiya, sport va boshqa umumiy bilimlarga oid savollarni o'z ichiga oladi. Bo'sh vaqtingizda bilimlaringizni sinovdan o'tkazish uchun qulay bo'lim.`,
  },
  {
    icon: workbagBg,
    name: `Kasbiy testlar`,
    link: "kasbiy-testlar",
    background: "bg-[#f0fffa]",
    description: `Tibbiyot, huquq, IT va boshqa yo'nalishlar uchun testlar.`,
    longDescription: `Kasbiy yo'nalishga oid chuqurlashtirilgan testlar: tibbiyot (biologiya, anatomiya), huquq (huquqiy asoslar), IT (dasturlash, xavfsizlik) va boshqa sohalarga oid maxsus testlar mavjud.`,
  },
];

export default categories;
