import React from "react";
import Search from "./svgs/Search";
import FilterIcon from "./svgs/FilterIcon";

function SearchSection() {
  const [search, setSearch] = React.useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="search-box w-full borde flex flex-row items-center borde">
      <div className="search-div flex items-center flex-1 borde">
        <Search />
        <input
          type="text"
          value={search}
          onChange={() => handleChange()}
          placeholder="Search or start new chat"
          className="csb borde flex-1 outline-none"
        />
      </div>

      <div className="filter-icon">
        <FilterIcon />
      </div>
    </div>
  );
}

export default SearchSection;
