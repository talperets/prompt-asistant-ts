type aspectProps = {
  
  setAspect: (aspect: string) => void;
};

export default function Aspect({ setAspect }: aspectProps) {
  return (
    <div>
      <h3 className="text-center text-2xl">Aspect Ratio</h3>
      <button className="hover:bg-slate-700 m-2 p-4 border rounded-xl" onClick={() => setAspect("1:1")}>1:1</button>
      <button className="hover:bg-slate-700 m-2 px-5 rounded-xl py-3 border" onClick={() => setAspect("5:4")}>5:4</button>
      <button className="hover:bg-slate-700 m-2 px-4 rounded-xl py-3 border" onClick={() => setAspect("3:2")}>3:2</button>
      <button className="hover:bg-slate-700 m-2 px-5 rounded-xl py-2 border" onClick={() => setAspect("4:7")}>4:7</button>
      <button className="hover:bg-slate-700 m-2 px-2 rounded-xl py-5 border" onClick={() => setAspect("7:4")}>7:4</button>
    </div>
  );
}
