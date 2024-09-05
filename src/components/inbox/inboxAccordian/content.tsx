import AIIcon from "../../../../public/assets/ai";
import Delete from "../../../../public/assets/delete";

const AccordianContent: React.FC = () => {
  const menuTiles = [
    {
      text: "AI",
      icon: <AIIcon />,
    },
    {
      text: "Delete",
      icon: <Delete />,
    },
  ];
  return (
    <div className="flex items-center gap-2">
      {menuTiles.map((tile, index) => (
        <div className="flex text-[#D9E3EA]">
          {tile.icon}
          {tile.text}
        </div>
      ))}
    </div>
  );
};

export default AccordianContent;
