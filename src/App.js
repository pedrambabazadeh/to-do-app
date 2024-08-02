import { MenuProvider } from "./Hooks/menuContext/MenuProvider";
import { Header , LeftSide, MainPart} from "./Components";
function App() {
  return (
  <MenuProvider>
    <div id="main">
      <Header/>
      <LeftSide/>
      <MainPart/>
    </div>
  </MenuProvider>
  );
}

export default App;
