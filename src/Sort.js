import { useFilterContext } from "./context/filter_context";

const Sort = () => {
  const { sort, updateSort } = useFilterContext();
  return (
    <div className="input-container">
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          className="select"
          name="sort"
          value={sort}
          onChange={updateSort}
          id="sort"
        >
          <option value="max-likes">Max likes</option>
          <option value="max-views">Max Views</option>
          <option value="max-share">Max share</option>
          <option value="dates">Date</option>
        </select>
      </form>
    </div>
  );
};
export default Sort;
