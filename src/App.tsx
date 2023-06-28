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
import CameraLens from "./component/CameraLens";

function App() {
  // const [promptHistory, setPromptHistory] = useState([]);
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
  const [cameraLens, setCameraLens] = useState("");
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
    `${cameraLens}${cameraLens ? " camera lens," : ""}`,
    `${aspect ? "--aspect " : ""}${aspect}${seed ? "," : ""}`,
    `${seed ? "--seed " : ""}${seed} ${seed ? "," : ""}`,
  ];
  const next = () => {
    setPage((prev) => {
      if (prev === 11) {
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
        return <CameraLens setCameraLens={setCameraLens} />;
      case 9:
        return <Aspect setAspect={setAspect} />;
      case 10:
        return <Seed seed={seed} setSeed={setSeed} />;
      case 11:
        return <Result prompt={prompt} />;
    }
  };
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-around bg-gray-800 text-white">
        <h1 className="mb-5 text-center text-4xl">Prompt asistant</h1>
        <div className="flex h-64 w-96 flex-col items-center justify-center">
          <p className={`${photoType && "w-52 text-center"}`}>
            {prompt.join(" ")}
          </p>
          {showPage()}
        </div>
        <div className="flex flex-row">
          {page ? (
            <button
              className="btn"
              onClick={() => setPage((prev) => (prev ? prev - 1 : prev))}>
              <ArrowBackIosNewIcon /> Prev
            </button>
          ) : null}

          <button onClick={next} className="btn">
            {page === 11 ? (
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
