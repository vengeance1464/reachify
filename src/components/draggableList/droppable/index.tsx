// components/DroppableArea.js

import { useDroppable } from "@dnd-kit/core";
type DroppableProps = {
  id: string;
  children: React.ReactNode;
};
const DroppableArea: React.FC<DroppableProps> = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    backgroundColor: isOver ? "lightgray" : "white",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default DroppableArea;
