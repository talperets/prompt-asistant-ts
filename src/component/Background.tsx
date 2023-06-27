type bgProps = {
  background: string;
  setBackground: (s: string) => void;
};

export default function Background({ background, setBackground }: bgProps) {
  return (
    <div>
      <h3>Background</h3>
      <textarea
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
