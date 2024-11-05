const AnimatedLayout: React.FC<any> = ({ children, width = 1, gap = 0.2 }) => {
  // const resetAnimation = () => {
  //   isAnimating = false;
  //   container.style.animation = "none";
  //   container.style.transform = "translateY(0)";
  //   setTimeout(startAnimation, 10); // Small delay to restart animation
  // };
  return (
    <div className={`grid grid-cols-2 gap-${gap}`}>
      {children &&
        children.length > 0 &&
        children.map((item) => (
          <div key={item} className="relative animate-marquee-infinite">
            {item}
          </div>
        ))}
    </div>
  );
};

export default AnimatedLayout;
