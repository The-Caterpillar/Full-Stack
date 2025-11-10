import { useState } from "react"
import LifecycleLogger from "./LifecycleLogger";

function App() {

  const [showLogger,setShowLogger] = useState(false);

  return (
    <>
      <div className="container">
        <h2>React Lifecycle Playground</h2>

        {/* Toggle LifeCycleLogger */}
        <button className="primary-btn" onClick={() => setShowLogger(!showLogger)}>
          {showLogger ? 'unmount logger' :'Mount logger'}
        </button>

        {showLogger && <LifecycleLogger message='Hello props'/>}
      </div>
    </>
  );
}

export default App
