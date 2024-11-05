import React, { useState } from "react";
import DraggableItem from "./draggableItem";
import DroppableArea from "./droppable";
import { DndContext } from "@dnd-kit/core";

interface DraggableListProps {
  // onItemMove: (dragIndex: number, hoverIndex: number) => void;
  label: string;
  required: boolean;
  items: any;
  setItems: any;
  register: any;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const DraggableList: React.FC<DraggableListProps> = ({
  label,
  // onItemMove,
  required,
  items,
  setItems,
  register,
}) => {
  const handleDragEnd = (event: any) => {
    const { active, over, delta } = event;

    console.log("active id", active.id, "over id", over.id, "delta", delta);
    if (over.id.includes("droppable") && active.id.includes("draggable")) {
      const endId = over.id.split("-")[1];
      const startId = active.id.split("-")[1];
      const itemsCopy = [...items.items];
      const startElement = itemsCopy[startId];
      const endElement = itemsCopy[endId];
      itemsCopy[startId] = endElement;
      itemsCopy[endId] = startElement;
      console.log("Set items", itemsCopy);
      setItems((items: any) => {
        return { ...items, items: itemsCopy };
      });
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
    <div className="w-full">
      {label && (
        <div className="flex">
          <label className="text-gray-700">{label}</label>
          {required && <span className="text-red-600">*</span>}
        </div>
      )}
      <DndContext onDragEnd={handleDragEnd}>
        {items.items.map((item: any, index: number) => (
          <DroppableArea key={`droppable-${index}`} id={`droppable-${index}`}>
            <DraggableItem
              key={item}
              index={index}
              name={`${items.namePrefix}.${
                item.nameSuffix ? item.nameSuffix : item.id
              }.name`}
              register={register}
              item={item.text}
            />
          </DroppableArea>
        ))}
      </DndContext>
    </div>
  );
};

export default DraggableList;
