type photoTypeProps = {
  setPhotoType: (str: string) => void;
};

export default function PhotoType({ setPhotoType }: photoTypeProps) {
  return (
    <div>
      <button onClick={() => setPhotoType("A photo of")}>Photo</button>
      <button onClick={() => setPhotoType("A painting of")}>Painting</button>
    </div>
  );
}
