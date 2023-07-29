type povProps = {
  setPointOfView: (s: string) => void;
  pointOfView: string;
};

export default function PointOfView({ setPointOfView, pointOfView }: povProps) {
  return (
    <div>
      <h3 className="text-center text-3xl">Point of view</h3>
      <textarea
        className="textField"
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
