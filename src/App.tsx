import "./App.css";

function App() {
  return (
    <>
      <div className="text-xs text-red-500"> text-xs</div>
      <div className="text-sm text-[rgb(100,10,200)]"> text-sm</div>
      <div className="text-lg font-bold"> text-lg</div>
      <div className="text-xl font-extrabold"> text-xl</div>
      <div className="text-2xl font-black"> text-2xl</div>
      <div className="text-[20px] text-red-500"> text-[20px]</div>

      <div className="bg-amber-500"> bg-amber-500</div>

      <div className="w-full bg-blue-500">box</div>

      <div className="h-50 w-50 bg-red-400 px-5 py-5 pt-5 pr-5 pb-5 pl-5">
        <div className="h-full w-full bg-blue-500"></div>
      </div>
    </>
  );
}

export default App;
