const InputBox = ({ icon, type, placeholder, value, handleChange }) => {
  return (
    <div className="w-full relative">
      <div className="absolute size-10 flex justify-center items-center text-slate-400">
        <i className={`fa fa-${icon}`}></i>
      </div>
      <input
        type={type}
        className="w-full bg-transparent pl-10 px-2 py-2 text-sm text-slate-300 border-2 border-slate-500 rounded-lg outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        required
      />
    </div>
  );
};

export default InputBox;
