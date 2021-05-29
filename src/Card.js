import Buttons from "./Buttons";
import { useAppContext } from "./context/app_context";
import Error from "./pages/Error";
import { BoxLoading } from "react-loadingg";
import { FaShare, FaEye, FaThumbsUp } from "react-icons/fa";

const Card = () => {
  const { feed_loading: loading, feed_error: error, feeds } = useAppContext();

  if (loading) {
    return <BoxLoading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <section className="feed-container">
      {feeds.map((item, index) => {
        const {
          id,
          thumbnail_image,
          event_name,
          event_date,
          views,
          likes,
          shares
        } = item;
        return (
          <article className="feed" key={id}>
            <h3 className="title">{event_name}</h3>
            <img className="image" src={thumbnail_image} alt={event_name} />
            <div className="info">
              <p>
                <FaEye /> Views: {views}
              </p>
              <p>
                <b>Date:</b> {event_date}
              </p>
              <p>
                <FaThumbsUp className="icon" />: {likes}
              </p>
              <p>
                <FaShare className="icon" /> shares: {shares}{" "}
              </p>
            </div>
          </article>
        );
      })}
      <Buttons />
    </section>
  );
};
export default Card;
