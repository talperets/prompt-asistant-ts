type seedProps = {
  seed: string;
  setSeed: (seed: string) => void;
};

export default function Seed({ seed, setSeed }: seedProps) {
  return (
    <div>
      <h3>Seed {"(optional)"}</h3>
      <input
        type="text"
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
      />
    </div>
  );
}
