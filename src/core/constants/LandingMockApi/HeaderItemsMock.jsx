export const HeaderItemsText = [
   { name: "صفحه نخست", path: "/" },
   { name: "دوره ها", path: "/courses" },
   { name: "اساتید", path: "/teachers" },
   { name: "اخبار و مقالات", path: "/ArticlesAndNews" },
   { name: "تماس با ما", path: "/contact" }
 ];
 

export const getHeaderItems = (t) => [
  { name: t('home'), path: '/' },
  { name: t('courses'), path: '/courses' },
  { name: t('teachers'), path: '/teachers' },
  { name: t('articles'), path: '/ArticlesAndNews' },
  { name: t('contact'), path: '/contact' }
];