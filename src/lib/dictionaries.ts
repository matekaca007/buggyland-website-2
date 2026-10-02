export type Locale = "en" | "ka" | "ru";

export type Dictionary = {
  nav: {
    fleet: string;
    tours: string;
    gallery: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    headline: string;
    headlineAccent: string;
    subhead: string;
    ctaWhatsapp: string;
    ctaCall: string;
    trust: readonly [string, string, string, string];
  };
  fleet: {
    sectionLabel: string;
    heading: string;
    cta: string;
  };
  tours: {
    sectionLabel: string;
    heading: string;
    cta: string;
  };
  howItWorks: {
    sectionLabel: string;
    heading: string;
    steps: readonly [
      { number: string; title: string; desc: string; icon: string },
      { number: string; title: string; desc: string; icon: string },
      { number: string; title: string; desc: string; icon: string },
      { number: string; title: string; desc: string; icon: string },
    ];
  };
  gallery: {
    sectionLabel: string;
    heading: string;
    close: string;
    prev: string;
    next: string;
  };
  contact: {
    sectionLabel: string;
    heading: string;
    whatsappBtn: string;
    callBtn: string;
    emailLabel: string;
    mapPlaceholder: string;
    mapAlt: string;
    openMap: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
};

// ─── English ──────────────────────────────────────────────────────────────────
const en: Dictionary = {
  nav: {
    fleet: "Vehicles",
    tours: "Tours",
    gallery: "Gallery",
    contact: "Contact",
    bookNow: "Reserve a Spot",
  },
  hero: {
    headline: "Conquer the",
    headlineAccent: "Wild Trails.",
    subhead: "Tbilisi's most thrilling off-road experience — ATVs, buggies, extreme jeeps & guided mountain expeditions.",
    ctaWhatsapp: "Reserve on WhatsApp",
    ctaCall: "Call to Book",
    trust: [
      "Safety Gear Provided",
      "Expert Instructors",
      "All Skill Levels Welcome",
      "Tbilisi, Georgia",
    ],
  },
  fleet: {
    sectionLabel: "Machines Built for the Wild",
    heading: "Pick Your Weapon",
    cta: "Reserve This Ride",
  },
  tours: {
    sectionLabel: "Trail Options",
    heading: "Your Next Adventure",
    cta: "Reserve This Tour",
  },
  howItWorks: {
    sectionLabel: "Simple as Mud",
    heading: "Three Steps to the Trail",
    steps: [
      {
        number: "01",
        title: "Pick Your Machine",
        desc: "Browse our fleet of ATVs, buggies and extreme jeeps — choose what excites you most.",
        icon: "truck",
      },
      {
        number: "02",
        title: "Contact Us",
        desc: "Send a WhatsApp or give us a call. We'll lock in your date and answer every question.",
        icon: "message-circle",
      },
      {
        number: "03",
        title: "Suit Up",
        desc: "Show up at base camp. Full safety gear, helmet and a quick briefing — all included.",
        icon: "shield-check",
      },
      {
        number: "04",
        title: "Hit the Dirt",
        desc: "Tear through Georgia's raw mountain terrain with your expert guide leading the way.",
        icon: "zap",
      },
    ],
  },
  gallery: {
    sectionLabel: "From the Trails",
    heading: "Real Rides. Real Dirt.",
    close: "Close",
    prev: "Previous",
    next: "Next",
  },
  contact: {
    sectionLabel: "Let's Roll",
    heading: "Start Your Adventure",
    whatsappBtn: "Message on WhatsApp",
    callBtn: "Give Us a Call",
    emailLabel: "Email",
    mapPlaceholder: "Buggyland Tbilisi — Base Camp",
    mapAlt: "Buggyland Tbilisi location map",
    openMap: "View on Google Maps",
  },
  footer: {
    tagline: "Off-Road Thrills in the Heart of Georgia",
    copyright: `© ${new Date().getFullYear()} Buggyland Tbilisi. All rights reserved.`,
  },
};

// ─── Georgian ─────────────────────────────────────────────────────────────────
const ka: Dictionary = {
  nav: {
    fleet: "ტექნიკა",
    tours: "ტურები",
    gallery: "გალერეა",
    contact: "კონტაქტი",
    bookNow: "ადგილის დაჯავშნა",
  },
  hero: {
    headline: "გადალახე",
    headlineAccent: "ველური ბილიკები.",
    subhead: "თბილისის ყველაზე მომხიბვლელი გზატკეცილგარეშე გამოცდილება — ATV, ბაგი, ჯიპი და მთის ექსპედიციები.",
    ctaWhatsapp: "WhatsApp-ით დაჯავშნე",
    ctaCall: "დარეკე და დაჯავშნე",
    trust: [
      "დამცავი აღჭურვილობა",
      "გამოცდილი ინსტრუქტორები",
      "ყველა დონის მგზავრი",
      "თბილისი, საქართველო",
    ],
  },
  fleet: {
    sectionLabel: "ველისთვის შექმნილი მანქანები",
    heading: "აირჩიე შენი იარაღი",
    cta: "ეს სეირნობა დაჯავშნე",
  },
  tours: {
    sectionLabel: "ბილიკის ვარიანტები",
    heading: "შენი შემდეგი თავგადასავალი",
    cta: "ეს ტური დაჯავშნე",
  },
  howItWorks: {
    sectionLabel: "ეს მარტივია",
    heading: "სამი ნაბიჯი ბილიკამდე",
    steps: [
      {
        number: "01",
        title: "აირჩიე მანქანა",
        desc: "გაეცანი ჩვენ ATV-ებს, ბაგებს და ჯიპებს — აირჩიე ის, რაც ყველაზე მეტად გახარებს.",
        icon: "truck",
      },
      {
        number: "02",
        title: "დაგვიკავშირდი",
        desc: "გამოგვიგზავნე WhatsApp ან დაგვირეკე. ჩავაფიქსირებთ თარიღს და ყველა შეკითხვას ვუპასუხებთ.",
        icon: "message-circle",
      },
      {
        number: "03",
        title: "მოემზადე",
        desc: "მოდი საბაზისო ბანაკში. სრული დამცავი აღჭურვილობა, ჩაფხუტი და ინსტრუქტაჟი — ყველაფერი ჩართულია.",
        icon: "shield-check",
      },
      {
        number: "04",
        title: "გადი ბილიკებზე",
        desc: "გაიარე საქართველოს ველური მთის რელიეფი გამოცდილი გიდის ხელმძღვანელობით.",
        icon: "zap",
      },
    ],
  },
  gallery: {
    sectionLabel: "ბილიკებიდან",
    heading: "ნამდვილი სეირნობა. ნამდვილი ჭუჭყი.",
    close: "დახურვა",
    prev: "წინა",
    next: "შემდეგი",
  },
  contact: {
    sectionLabel: "დავძრათ",
    heading: "დაიწყე შენი თავგადასავალი",
    whatsappBtn: "WhatsApp-ზე მოგვწერე",
    callBtn: "დაგვირეკე",
    emailLabel: "ელ-ფოსტა",
    mapPlaceholder: "ბაგილენდი თბილისი — საბაზისო ბანაკი",
    mapAlt: "ბაგილენდი თბილისის რუკა",
    openMap: "Google Maps-ში ნახვა",
  },
  footer: {
    tagline: "გზატკეცილგარეშე ემოციები საქართველოს გულში",
    copyright: `© ${new Date().getFullYear()} ბაგილენდი თბილისი. ყველა უფლება დაცულია.`,
  },
};

// ─── Russian ──────────────────────────────────────────────────────────────────
const ru: Dictionary = {
  nav: {
    fleet: "Техника",
    tours: "Туры",
    gallery: "Галерея",
    contact: "Контакты",
    bookNow: "Забронировать место",
  },
  hero: {
    headline: "Покори",
    headlineAccent: "Дикие Тропы.",
    subhead: "Самые захватывающие внедорожные приключения Тбилиси — квадроциклы, багги, экстремальные джипы и горные экспедиции.",
    ctaWhatsapp: "Забронировать в WhatsApp",
    ctaCall: "Позвонить и забронировать",
    trust: [
      "Защитное снаряжение",
      "Опытные инструкторы",
      "Любой уровень подготовки",
      "Тбилиси, Грузия",
    ],
  },
  fleet: {
    sectionLabel: "Машины для бездорожья",
    heading: "Выбери Своё Оружие",
    cta: "Забронировать эту технику",
  },
  tours: {
    sectionLabel: "Варианты маршрутов",
    heading: "Твоё следующее приключение",
    cta: "Забронировать этот тур",
  },
  howItWorks: {
    sectionLabel: "Всё просто",
    heading: "Три шага до трассы",
    steps: [
      {
        number: "01",
        title: "Выбери машину",
        desc: "Изучи наш парк квадроциклов, багги и джипов — выбери то, что тебя заводит.",
        icon: "truck",
      },
      {
        number: "02",
        title: "Свяжись с нами",
        desc: "Напиши в WhatsApp или позвони. Закрепим дату и ответим на все вопросы.",
        icon: "message-circle",
      },
      {
        number: "03",
        title: "Экипируйся",
        desc: "Прибудь на базу. Полная защитная экипировка, шлем и инструктаж — всё включено.",
        icon: "shield-check",
      },
      {
        number: "04",
        title: "Рвани на трассу",
        desc: "Покори дикий горный рельеф Грузии под руководством опытного гида.",
        icon: "zap",
      },
    ],
  },
  gallery: {
    sectionLabel: "С трасс",
    heading: "Настоящие гонки. Настоящая грязь.",
    close: "Закрыть",
    prev: "Назад",
    next: "Вперёд",
  },
  contact: {
    sectionLabel: "Поехали",
    heading: "Начни своё приключение",
    whatsappBtn: "Написать в WhatsApp",
    callBtn: "Позвонить нам",
    emailLabel: "Эл. почта",
    mapPlaceholder: "Buggyland Tbilisi — База",
    mapAlt: "Карта Buggyland Tbilisi",
    openMap: "Открыть в Google Maps",
  },
  footer: {
    tagline: "Внедорожный адреналин в сердце Грузии",
    copyright: `© ${new Date().getFullYear()} Buggyland Tbilisi. Все права защищены.`,
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ka, ru };
