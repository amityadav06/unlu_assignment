import { useAppContext } from "./context/app_context";

const Buttons = () => {
  const { feed_loading: loading, page, handlePage } = useAppContext();

  return (
    <div className="btn-container">
      <button disabled={loading} onClick={() => handlePage("dec")}>
        prev
      </button>
      <p>Page: {page + 1}</p>
      <button disabled={loading} onClick={() => handlePage("inc")}>
        next
      </button>
    </div>
  );
};
export default Buttons;
