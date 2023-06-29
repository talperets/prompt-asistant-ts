    type ligthingProps = {
  lighting: string;
  setLighting: (str: string) => void;
};

export default function Lighting({ lighting, setLighting }: ligthingProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-center text-2xl">Lighting</h3>
      <div className="flex flex-col">
        <button
          className="small-btn focus:bg-green-600"
          onClick={() => setLighting("studio lighting")}>
          Studio
        </button>
        <button
          className="small-btn focus:bg-green-600"
          onClick={() => setLighting("ring light")}>
          Ring Light
        </button>
        <button
          className="small-btn focus:bg-green-600"
          onClick={() => setLighting("soft lighting")}>
          Soft Light
        </button>
        <button
          className="small-btn focus:bg-green-600"
          onClick={() => setLighting("neon lighting")}>
          Neon
        </button>
        <button
          className="small-btn focus:bg-green-600"
          onClick={() => setLighting("natural daylight")}>
          Daylight
        </button>
        <button
          className="small-btn focus:bg-green-600"
          onClick={() => setLighting("natural nighttime")}>
          Night
        </button>
        <input
          type="text"
          value={lighting}
          className="textField"
          placeholder="Custom"
          onChange={(e) => setLighting(e.target.value)}
        />
      </div>
    </div>
  );
}
