type colorProps = {
  setColor: (s: string) => void;
};

export default function ColorScheme({ setColor }: colorProps) {
  return (
    <div>
      <h3>Color Scheme</h3>
      <button onClick={() => setColor("vibrant color scheme")}>Vibrant</button>
      <button onClick={() => setColor("dark color scheme")}>Dark</button>
      <button onClick={() => setColor("pastel color scheme")}>Pastel</button>
      <label htmlFor="">Custom Color</label>
      <input
        type="color"
        onChange={(e) => setColor(`in the color scheme of ${e.target.value}`)}
      />
    </div>
  );
}
