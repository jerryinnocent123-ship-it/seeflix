import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles/categoryBar.css";

export default function CategoryBar({ onSearchChange, onCategoryChange }) {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <div className="category-bar">
      
      {/* Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder={t("searchPlaceholder")}
          value={searchText}
          onChange={handleSearch}
        />
      </div>

      {/* Categories */}
      <div className="category-buttons">
        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => handleCategory("All")}
        >
          {t("all")}
        </button>
        <button
          className={selectedCategory === "Movies" ? "active" : ""}
          onClick={() => handleCategory("Movies")}
        >
          {t("movies")}
        </button>
        <button
          className={selectedCategory === "TV Shows" ? "active" : ""}
          onClick={() => handleCategory("TV Shows")}
        >
          {t("tvShows")}
        </button>
      </div>

    </div>
  );
}