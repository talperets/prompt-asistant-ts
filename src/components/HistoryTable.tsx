import { useState } from "react";
import useClipboard from "react-use-clipboard";

type Props = {
  prompt: string[];
};

export default function HistoryTable(props: Props) {
  const [idx, setIdx] = useState<number>();
  const [isCopied, setCopied] = useClipboard(
    `/imagine prompt: ${props.prompt[idx || 0]}`
  );

  return (
    <div>
      <table>
        {props.prompt.map((val, idx) => {
          return (
            <tr key={idx}>
              <td>{val}</td>
              <td>
                <button
                  className={`btn ${
                    isCopied && "bg-green-500 hover:bg-green-500"
                  } mb-5`}
                  onClick={() => {
                    setIdx(idx);
                    setCopied();
                  }}
                >
                  {isCopied ? "Copied" : "Copy to Midjourney"}
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
