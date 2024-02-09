const WhyCard = ({ title, description, idx }) => {
  return (
    <div className="flex justify-between items-center gap-x-4 bg-slate-900 border-4 border-slate-300 p-4 rounded-lg w-full md:w-2/4">
      <div className="size-16 bg-slate-700 rounded flex justify-center items-center text-4xl font-bold">
        {idx} </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default WhyCard;
