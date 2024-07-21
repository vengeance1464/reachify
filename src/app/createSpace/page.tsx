import SpaceCard from "@/components/spaceCard";

const CreateSpace = () => {
  return (
    <div
      style={{
        backgroundColor:
          "radial-gradient(#d7e0ea 18.75%, transparent 0) 2px 2px / 10px 10px #ecf0f5",
      }}
      className="w-screen  h-screen bg-[#cbd5e1] flex  justify-center overflow-scroll"
    >
      <SpaceCard />
    </div>
  );
};

export default CreateSpace;
