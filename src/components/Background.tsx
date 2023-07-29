type bgProps = {
  background: string;
  setBackground: (s: string) => void;
};

export default function Background({ background, setBackground }: bgProps) {
  return (
    <div>
      <h3 className="text-center text-3xl">Background</h3>
      <textarea
        className="textField"
        placeholder="Solid color, nebula, forest"
        value={background}
        cols={30}
        onChange={(e) => setBackground(e.target.value)}
        rows={5}></textarea>
    </div>
  );
}
