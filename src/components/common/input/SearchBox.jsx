import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchCircleSharp } from "react-icons/io5";
import { pagesList } from "../../../core/constants/PageLinks/PageLinks";

const SearchBox = ({ placeholder, inputChange, onClick, children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPages, setFilteredPages] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    inputChange(value)

    if (value.trim() === "") {
      setFilteredPages([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = pagesList.filter((page) =>
      page.name.includes(value)
    );

    setFilteredPages(filtered);
    setShowSuggestions(true);
  };

  const handleSelect = (path) => {
    navigate(path);
    setSearchTerm("");
    setFilteredPages([]);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && filteredPages.length > 0) {
      handleSelect(filteredPages[0].path);
    }
  };

  return (
    <div className="relative w-full" data-aos="fade-left">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-[#FAFAFA] backdrop-blur-[5px] outline-0 shadow-sm border-[1px] border-[#DFDFDF80] rounded-[35px] pt-[10px] pb-[13px] px-[4px] indent-[12px] text-[#424242]"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClick={onClick}
      />
      <IoSearchCircleSharp
        color="#D47300"
        size={42}
        style={{ position: "absolute", top: "3px", left: "0" }}
      />
      {showSuggestions && filteredPages.length > 0 && (
        <ul className="absolute top-full mt-1 w-full bg-white rounded-lg shadow z-50 max-h-[200px] overflow-auto">
          {filteredPages.map((page, index) => (
            <li
              key={index}
              onClick={() => handleSelect(page.path)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-right"
            >
              {page.name}
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
};

export default SearchBox;
