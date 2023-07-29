type colorProps = {
  setColor: (s: string) => void;
};

export default function ColorScheme({ setColor }: colorProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-center text-2xl">Color Scheme</h3>
      <button
        className="small-btn focus:bg-green-600"
        onClick={() => setColor("vibrant color scheme")}>
        Vibrant
      </button>
      <button
        className="small-btn focus:bg-green-600"
        onClick={() => setColor("dark color scheme")}>
        Dark
      </button>
      <button
        className="small-btn focus:bg-green-600"
        onClick={() => setColor("pastel color scheme")}>
        Pastel
      </button>
      <button className="small-btn focus:bg-green-600">Custom Color</button>
      <input
        className="mb-5 ml-8 rounded-xl text-center"
        type="color"
        onChange={(e) => setColor(`in the color scheme of ${e.target.value}`)}
      />
    </div>
  );
}
