import Header from "./components/Header";
import Main from "./components/Main";
import { ConversationsContext } from "./contexts/ConversationsContext";

function App() {
  return (
    <ConversationsContext.Provider value={[]}>
      <Header/>
      <Main/>
    </ConversationsContext.Provider>
  );
}

export default App;
