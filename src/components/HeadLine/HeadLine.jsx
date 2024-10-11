const UnderlinedText = ({ children }) => {
  return (
    <div className="relative group w-fit my-4">
      <h2 className="text-lg md:text-xl font-bold text-center cursor-pointer">
        {children}
      </h2>
      <div className="relative w-full h-0.5 bg-gray-500 mt-3">
        {/* Gray line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-6 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-primary"></div>
      </div>
    </div>
  );
};

export default UnderlinedText;
