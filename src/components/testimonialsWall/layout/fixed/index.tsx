const FixedLayout: React.FC<any> = ({ width = 0.34, gap = 2, children }) => {
  return (
    <div
      className={`grid grid-cols-[repeat(2,_minmax(0,_${width}fr))] gap-${gap}`}
    >
      {children}
    </div>
  );
};

export default FixedLayout;
