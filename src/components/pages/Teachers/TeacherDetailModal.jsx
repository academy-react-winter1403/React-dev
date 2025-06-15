import React from "react";
import { useQuery } from "react-query";
import { htttp } from "../../../core/services/interceptor";
import { IoClose } from "react-icons/io5";
import defaultImage from "../../../assets/pics/teachers/teacher.png";
import { useTranslation } from "react-i18next";

const fetchTeacherById = async (id) => {
  const res = await htttp.get(`/Home/GetTeacherDetails?TeacherId=${id}`);
  return res.data.data || res.data;
};

const TeacherDetailModal = ({ teacherId, onClose }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

  const {
    data: teacher,
    isLoading,
    error,
  } = useQuery(["teacher", teacherId], () => fetchTeacherById(teacherId), {
    enabled: !!teacherId,
  });

  if (!teacherId) return null;
  if (isLoading) return null;
  if (error) return <p>{t("errorLoadingTeacher")}</p>;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center font-b-yekan">
      <div className="relative w-[916px] h-[457px] bg-black/70 rounded-[24px] flex overflow-hidden text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
        >
          <IoClose />
        </button>

        {/* Content */}
        <div
          // className="flex w-full flex-row justify-between gap-20  m-20"
          className={`flex w-full justify-between gap-20 m-20 ${
            isRTL ? "flex-row" : "flex-row-reverse"
          }`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* Right: Image */}
          <div className="w-[40%] h-full flex justify-center items-center p-4 ">
            <img
              src={teacher.pictureAddress || defaultImage}
              onError={(e) => (e.target.src = defaultImage)}
              alt={teacher.fullName}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          {/* Left: Info */}
          <div className="flex-1 flex flex-col justify-center p-6 text-lg gap-2 whitespace-nowrap ">
            <h2 className="text-xl font-bold">{teacher.fullName}</h2>
            <p>
              {t("courseCount")}: {teacher.courseCounts} {t("course")}
            </p>
            <p>
              {t("articleCount")}: {teacher.newsCount} {t("article")}
            </p>
            <p>
              {t("socialMedia")}: {teacher.socialMediaName || "-"}
            </p>
            <a
              href={teacher.socialMediaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 underline mt-2 cursor-pointer"
            >
              {t("link")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetailModal;
