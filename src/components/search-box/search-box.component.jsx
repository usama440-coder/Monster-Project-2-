import "./search-box.styles.css";

const SearchBox = ({ className, onChange }) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder="search monsters"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
