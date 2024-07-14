import React, { useState } from "react";
import DraggableItem from "./draggableItem";
import DroppableArea from "./droppable";
import { DndContext } from "@dnd-kit/core";

interface DraggableListProps {
  onItemMove: (dragIndex: number, hoverIndex: number) => void;
  label: string;
  required: boolean;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const DraggableList: React.FC<DraggableListProps> = ({
  label,
  onItemMove,
  required,
}) => {
  const [items, setItems] = useState<string[]>([
    "Who are you / what are you working on?",
    "How has [our product / service] helped you?",
    "What is the best thing about [our product / service]",
  ]);

  const handleDragEnd = (event: any) => {
    const { active, over, delta } = event;

    console.log("active id", active.id, "over id", over.id, "delta", delta);
    if (over.id.includes("droppable") && active.id.includes("draggable")) {
      const endId = over.id.split("-")[1];
      const startId = active.id.split("-")[1];
      const itemsCopy = [...items];
      const startElement = itemsCopy[startId];
      const endElement = itemsCopy[endId];
      itemsCopy[startId] = endElement;
      itemsCopy[endId] = startElement;
      console.log("Set items", itemsCopy);
      setItems(itemsCopy);
    }
    // if (active.id !== over.id) {
    //   setItems((items) => {
    //     const oldIndex = items.indexOf(active.id);
    //     const newIndex = items.indexOf(over.id);

    //     return arrayMove(items, oldIndex, newIndex);
    //   });
    // }
  };

  return (
    <div>
      {label && (
        <div className="flex">
          <label className="text-gray-700">{label}</label>
          {required && <span className="text-red-600">*</span>}
        </div>
      )}
      <DndContext onDragEnd={handleDragEnd}>
        {items.map((item, index) => (
          <DroppableArea id={`droppable-${index}`}>
            <DraggableItem index={index} item={item} />
          </DroppableArea>
        ))}
      </DndContext>
    </div>
  );
};

export default DraggableList;
