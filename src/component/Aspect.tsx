type aspectProps = {
  
  setAspect: (aspect: string) => void;
};

export default function Aspect({ setAspect }: aspectProps) {
  return (
    <div>
      <h3>Aspect Ratio</h3>
      <button onClick={() => setAspect("1:1")}>1:1</button>
      <button onClick={() => setAspect("5:4")}>5:4</button>
      <button onClick={() => setAspect("3:2")}>3:2</button>
      <button onClick={() => setAspect("4:7")}>4:7</button>
      <button onClick={() => setAspect("7:4")}>7:4</button>
    </div>
  );
}
