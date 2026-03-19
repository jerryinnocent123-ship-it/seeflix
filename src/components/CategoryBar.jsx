import "./categoryBar.css";

export default function CategoryBar() {
  return (
    <div className="category-bar">
      
      {/* Search */}
      <div className="search-box">
        <input type="text" placeholder="Search movies or series..." />
      </div>

      {/* Categories */}
      <div className="category-buttons">
        <button className="active">All</button>
        <button>Movies</button>
        <button>TV Shows</button>
      </div>

    </div>
  );
}