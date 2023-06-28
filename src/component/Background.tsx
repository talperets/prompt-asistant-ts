type bgProps = {
  background: string;
  setBackground: (s: string) => void;
};

export default function Background({ background, setBackground }: bgProps) {
  return (
    <div>
      <h3 className="text-3xl text-center">Background</h3>
      <textarea
        className="textField"
        placeholder="Solid color, nebula, forest"
        name=""
        id=""
        value={background}
        cols={30}
        onChange={(e) => setBackground(e.target.value)}
        rows={5}></textarea>
    </div>
  );
}
