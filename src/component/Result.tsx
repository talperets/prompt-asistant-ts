import useClipboard from "react-use-clipboard";
type ResultProps = {
  prompt: string[];
};
export default function Result({ prompt }: ResultProps) {
  const [isCopied, setCopied] = useClipboard(
    `/imagine prompt: ${prompt.join(" ")}`
  );
  return (
    <div className="flex flex-col ">
      <h3 className="text-center text-2xl">Everything is ready</h3>
      <button className="btn" onClick={setCopied}>
        Copy {isCopied && "👍"}
      </button>
    </div>
  );
}
