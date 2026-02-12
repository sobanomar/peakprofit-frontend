export const MovingBorderButton = ({
  onClick,
  children,
  className,
  shadow,
}) => {
  return (
    <div className="flex items-center justify-center w-full  mx-auto ">
      {/* Container acting as the outer border box */}
      <div
        className={
          "relative  transition-shadow duration-300 z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl  p-[1.5px] hover:" +
          shadow
        }
      >
        {/* The rotating beam */}
        <div className="absolute inset-0 h-full w-full rounded-full bg-conic-beam animate-border"></div>

        {/* The actual button content */}
        <button
          onClick={onClick}
          // className="relative z-20 flex w-full items-center justify-center rounded-[10px]  px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1e293b] border-none bg-purple-900"
          className={
            "relative  z-20 flex w-full items-center justify-center rounded-[10px] " +
            className
          }
        >
          {children}
        </button>
      </div>
    </div>
  );
};
