type photoTypeProps = {
  setPhotoType: (str: string) => void;
};

export default function PhotoType({ setPhotoType }: photoTypeProps) {
  return (
    <div>
      <button className="small-btn" onClick={() => setPhotoType("A photo of")}>
        Photo
      </button>
      <button
        className="small-btn"
        onClick={() => setPhotoType("A painting of")}>
        Painting
      </button>
    </div>
  );
}
