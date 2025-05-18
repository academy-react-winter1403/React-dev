import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getItemLocalStorage } from '../../hooks/local-storage/getItemLocalStorage';


i18n.use(initReactI18next)
    .init({
        // fallbackLng: (getItemLocalStorage('lang') === false ? 'fa' : getItemLocalStorage('lang')),
        fallbackLng: getItemLocalStorage('lang') || 'fa',
        interpolation: {
            escapeValue: false,
        },
        resources:{
      en: {
        translation: { 
          // hearder
          home: 'Home', courses: 'courses',  teachers: "Teachers", articles: "Articles & News",  contact: "Contact Us",
          // Buttons
          userAccount: 'User Account', Login: 'Login', Register: 'Register',
          // landing Hero section
          students: 'Students', sepehrAcademy: 'Sepehr Academy', heroText: `The live and interactive web programming academy<br/>Access to over 7000 educational videos in Persian`,
         }
      },
      fa: {
        translation: { 
          // header
          home: "صفحه نخست", courses: 'دوره ها', teachers: "اساتید", articles: "اخبار و مقالات", contact: "تماس با ما",
          // Buttons
          userAccount: 'حساب کاربری', Login: 'ورود', Register: 'ثبت نام',
           // landing Hero section
          students: 'دانشجو', sepehrAcademy: 'آکادمی سپهر', heroText: `مرجع آموزش زنده و تعاملی برنامه نویسی حوزه وب<br/>با دسترسی به بیش از هفت هزار ویدیوی آموزشی به زبان فارسی`,
         }
      },
    },
  });

export default i18n;
