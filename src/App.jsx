import { useEffect, useReducer } from "react";
import Header from "./Header";
import MainSection from "./MainSection";
const initialState = {
  questions:[],
  status: "loading"
};
function reducer(state, action) {
  switch (action.type)
  {
    case "dataReceived":
      return { ...state, status: "ready", questions: action.payload };
    case "dataFailed":
      return { ...state, status: "error" };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
  }
}
function App() {
  const [state , dispatch]=useReducer(reducer,initialState);
  useEffect(() => {
    fetch("http://localhost:9000/questions").then((response) => {
      response.json().then((data) => {
        dispatch({type:"dataReceived",payload:data});
      });
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <MainSection>
        <p>1/15</p>
        <p>Question?</p>
      </MainSection>
    </div>
  );
}

export default App;
