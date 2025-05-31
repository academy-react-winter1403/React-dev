import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { getItemLocalStorage } from "../../hooks/local-storage/getItemLocalStorage";

i18n.use(initReactI18next).init({
  // fallbackLng: (getItemLocalStorage('lang') === false ? 'fa' : getItemLocalStorage('lang')),
  fallbackLng: getItemLocalStorage("lang") || "fa",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        // hearder
        home: "Home",
        courses: "courses",
        teachers: "Teachers",
        articles: "Articles & News",
        contact: "Contact Us",
        // Buttons
        userAccount: "User Account",
        Login: "Login",
        Register: "Register",
        // landing Hero section
        students: "Students",
        sepehrAcademy: "Sepehr Academy",
        heroText: `The live and interactive web programming academy<br/>Access to over 7000 educational videos in Persian`,
        headerSearchText: "What are you looking for? ...",
        // landing titles
        categoryTitle: "Most Popular Categories",
        categoryDesc: "A wide range of top-rated courses",
        courseTitle: "Courses",
        courseDesc: "The most up-to-date courses you can find",
        allCourses: "All Courses",
        servicesTitle: "Our Services",
        servicesDesc: "A collection of everything you need",
        newsSectionTitle: "Articles & News",
        newsSectionExp: "Keep yourself informed",
        newsSectionViewMore: "View More",
        // landing category
        webDesign: "Web Design",
        dataAnalysis: "Data Analysis",
        gameDevelopment: "Games",
        networkSecurity: "Security",
        // landing best teacher
        bestTeachersTitle: "Top Teachers",
        bestTeachersIntro: "are right here for you!!",
        bestTeachersDesc:
          "Get to know the top instructors from the biggest programming academy!",
        // landing services

        serviceConsultingTitle: "Consulting",
        serviceConsultingDesc:
          "Placeholder text used in the design  printing industry for graphic designers.",

        serviceJobOpportunitiesTitle: "Job Opportunities",
        serviceJobOpportunitiesDesc:
          "Placeholder text used in the design  printing industry for graphic designers.",

        serviceCertifiedTitle: "Certified Degree",
        serviceCertifiedDesc:
          "Placeholder text used in the design  printing industry for graphic designers.",
        // landing news
        sensoryMarketing:
          "Sensory marketing: A simple and low-cost way to increase sales",
        onlineWorld: "Online world; a way to increase sales",
        knowCustomerNeeds: "Know your customer's needs to increase income",
        wordOfMouth: "Attract customers through word-of-mouth advertising",
        enterOnlineWorld:
          "Entering the online world; a sure way to increase sales",
        whereFindCustomers: "Where to find customers? Ways to find customers",
        // Footer
        footerItemsP1: ["Courses", "Articles & News", "Podcasts", "Contact Us"],
        footerItemsP2: ["Top Teachers", "Categories", "Our Services", "Login"],
        footerAbout:
          "Sepehr Academy started its activity in 2011 and has become the largest programming community in northern Iran.",
        footerAddress:
          "Sari, Khazar Square, Farahabad Road, next to Donyaye Arezoo Complex - 011-43332000",
        footerCopyRight: "All rights of this website belong to Sepehr Academy.",
        // courses
        topSectionTitle: "Courses",
        topSectionDesc: "The most up-to-date courses you can find",
        topSectionPlaceholder: "What do you want to learn? ...",
        filters: "Filters",
        technology: "Technology",
        courseStatus: "Course Status",
        level: "Level",
        price: "Price",
        items: "item",
        filtersBy: "Filters by ",
        mostPopular: "Most Popular",
        Newest: "Newest ",
        Ascending: "Ascending ",
        Descending: "Descending",
        // Authorize
        loginTitle: "Login to your account",
        phoneOrEmail: "Phone number or email",
        password: "Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot password?",
        login: "Login",
        register: "Register",
        confirmation_code: "Confirmation Code",
        code_sent_to: "A confirmation code has been sent to",
        if_incorrect: ". If incorrect, click on",
        edit: "Edit",
        Click: "Click",
        create_account: "Create Account",
        phone_number: "Phone Number",
        get_code: "Get Confirmation Code",
        please_enter_code: "Please enter the confirmation code",
        already_registered: "You have already registered",
        invalid_phone: "Invalid phone number",
        required_phone: "Phone number is required",
        enter: "enter",
      }
    },
    fa: {
      translation: {
        // header
        home: "صفحه نخست",
        courses: "دوره ها",
        teachers: "اساتید",
        articles: "اخبار و مقالات",
        contact: "تماس با ما",
        // Buttons
        userAccount: "حساب کاربری",
        Login: "ورود",
        Register: "ثبت نام",
        // landing Hero section
        students: "دانشجو",
        sepehrAcademy: "آکادمی سپهر",
        heroText: `مرجع آموزش زنده و تعاملی برنامه نویسی حوزه وب<br/>با دسترسی به بیش از هفت هزار ویدیوی آموزشی به زبان فارسی`,
        headerSearchText: "دنبال چی می گردی؟ ...",
        // landing titles
        categoryTitle: "محبوب ترین دسته بندی ها",
        categoryDesc: "گستره وسیعی از محبوب ترین دوره ها",
        courseTitle: "دوره های آموزشی",
        courseDesc: "به روز ترین دوره هایی که میتونید پیدا کنید",
        allCourses: "همه دوره ها",
        servicesTitle: "خدمات ما",
        servicesDesc: "مجموعه ای از تمام آنچه شما نیاز دارید",
        newsSectionTitle: "اخبار و مقالات",
        newsSectionExp: "خـــودت رو با خـــبر کن !",
        newsSectionViewMore: "مشاهده بیشتر",

        // landing category
        webDesign: "طراحی صفحات وب",
        dataAnalysis: "تحلیل داده",
        gameDevelopment: "بازی سازی",
        networkSecurity: "امنیت شبکه",
        //  landing best teacher
        bestTeachersTitle: "برترین اساتید",
        bestTeachersIntro: "رو همینجا پیدا می کنید!!",
        bestTeachersDesc:
          "برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی استان مازندران رو بهتر بشناسیم !",
        // landing services

        serviceConsultingTitle: "مشاوره",
        serviceConsultingDesc:
          "متن ساختگی صنعت طراحی و چاپ برای \n استفاده طراحان گرافیک است.",

        serviceJobOpportunitiesTitle: "فرصت های شغلی",
        serviceJobOpportunitiesDesc:
          "متن ساختگی صنعت طراحی و چاپ برای \n استفاده طراحان گرافیک است.",

        serviceCertifiedTitle: "مدرک معتبر",
        serviceCertifiedDesc:
          "متن ساختگی صنعت طراحی و چاپ برای \n استفاده طراحان گرافیک است.",
        // landing news
        sensoryMarketing:
          "بازاریابی حسی راهی ساده و کم هزینه \n برای افزایش فروش",
        onlineWorld: "دنیای آنلاین؛ راهی برای افزایش فروش",
        knowCustomerNeeds: "نیازهای مشتری را بشناسید تا درآمدتان بیشتر شود",
        wordOfMouth: "جذب مشتری با تبلیغات دهان به دهان",
        enterOnlineWorld:
          "ورود به دنیای آنلاین; راهی مطمین برای \n افزایش فروش",
        whereFindCustomers: "از کجا مشتری پیدا کنم؟ راه‌های پیدا کردن مشتری",
        // Footer
        footerItemsP1: ["دوره ها", "اخبار و مقالات", "پادکست ها", "تماس با ما"],
        footerItemsP2: [
          "اساتید برتر",
          "دسته بندی ها",
          "خدمات ما",
          "ورود به حساب",
        ],
        footerAbout:
          "مجموعه آموزشی فلان فعالیت خود را از سال ۱۳۹۰ آغاز کرده است و امروز به بزرگترین کلونی برنامه نویسی شمال کشور تبدیل شده است",
        footerAddress:
          "ساری ، میدان خــزر ، جــاده فــرح آباد ، جنب مجتمع دنیای آرزو ۰۱۱ - ۴۳۳۳۲۰۰۰",
        footerCopyRight: "کلیه حقوق این وب سایت متعلق به آموزشگاه فلان می باشد",
        // courses
        topSectionTitle: "دوره های آموزشی",
        topSectionDesc: "به روز ترین دوره هایی که میتونید پیدا کنید",
        topSectionPlaceholder: "چی میخوای یاد بگیری؟...",
        filters: "فیلترها",
        technology: "تکنولوژی",
        courseStatus: "وضعیت",
        level: "سطح",
        price: "قیمت",
        items: "آیتم",
        filtersBy: "فیلتر بر اساس : ",
        mostPopular: " پرطرفدارترین",
        Newest: "جدیدترین ",
        Ascending: "صعودی ",
        Descending: "نزولی",
        // Authorize
        loginTitle: "ورود حساب کاربری",
        phoneOrEmail: "شماره همراه یا ایمیل",
        password: "رمز عبور",
        rememberMe: "مرا به خاطر بسپار",
        forgotPassword: "فراموشی رمز عبور",
        login: "وارد شوید",
        register: "ثبت نام",
        confirmation_code: "کد تایید",
        code_sent_to: "کد تایید به شماره",
        if_incorrect: "ارسال شده است، در صورت مغایرت روی",
        edit: "ویرایش",
        Click: "کلیک کنید",
        create_account: "ایجاد حساب کاربری",
        phone_number: "شماره همراه",
        get_code: "دریافت کد تایید",
        please_enter_code: "لطفا  کد تایید را وارد نمایید",
        already_registered: "شما قبلا ثبت نام کرده‌اید",
        invalid_phone: "شماره تلفن معتبر نیست",
        required_phone: "شماره تلفن الزامی است",
        enter: "ورود",
      },
    },
  },
});

export default i18n;
