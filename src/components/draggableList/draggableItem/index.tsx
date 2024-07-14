import InputElement from "@/components/inputElement";
import { useDraggable } from "@dnd-kit/core";
import MoreActions from "../../../../public/assets/moreActions";

interface DraggableItemProps {
  index: number;
  item: string;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ index, item }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${index}`,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      key={index}
      style={style}
      className="flex items-center"
    >
      <div {...listeners} {...attributes}>
        <MoreActions />
      </div>
      <div>
        <InputElement defaultValue={item} type="text" name="item" required />
      </div>
    </div>
  );
};

export default DraggableItem;
