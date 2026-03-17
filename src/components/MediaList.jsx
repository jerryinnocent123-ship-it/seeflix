import MediaCards from "./MediaCards";
import "./mediaList.css";


function MediaList({title, items}) {
  return (
    <div className="list-media">
      {/* titre la */}
      <h2 className="media-title">{title}</h2>

      {/* cards yo */}
      <div className="media-cards">
        {items.map((item) => (


           <MediaCards
            key={item.id}
            title={item.title}
            cover={item.cover}
            rating={item.rating}
            type={item.type}
          />



        ))}


      </div>
    </div>
  );
}
export default MediaList;

