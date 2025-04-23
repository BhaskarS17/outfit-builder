import { useDrag } from "react-dnd";
import "./index.css"; // Ensure you have the correct path to your CSS file

const ClothingItem = ({ id, icon, onClickItem }) => {
  const [, drag] = useDrag({
    type: "CLOTHING_ITEM",
    item: { id, icon },
  });

  return (
    <div className="ClothingItemContainer">
      <img
        ref={drag}
        src={icon}
        className="ClothingItemImage"
        onClick={onClickItem}
        alt={`Clothing item ${id}`}
      />
    </div>
  );
};

export default ClothingItem;