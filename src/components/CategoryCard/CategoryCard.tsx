import "./CategoryCard.scss";
import { Link } from "react-router-dom";
import { Card } from "../../../data";

const CategoryCard = ({ card }: { card: Card }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
