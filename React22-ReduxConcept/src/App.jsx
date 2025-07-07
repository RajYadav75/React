import Name from "./redux/component/Name.jsx";
import Details from "./redux/component/Details.jsx";
import City from "./redux/component/City.jsx";

function App() {
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-evenly",width:"800px"}}>
          <Name/>
          <City/>
      </div>
      <hr/>
      <Details/>
    </div>
  )
}

export default App
