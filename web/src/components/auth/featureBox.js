const FeatureBox = ({ title }) => {
  return (
    <div
      className="w-full py-2 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent border-2 border-slate-900
     px-2 text-center rounded"
    >
      {title}
    </div>
  );
};

export default FeatureBox;
