import i18n from "../../utility/Bilingual/I18n";

// onClick={() => {
//   i18n.changeLanguage("en");
//   localStorage.setItem("lang", "en");
// }}

// onClick={() => {
//   i18n.changeLanguage("fa");
//   localStorage.setItem("lang", "fa");
// }}

onClick={() => {
  localStorage.setItem("lang", "en");
  i18n.changeLanguage("en");
  document.documentElement.setAttribute("dir", "ltr");
}}

onClick={() => {
  localStorage.setItem("lang", "fa");
  i18n.changeLanguage("fa");
  document.documentElement.setAttribute("dir", "rtl");
}}
