type ligthingProps = {
  lighting: string;
  setLighting: (str: string) => void;
};

export default function Lighting({ lighting, setLighting }: ligthingProps) {
  return (
    <div>
      <h3>Lighting</h3>
      <button onClick={() => setLighting("studio lighting")}>Studio</button>
      <button onClick={() => setLighting("ring light")}>Ring Light</button>
      <button onClick={() => setLighting("soft lighting")}>Soft Light</button>
      <button onClick={() => setLighting("neon lighting")}>Neon</button>
      <button onClick={() => setLighting("natural daylight")}>Daylight</button>
      <input
        value={lighting}
        type="text"
        onChange={(e) => setLighting(e.target.value)}
        placeholder="Other"
      />
    </div>
  );
}
