import { useState } from "react";
import PhotoType from "./component/PhotoType";
import Subject from "./component/Subject";
import Lighting from "./component/Lighting";
import Environment from "./component/Environment";
import ColorScheme from "./component/ColorScheme";
import PointOfView from "./component/PointOfView";
import Background from "./component/Background";
import ArtStyle from "./component/ArtStyle";
import Aspect from "./component/Aspect";
import Seed from "./component/Seed";
import Result from "./component/Result";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function App() {
  const [photoType, setPhotoType] = useState("");
  const [environment, setEnvironment] = useState("");
  const [background, setBackground] = useState("");
  const [subject, setSubject] = useState("");
  const [lighting, setLighting] = useState("");
  const [color, setColor] = useState("");
  const [pointOfView, setPointOfView] = useState("");
  const [artStyle, setArtStyle] = useState("");
  const [aspect, setAspect] = useState("");
  const [seed, setSeed] = useState("");
  // const [cameraLens, setCameraLens] = useState("");
  const [page, setPage] = useState(0);
  const prompt: string[] = [
    photoType,
    `${subject}${subject ? "," : ""}`,
    `${lighting}${lighting ? "," : ""}`,
    `${environment}${environment ? "," : ""}`,
    `${color}${color ? "," : ""}`,
    `${pointOfView}${pointOfView ? "," : ""}`,
    `${background}${background ? " background," : ""}`,
    `${artStyle ? "in the style of " : ""}${artStyle}`,
    `${aspect ? "--aspect " : ""}${aspect}${seed ? "," : ""}`,
    `${seed ? "--seed " : ""}${seed} ${seed ? "," : ""}`,
  ];
  const next = () => {
    setPage((prev) => {
      if (prev === 10) {
        setPhotoType("");
        setEnvironment("");
        setSubject("");
        setLighting("");
        setColor("");
        setPointOfView("");
        setBackground("");
        setArtStyle("");
        setSeed("");
        setAspect("");
        return 0;
      } else {
        return prev + 1;
      }
    });
  };
  const showPage = () => {
    switch (page) {
      case 0:
        return <PhotoType setPhotoType={setPhotoType} />;
      case 1:
        return <Subject setSubject={setSubject} subject={subject} />;
      case 2:
        return <Lighting lighting={lighting} setLighting={setLighting} />;
      case 3:
        return (
          <Environment
            environment={environment}
            setEnvironment={setEnvironment}
          />
        );
      case 4:
        return <ColorScheme setColor={setColor} />;
      case 5:
        return (
          <PointOfView
            setPointOfView={setPointOfView}
            pointOfView={pointOfView}
          />
        );
      case 6:
        return (
          <Background background={background} setBackground={setBackground} />
        );
      case 7:
        return <ArtStyle artStyle={artStyle} setArtStyle={setArtStyle} />;
      case 8:
        return <Aspect setAspect={setAspect} />;
      case 9:
        return <Seed seed={seed} setSeed={setSeed} />;
      case 10:
        return <Result prompt={prompt} />;
    }
  };
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-800 text-white">
        <p
          className={`${
            photoType && "w-64 rounded-xl border bg-slate-700 p-3"
          }`}>
          {prompt.join(" ")}
        </p>
        {showPage()}
        <div className="flex flex-row">
          {page ? (
            <button
              className="btn"
              onClick={() => setPage((prev) => (prev ? prev - 1 : prev))}>
              <ArrowBackIosNewIcon /> Prev
            </button>
          ) : null}

          <button onClick={next} className="btn">
            {page === 10 ? (
              "New Prompt"
            ) : (
              <p>
                Next <ArrowForwardIosIcon />
              </p>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
