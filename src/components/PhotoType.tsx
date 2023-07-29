type photoTypeProps = {
  
  setPhotoType: (str: string) => void;
};

export default function PhotoType({ setPhotoType }: photoTypeProps) {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-2xl">Photo or painting?</h1>
      <button
        className="small-btn focus:bg-green-600"
        onClick={() => setPhotoType("A photo of")}
      >
        Photo
      </button>
      <button
        className="small-btn focus:bg-green-600"
        onClick={() => setPhotoType("A painting of")}
      >
        Painting
      </button>
    </div>
  );
}
