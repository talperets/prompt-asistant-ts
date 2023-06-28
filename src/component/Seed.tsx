type seedProps = {
  seed: string;
  setSeed: (seed: string) => void;
};

export default function Seed({ seed, setSeed }: seedProps) {
  return (
    <div>
      <h3 className="text-center text-2xl">Seed {"(optional)"}</h3>
      <input
        placeholder="3601192145"
        className="textField"
        type="text"
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
      />
    </div>
  );
}
