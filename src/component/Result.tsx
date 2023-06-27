import useClipboard from "react-use-clipboard";
type ResultProps = {
  prompt: string[];
};
export default function Result({ prompt }: ResultProps) {
  const [isCopied, setCopied] = useClipboard(
    `/imagine prompt: ${prompt.join(" ")}`
  );
  return (
    <div>
      <h3>Everything is ready</h3>
      <button onClick={setCopied}>Copy {isCopied && "👍"}</button>
    </div>
  );
}
