const HowToStepper = () => {
  return (
    <ol class="flex justify-center items-center w-full">
      <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-purple-500 after:border-4 after:inline-block">
        <div className="w-80 flex flex-col gap-y-3 items-center text-slate-300 bg-slate-800 rounded-xl px-2 py-3 border-4 border-purple-500">
          <div className="text-xs size-8 font-bold bg-purple-600 flex justify-center items-center rounded">
            <i class="fa fa-upload"></i>
          </div>
          <div className="font-bold text-xl text-slate-300">Upload Video</div>
        </div>
      </li>
      <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-purple-500 after:border-4 after:inline-block">
        <div className="w-80 flex flex-col gap-y-3 items-center text-slate-300 bg-slate-800 rounded-xl px-2 py-3 border-4 border-purple-500">
          <div className="text-xs size-8 font-bold bg-purple-600 flex justify-center items-center rounded">
            <i class="fa fa-edit"></i>
          </div>
          <div className="font-bold text-xl text-slate-300">
            Select Style
          </div>
        </div>
      </li>
      <li class="flex items-center items-center">
        <div className="w-48 flex flex-col gap-y-3 items-center text-slate-300 bg-slate-800 rounded-xl px-2 py-3 border-4 border-purple-500">
          <div className="text-xs size-8 font-bold bg-purple-600 flex justify-center items-center rounded">
            <i class="fa fa-download"></i>
          </div>
          <div className="font-bold text-xl text-slate-300">Download Video</div>
        </div>
      </li>
    </ol>
  );
};

export default HowToStepper;
