type ligthingProps = {
  lighting: string;
  setLighting: (str: string) => void;
};

export default function Lighting({ lighting, setLighting }: ligthingProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-center text-xl">Lighting</h3>
      <div className="flex-row flex-wrap">
        <button
          className="small-btn"
          onClick={() => setLighting("studio lighting")}>
          Studio
        </button>
        <button className="small-btn" onClick={() => setLighting("ring light")}>
          Ring Light
        </button>
        <button
          className="small-btn"
          onClick={() => setLighting("soft lighting")}>
          Soft Light
        </button>
        <button
          className="small-btn"
          onClick={() => setLighting("neon lighting")}>
          Neon
        </button>
        <button
          className="small-btn"
          onClick={() => setLighting("natural daylight")}>
          Daylight
        </button>
      </div>
      <input
        className="textField "
        value={lighting}
        type="text"
        onChange={(e) => setLighting(e.target.value)}
        placeholder="Other"
      />
    </div>
  );
}
