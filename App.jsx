export default function App() {
  const user = { name: "", email: "", pwd: "" };
  const [inputData, setInputData] = useState(user);
  const [flag, setFlag] = useState(false);
  useEffect(
    (e) => {
      console.log("registered");
    },
    [flag]
  );
  function ClickEvent(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  function SubmitHandler(e) {
    if (!inputData.name || !inputData.pwd) {
      alert("All field are mandatory");
    } else {
      setFlag(true);
    }
  }
  return (
    <>
      <pre>
        {flag ? <h1>Hello {inputData.name} you got registered</h1> : ""}{" "}
      </pre>

      <form onSubmit={SubmitHandler}>
        <h1>Login Page</h1>
        <label>UserName</label>
        <input
          type="text"
          name="name"
          placeholder="Enter the name"
          value={inputData.name}
          onChange={ClickEvent}
        ></input>
        <br></br>
        <br></br>
        <label>Password</label>
        <input
          type="text"
          name="pwd"
          placeholder="Enter Password"
          value={inputData.pwd}
          onChange={ClickEvent}
        ></input>
        <button type="Submit">Submit</button>
      </form>
    </>
  );
}
