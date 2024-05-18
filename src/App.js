import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";
import TemporaryDrawer from "./pages/Login/Menu";
import DisableElevation from "./pages/Login/Botton";


function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <TemporaryDrawer />
      <ListarTarefa />
      <DisableElevation/>

      
    </div>
  );
}

export default App;
