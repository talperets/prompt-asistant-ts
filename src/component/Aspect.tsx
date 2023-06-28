type aspectProps = {
  setAspect: (aspect: string) => void;
};

export default function Aspect({ setAspect }: aspectProps) {
  return (
    <div>
      <h3 className="text-center text-2xl">Aspect Ratio</h3>
      <button
        className="m-2 rounded-xl border p-4 hover:bg-slate-700 focus:bg-green-600"
        onClick={() => setAspect("1:1")}>
        1:1
      </button>
      <button
        className="m-2 rounded-xl border px-5 py-3 hover:bg-slate-700 focus:bg-green-600"
        onClick={() => setAspect("5:4")}>
        5:4
      </button>
      <button
        className="m-2 rounded-xl border px-4 py-3 hover:bg-slate-700 focus:bg-green-600"
        onClick={() => setAspect("3:2")}>
        3:2
      </button>
      <button
        className="m-2 rounded-xl border px-2 py-5 hover:bg-slate-700 focus:bg-green-600"
        onClick={() => setAspect("4:7")}>
        4:7
      </button>
      <button
        className="m-2 rounded-xl border px-5 py-2 hover:bg-slate-700 focus:bg-green-600"
        onClick={() => setAspect("7:4")}>
        7:4
      </button>
    </div>
  );
}
