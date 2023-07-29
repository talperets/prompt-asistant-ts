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
      <h3 className="mb-5 text-center text-2xl">Everything is ready</h3>
      <button
        className={`btn ${isCopied && "bg-green-500 hover:bg-green-500"} mb-5`}
        onClick={setCopied}
      >
        {isCopied ? "Copied" : "Copy to Midjourney"}
      </button>
    </div>
  );
}
