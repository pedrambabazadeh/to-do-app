import { MenuProvider } from "./Hooks/menuContext/MenuProvider";
import { Header , LeftSide} from "./Components";
function App() {
  return (
  <MenuProvider>
    <div id="main">
      <Header/>
      <LeftSide/>
    </div>
  </MenuProvider>
  );
}

export default App;
