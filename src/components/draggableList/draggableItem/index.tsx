import { useDraggable } from "@dnd-kit/core";
import MoreActions from "../../../../public/assets/moreActions";
import Delete from "../../../../public/assets/delete";
import InputTextElement from "@/components/inputElements/inputTextBox";

interface DraggableItemProps {
  index: number;
  item: string;
  name: string;
  register: any;
}

const DraggableItem: React.FC<DraggableItemProps> = ({
  index,
  item,
  name,
  register,
}) => {
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
      <div className="flex items-center">
        <InputTextElement
          //classes="w-full"
          defaultValue={item}
          //type="text"
          name={name}
          register={register}
          required
        />
        <Delete />
      </div>
    </div>
  );
};

export default DraggableItem;
