import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const notify = () => {
    const testData = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Victor Wayne" },
      { id: 3, name: "Jane Doe" }
    ];

    const testElement = testData.map((user) => (
      <div key={user.id}>{user.name}</div>
    ));

    toast.error(<>{testElement}</>);
  };

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}
