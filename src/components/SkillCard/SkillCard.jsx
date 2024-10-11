const SkillCard = ({ skill }) => {
  return (
    <div className="flex justify-center">
      <button className="flex justify-center items-center px-4 gap-2 py-2 bg-gradient-to-r from-orange-400 to-black rounded-lg shadow-lg transition duration-300 transform hover:bg-orange-600 hover:scale-105">
        <span className="text-white font-semibold text-xl">{skill?.name}</span>
        <span>{skill?.icon}</span>
      </button>
    </div>
  );
};

export default SkillCard;
