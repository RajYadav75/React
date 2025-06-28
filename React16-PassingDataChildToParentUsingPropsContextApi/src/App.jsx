import Name from "./childToParent/Name.jsx";

function App() {

  return (
      <div>
          <h3 style={{color:"red",fontSize:"50px",backgroundColor:"black"}}>Passing Child data to Parent props drilling and context api is not recommended</h3>
          <Name/>
      </div>
  )
}

export default App
