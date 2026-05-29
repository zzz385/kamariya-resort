"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ru" | "kk" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Navbar
    "nav.home": "Главная",
    "nav.rooms": "Номера",
    "nav.pricing": "Цены",
    "nav.gallery": "Галерея",
    "nav.contacts": "Контакты",

    // Hero
    "hero.title": "KAMARIYA RESORT",
    "hero.subtitle": "Уютный отдых у озера Алаколь",
    "hero.location": "Акши, Казахстан",
    "hero.btnRooms": "Смотреть номера",
    "hero.btnWhatsApp": "Связаться в WhatsApp",
    "hero.scroll": "Листайте вниз",

    // About
    "about.title": "Оазис Семейного Уюта",
    "about.subtitle": "О Kamariya Resort",
    "about.desc1": "Kamariya Resort — это современная и по-домашнему уютная база отдыха, расположенная в курортном поселке Акши на побережье целебного озера Алаколь. Наша главная цель — подарить вам и вашим близким спокойный, гармоничный и незабываемый летний отпуск.",
    "about.desc2": "Мы позаботились обо всем: от комфортных номеров с кондиционерами до вкусного и сытного трехразового питания, включенного в стоимость. Просторная зеленая территория базы отлично подходит для безопасных детских игр и неспешных вечерних прогулок под теплым закатным небом, а ласковые воды Алаколя находятся всего в нескольких минутах ходьбы от ваших дверей.",
    "about.card1.title": "Семейный отдых",
    "about.card1.desc": "Тихая и безопасная атмосфера. Уютная детская площадка и беседки для душевных вечеров.",
    "about.card2.title": "Трёхразовое питание",
    "about.card2.desc": "Домашняя кухня с любовью. Сытные завтраки, обеды и ужины уже включены в стоимость проживания.",
    "about.card3.title": "Просторная территория",
    "about.card3.desc": "Благоустроенная зеленая зона, где каждому гостю хватит места для уединения или совместных игр.",
    "about.card4.title": "Комфортные номера",
    "about.card4.desc": "Все необходимые удобства: кондиционеры, холодильники и собственный санузел.",
    "about.card5.title": "Озеро рядом",
    "about.card5.desc": "Всего 5–7 минут неспешного шага по прямой тропе, и вы на уникальном галечном пляже Алаколя.",

    // Rooms
    "rooms.title": "Уютные Номера и Коттеджи",
    "rooms.subtitle": "Ваше персональное пространство для расслабления и восстановления сил",
    "rooms.capacity": "Вместимость",
    "rooms.capacity.guests": "чел.",
    "rooms.amenities": "В номере:",
    "rooms.bookBtn": "Забронировать в WhatsApp",
    "rooms.room1.title": "Трёхместные Деревянные Номера",
    "rooms.room1.desc": "Экологичные и наполненные ароматом натурального дерева номера. Подходят для семейного отдыха и комфортного проживания у озера.",
    "rooms.room1.a1": "Кондиционер",
    "rooms.room1.a2": "LED-телевизор",
    "rooms.room1.a3": "Компактный холодильник",
    "rooms.room1.a4": "Собственный душ и туалет",
    "rooms.room1.a5": "Гардеробный шкаф",
    "rooms.room1.a6": "Раздельные комфортные кровати",
    "rooms.room2.title": "Семейные Коттеджи",
    "rooms.room2.desc": "Просторные отдельно стоящие дома, спроектированные специально для больших семей или дружных компаний. Идеальный выбор для тех, кто ценит простор и домашнюю независимость.",
    "rooms.room2.a1": "Несколько изолированных спален",
    "rooms.room2.a2": "Кондиционер в каждой комнате",
    "rooms.room2.a3": "LED-телевизор и холодильник",
    "rooms.room2.a4": "Современная душевая кабина",
    "rooms.room2.a5": "Вместительные шкафы",
    "rooms.room2.a6": "Стиральная машина",
    "rooms.room2.a7": "Комфортный раскладной диван",

    // Pricing
    "pricing.title": "Стоимость Отдыха",
    "pricing.subtitle": "Прозрачные сезонные тарифы с включенным комплексным трёхразовым питанием",
    "pricing.badge": "Питание включено",
    "pricing.season1.title": "15–30 Июня",
    "pricing.season1.subtitle": "Начало летнего сезона",
    "pricing.season2.title": "1 Июля – 15 Августа",
    "pricing.season2.subtitle": "Пик сезона и самая теплая вода",
    "pricing.season3.title": "16–31 Августа",
    "pricing.season3.subtitle": "Бархатный сезон",
    "pricing.adults": "Взрослые",
    "pricing.kids": "Дети до 10 лет",
    "pricing.free": "Малыши до 3 лет",
    "pricing.free.desc": "проживают бесплатно (без предоставления отдельного спального места и питания)",
    "pricing.meals.info": "Домашнее питание полностью включено в стоимость путевки. При необходимости питание можно приобрести отдельно.",
    "pricing.currency": "₸ / сутки",

    // Gallery
    "gallery.title": "Галерея Атмосферы",
    "gallery.subtitle": "Почувствуйте эстетику отдыха в Kamariya Resort через объектив",
    "gallery.cat.all": "Все",
    "gallery.cat.territory": "Территория",
    "gallery.cat.dining": "Столовая",
    "gallery.cat.lake": "Отдых на Алаколе",

    // Map
    "map.title": "Мы на Карте",
    "map.subtitle": "Удобное расположение в поселке Акши, недалеко от береговой линии",
    "map.btnRoute": "Построить маршрут",
    "map.address": "Казахстан, область Жетысу, Алакольский район, курортный поселок Акши",

    // Contacts
    "contacts.title": "Связаться с Нами",
    "contacts.subtitle": "Мы всегда на связи и с радостью ответим на любые вопросы о бронировании",
    "contacts.phone1": "+7 (776) 136-45-73",
    "contacts.phone2": "+7 (707) 351-08-14",
    "contacts.insta": "@alakol_kamariya",
    "contacts.whatsapp": "Написать в WhatsApp",
    "contacts.instagram": "Перейти в Instagram",
    "contacts.instaFeed": "Мы в Instagram",
    "contacts.instaFeedSub": "Подписывайтесь на наш аккаунт, чтобы следить за жизнью курорта в реальном времени",

    // Footer
    "footer.rights": "Все права защищены.",
    "footer.made": "Создано с любовью на Алаколе",
  },
  kk: {
    // Navbar
    "nav.home": "Басты бет",
    "nav.rooms": "Бөлмелер",
    "nav.pricing": "Бағалар",
    "nav.gallery": "Галерея",
    "nav.contacts": "Байланыс",

    // Hero
    "hero.title": "KAMARIYA RESORT",
    "hero.subtitle": "Алакөл жағасындағы жайлы демалыс",
    "hero.location": "Ақши, Қазақстан",
    "hero.btnRooms": "Бөлмелерді көру",
    "hero.btnWhatsApp": "WhatsApp-пен байланысу",
    "hero.scroll": "Төмен қарай жылжытыңыз",

    // About
    "about.title": "Отбасылық Жайлылық Оазисі",
    "about.subtitle": "Kamariya Resort туралы",
    "about.desc1": "Kamariya Resort — шипалы Алакөлдің жағалауындағы Ақши шипажайлы ауылында орналасқан, отбасылық демалысқа арналған заманауи әрі жайлы демалыс орны. Біздің басты мақсатымыз — сізге және жақындарыңызға тыныш, үйлесімді және ұмытылмас жазғы демалыс сыйлау.",
    "about.desc2": "Біз барлық жағдайды жасадық: кондиционері бар жайлы бөлмелерден бастап, жолдама құнына кіретін дәмді үш мезгіл үй тағамына дейін. Демалыс орнының кең де жасыл аумағы балалардың қауіпсіз ойнауына және жылы күн батқан аспан астында кешкі серуендерге өте қолайлы. Ал Алакөлдің шипалы суы бөлмеңізден небәрі бірнеше минуттық жерде орналасқан.",
    "about.card1.title": "Отбасылық демалыс",
    "about.card1.desc": "Тыныш әрі қауіпсіз атмосфера. Балалар ойнайтын алаң және жайлы демалыс орындары.",
    "about.card2.title": "Үш мезгіл тамақтану",
    "about.card2.desc": "Сүйіспеншілікпен дайындалған үй тағамдары. Құнарлы таңғы, түскі және кешкі ас бағаға кіреді.",
    "about.card3.title": "Кең аумақ",
    "about.card3.desc": "Көгалдандырылған кең аймақ, мұнда әр қонаққа серуендеуге немесе ойын ойнауға орын жетеді.",
    "about.card4.title": "Жайлы бөлмелер",
    "about.card4.desc": "Жайлы демалысқа қажет барлық жағдайлар: кондиционер, тоңазытқыш және жеке санитарлық торап.",
    "about.card5.title": "Көл жақын жерде",
    "about.card5.desc": "Тікелей соқпақпен небәрі 5–7 минуттық асықпай жүру қашықтығында Алакөлдің таза жағажайы орналасқан.",

    // Rooms
    "rooms.title": "Жайлы Бөлмелер мен Коттедждер",
    "rooms.subtitle": "Демалу мен күш-қуатты қалпына келтіруге арналған жеке кеңістігіңіз",
    "rooms.capacity": "Сыйымдылығы",
    "rooms.capacity.guests": "адам",
    "rooms.amenities": "Бөлмеде:",
    "rooms.bookBtn": "WhatsApp арқылы брондау",
    "rooms.room1.title": "Үш кісілік ағаш бөлмелер",
    "rooms.room1.desc": "Табиғи ағаштан жасалған экологиялық таза бөлмелер. Отбасылық демалыс пен көл жағасындағы жайлы тұруға арналған.",
    "rooms.room1.a1": "Кондиционер",
    "rooms.room1.a2": "LED-теледидар",
    "rooms.room1.a3": "Шағын тоңазытқыш",
    "rooms.room1.a4": "Жеке душ пен дәретхана",
    "rooms.room1.a5": "Киім шкафы",
    "rooms.room1.a6": "Бөлек орналасқан ыңғайлы төсектер",
    "rooms.room2.title": "Отбасылық коттедждер",
    "rooms.room2.desc": "Үлкен отбасылар немесе достар тобына арналған кең коттедждер. Еркіндік пен үй жайлылығын бағалайтындар үшін тамаша таңдау.",
    "rooms.room2.a1": "Бірнеше оқшауланған жатын бөлмелер",
    "rooms.room2.a2": "Әр бөлмеде кондиционер",
    "rooms.room2.a3": "LED-теледидар және тоңазытқыш",
    "rooms.room2.a4": "Заманауи душ кабинасы",
    "rooms.room2.a5": "Кең шкафтар",
    "rooms.room2.a6": "Кір жуғыш машина",
    "rooms.room2.a7": "Жайлы жиналмалы диван",

    // Pricing
    "pricing.title": "Демалыс Бағасы",
    "pricing.subtitle": "Үш мезгіл тамақтануы кіретін ашық әрі тиімді маусымдық тарифтер",
    "pricing.badge": "Тамақтануы кіреді",
    "pricing.season1.title": "15–30 Маусым",
    "pricing.season1.subtitle": "Жазғы маусымның басталуы",
    "pricing.season2.title": "1 Шілде – 15 Тамыз",
    "pricing.season2.subtitle": "Маусымның қызған шағы және ең жылы су",
    "pricing.season3.title": "16–31 Тамыз",
    "pricing.season3.subtitle": "Барқыт маусымы",
    "pricing.adults": "Ересектер",
    "pricing.kids": "10 жасқа дейінгі балалар",
    "pricing.free": "3 жасқа дейінгі сәбилер",
    "pricing.free.desc": "тегін тұрады (бөлек төсек орны мен тамақ берілмейді)",
    "pricing.meals.info": "Үй тағамдары толығымен демалыс құнына кіреді. Қажет болса, тамақтануды бөлек сатып алуға болады.",
    "pricing.currency": "₸ / тәулік",

    // Gallery
    "gallery.title": "Әсемдік Галереясы",
    "gallery.subtitle": "Kamariya Resort демалысының сұлулығын объектив арқылы сезініңіз",
    "gallery.cat.all": "Барлығы",
    "gallery.cat.territory": "Аумағы",
    "gallery.cat.dining": "Асхана",
    "gallery.cat.lake": "Алакөлдегі демалыс",

    // Map
    "map.title": "Біз Картадамыз",
    "map.subtitle": "Ақши ауылындағы жағажай сызығына жақын ыңғайлы орналасу",
    "map.btnRoute": "Маршрутты құру",
    "map.address": "Қазақстан, Жетісу облысы, Алакөл ауданы, Ақши шипажайлы ауылы",

    // Contacts
    "contacts.title": "Байланыс & Брондау",
    "contacts.subtitle": "Брондау бойынша сұрақтарыңызға кез келген уақытта жауап беруге дайынбыз",
    "contacts.phone1": "+7 (776) 136-45-73",
    "contacts.phone2": "+7 (707) 351-08-14",
    "contacts.insta": "@alakol_kamariya",
    "contacts.whatsapp": "WhatsApp-қа жазу",
    "contacts.instagram": "Instagram-ға өту",
    "contacts.instaFeed": "Біз Instagram-дамыз",
    "contacts.instaFeedSub": "Демалыс орнының тыныс-тіршілігін тікелей эфирде бақылау үшін парақшамызға жазылыңыз",

    // Footer
    "footer.rights": "Барлық құқықтар қорғалған.",
    "footer.made": "Алакөлде шексіз махаббатпен жасалған",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.rooms": "Rooms",
    "nav.pricing": "Pricing",
    "nav.gallery": "Gallery",
    "nav.contacts": "Contacts",

    // Hero
    "hero.title": "KAMARIYA RESORT",
    "hero.subtitle": "Cozy vacation on the shores of Lake Alakol",
    "hero.location": "Akshi, Kazakhstan",
    "hero.btnRooms": "Explore Rooms",
    "hero.btnWhatsApp": "WhatsApp Booking",
    "hero.scroll": "Scroll Down",

    // About
    "about.title": "An Oasis of Family Comfort",
    "about.subtitle": "About Kamariya Resort",
    "about.desc1": "Kamariya Resort is a modern, homely recreation area located in the resort village of Akshi on the shores of the healing Lake Alakol. Our main goal is to give you and your loved ones a peaceful, harmonious, and unforgettable summer vacation.",
    "about.desc2": "We have taken care of everything: from comfortable rooms with air conditioning to delicious and hearty three-course meals included in the price. The spacious green area of the resort is perfect for safe children's games and leisurely evening strolls under the warm sunset sky, and the warm waters of Alakol are just a short walk from your door.",
    "about.card1.title": "Family Vacation",
    "about.card1.desc": "Quiet and safe atmosphere. Cozy children's playground and gazebos for warm family evenings.",
    "about.card2.title": "Three Meals Included",
    "about.card2.desc": "Home-cooked meals prepared with love. Hearty breakfast, lunch, and dinner are included in your stay.",
    "about.card3.title": "Spacious Grounds",
    "about.card3.desc": "Beautifully landscaped green area with plenty of space for privacy or active outdoor games.",
    "about.card4.title": "Comfortable Rooms",
    "about.card4.desc": "Everything needed for a comfortable stay: air conditioning, a refrigerator, and a private bathroom.",
    "about.card5.title": "Lake Nearby",
    "about.card5.desc": "Just a 5-7 minute leisurely walk along a straight path to the unique pebble beach of Lake Alakol.",

    // Rooms
    "rooms.title": "Cozy Rooms & Cottages",
    "rooms.subtitle": "Your private space designed for deep relaxation and revitalization",
    "rooms.capacity": "Capacity",
    "rooms.capacity.guests": "guests",
    "rooms.amenities": "Room Amenities:",
    "rooms.bookBtn": "Book via WhatsApp",
    "rooms.room1.title": "Wooden Triple Rooms",
    "rooms.room1.desc": "Eco-friendly rooms crafted entirely from natural wood. Suitable for family vacations and comfortable stays near the lake.",
    "rooms.room1.a1": "Air conditioning",
    "rooms.room1.a2": "LED TV",
    "rooms.room1.a3": "Compact refrigerator",
    "rooms.room1.a4": "Private shower & toilet",
    "rooms.room1.a5": "Wardrobe closet",
    "rooms.room1.a6": "Comfortable single beds",
    "rooms.room2.title": "Family Cottages",
    "rooms.room2.desc": "Spacious detached houses designed specifically for large families or groups of 7–9 guests. The perfect choice for those who value space and home independence.",
    "rooms.room2.a1": "Multiple isolated bedrooms",
    "rooms.room2.a2": "Air conditioning in each room",
    "rooms.room2.a3": "LED TV & refrigerator",
    "rooms.room2.a4": "Modern shower cabin",
    "rooms.room2.a5": "Spacious wardrobes",
    "rooms.room2.a6": "Washing machine",
    "rooms.room2.a7": "Comfortable double sofa bed",

    // Pricing
    "pricing.title": "Rates & Seasons",
    "pricing.subtitle": "Transparent seasonal rates with full three-course home-cooked meals included",
    "pricing.badge": "Meals Included",
    "pricing.season1.title": "June 15–30",
    "pricing.season1.subtitle": "Beginning of the summer season",
    "pricing.season2.title": "July 1 – August 15",
    "pricing.season2.subtitle": "Peak season and the warmest water",
    "pricing.season3.title": "August 16–31",
    "pricing.season3.subtitle": "Velvet season",
    "pricing.adults": "Adults",
    "pricing.kids": "Kids under 10",
    "pricing.free": "Infants under 3",
    "pricing.free.desc": "stay free of charge (without extra bed and meals configuration)",
    "pricing.meals.info": "Home-style dining is fully included in the tour package. Meals can also be purchased separately if required.",
    "pricing.currency": "₸ / night",

    // Gallery
    "gallery.title": "Atmosphere Gallery",
    "gallery.subtitle": "Feel the aesthetic of your upcoming vacation at Kamariya Resort through the lens",
    "gallery.cat.all": "All",
    "gallery.cat.territory": "Territory",
    "gallery.cat.dining": "Dining",
    "gallery.cat.lake": "Lake Activities",

    // Map
    "map.title": "Location Map",
    "map.subtitle": "Conveniently located in Akshi village, in close proximity to the beach line",
    "map.btnRoute": "Get Directions",
    "map.address": "Akshi village, Alakol District, Jetysu Region, Kazakhstan",

    // Contacts
    "contacts.title": "Contact & Booking",
    "contacts.subtitle": "We are always online and will gladly help you choose and reserve your room",
    "contacts.phone1": "+7 (776) 136-45-73",
    "contacts.phone2": "+7 (707) 351-08-14",
    "contacts.insta": "@alakol_kamariya",
    "contacts.whatsapp": "Chat on WhatsApp",
    "contacts.instagram": "View Instagram",
    "contacts.instaFeed": "Follow Us on Instagram",
    "contacts.instaFeedSub": "Subscribe to our feed to follow life at the resort in real-time",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.made": "Crafted with love at Alakol",
  },
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("ru");

  useEffect(() => {
    // Load language preference from localStorage if client side
    const saved = localStorage.getItem("kamariya_lang") as Language;
    if (saved && (saved === "ru" || saved === "kk" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("kamariya_lang", lang);
  };

  const t = (key: string): string => {
    const dict = translations[language] as Record<string, string>;
    return dict[key] || translations["ru"][key as keyof typeof translations["ru"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
