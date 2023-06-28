type CameraLensProps = {
  setCameraLens: (s: string) => void;
};
export default function CameraLens({ setCameraLens }: CameraLensProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-center text-2xl">Camera Lens</h3>
      <div className="flex flex-col">
        <button
          className="small-btn focus:bg-green-600"
          onClick={() => setCameraLens("Wide-angle")}>
          Wide-angle
        </button>
        <button
          className="small-btn focus:bg-green-600"
          onClick={() => setCameraLens("Fish-Eye")}>
          Fish-Eye
        </button>
        <button
          className="small-btn focus:bg-green-600"
          onClick={() => setCameraLens("Prime Lens")}>
          Prime Lens
        </button>
        <button
          className="small-btn focus:bg-green-600"
          onClick={() => setCameraLens("35-mm movie film")}>
          35-mm
        </button>
        <button
          className="small-btn focus:bg-green-600"
          onClick={() => setCameraLens("Macro")}>
          Macro
        </button>
      </div>
    </div>
  );
}
