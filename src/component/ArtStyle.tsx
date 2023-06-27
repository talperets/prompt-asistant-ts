type artProps = {
  setArtStyle: (s: string) => void;
  artStyle: string;
};

export default function ArtStyle({ setArtStyle, artStyle }: artProps) {
  return (
    <div>
      <h1>Art Style</h1>
      <textarea
        cols={40}
        rows={3}
        value={artStyle}
        onChange={(e) => setArtStyle(e.target.value)}
        placeholder="render, studio ghibli, movie poster, hyper realistic..."
      />
    </div>
  );
}
