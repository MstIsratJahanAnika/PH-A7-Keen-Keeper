const StateCard = ({ value, title }) => {
  return (
    <div className="p-8 bg-white text-center shadow rounded-lg space-y-2">
      <h3 className="text-[#244D3F] font-semibold text-[32px]">
        {value}
      </h3>

      <p className="text-[#64748B] text-[14px] md:text-[18px]">
        {title}
      </p>
    </div>
  );
};

export default StateCard;