type props = {
  subject: string;
  setSubject: (str: string) => void;
};

export default function Subject({ setSubject, subject }: props) {
  return (
    <div>
      <h3 className="text-center text-2xl">
        The Main subject of your creation
      </h3>
      <textarea
        className="textField"
        placeholder="an owl drinking soda..."
        value={subject}
        name=""
        id=""
        cols={30}
        rows={10}
        onChange={(e) => setSubject(e.target.value)}></textarea>
    </div>
  );
}
