type envProps = {
  environment: string;
  setEnvironment: (str: string) => void;
};

export default function Environment({ environment, setEnvironment }: envProps) {
  return (
    <div>
      <h3 className="text-xl text-center">Environment</h3>
      <textarea
        className="textField"
        cols={40}
        rows={3}
        value={environment}
        onChange={(e) => setEnvironment(e.target.value)}
        placeholder="Indoor, outdoor, underwater, in space..."
      />
    </div>
  );
}
