type povProps = {
  setPointOfView: (s: string) => void;
  pointOfView: string;
};

export default function PointOfView({ setPointOfView, pointOfView }: povProps) {
  return (
    <div>
      <h3>Point of view</h3>
      <textarea
        name=""
        id=""
        value={pointOfView}
        onChange={(e) => setPointOfView(e.target.value)}
        cols={30}
        placeholder="Front, overhead, side, portrait, landscape..."
        rows={5}></textarea>
    </div>
  );
}
