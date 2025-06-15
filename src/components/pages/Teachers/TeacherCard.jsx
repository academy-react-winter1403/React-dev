import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { useSelector } from "react-redux"; 
import { htttp } from "../../../core/services/interceptor";
import { FaChevronDown } from "react-icons/fa";
import defaultt from "../../../../src/assets/pics/teachers/teacher.png";
import TeacherDetailModal from "./TeacherDetailModal";

const fetchTeachers = async () => {
  const res = await htttp.get("/Home/GetTeachers");
  const result = res.data;

  if (Array.isArray(result)) {
    return result;
  } else if (Array.isArray(result.data)) {
    return result.data;
  } else {
    console.warn("Unexpected response format:", result);
    return [];
  }
};

const TeacherCard = () => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "fa";
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedTeacherId, setSelectedTeacherId] = useState(null);

  
  const searchQuery = useSelector((state) => state.teachersQuery.query);

  const {
    data: teachers = [],
    isLoading,
    error,
  } = useQuery(["teachers"], fetchTeachers, {
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const defaultImage = defaultt;

  
  const filteredTeachers = teachers.filter((teacher) =>
    teacher.fullName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleTeachers = filteredTeachers.slice(0, visibleCount);

  if (isLoading) return <p>{t("loading")}...</p>;
  if (error) return <p>{t("errorLoadingTeachers")}</p>;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleTeachers.map((teacher) => (
          <div
            key={teacher.id}
            onClick={() => setSelectedTeacherId(teacher.teacherId)}
            className="flex flex-col items-center rounded-lg p-4 cursor-pointer hover:shadow-xl"
          >
            <img
              src={teacher.pictureAddress || defaultImage}
              alt={teacher.fullName || "Unknown"}
              className="w-full h-3/4 object-cover rounded-lg mb-2"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultImage;
              }}
            />
            <p className="text-center font-semibold text-[var(--footer-text)]">
              {teacher.fullName || "Unknown"}
            </p>
          </div>
        ))}
      </div>

      {visibleCount < filteredTeachers.length && (
        <button
          onClick={handleViewMore}
          className="mt-6 text-[var(--teacher-sub-title)] cursor-pointer flex flex-col items-center gap-1"
        >
          {t("viewMore")}
          <FaChevronDown className="text-[var(--teacher-sub-title)] text-sm" />
        </button>
      )}

      {selectedTeacherId && (
        <TeacherDetailModal
          teacherId={selectedTeacherId}
          onClose={() => setSelectedTeacherId(null)}
        />
      )}
    </div>
  );
};

export default TeacherCard;
