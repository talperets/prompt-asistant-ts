type artProps = {
  setArtStyle: (s: string) => void;
  artStyle: string;
};

export default function ArtStyle({ setArtStyle, artStyle }: artProps) {
  return (
    <div>
      <h1 className="text-3xl text-center">Art Style</h1>
      <textarea
      className="textField"
        cols={40}
        rows={3}
        value={artStyle}
        onChange={(e) => setArtStyle(e.target.value)}
        placeholder="render, studio ghibli, movie poster, hyper realistic..."
      />
    </div>
  );
}
