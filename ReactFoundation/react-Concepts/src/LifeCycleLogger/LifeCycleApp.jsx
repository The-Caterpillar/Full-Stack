import { useState } from "react"
import LifecycleLoggerClass from "./LifecycleLoggerClass";
import LifecycleLogger from "./LifecycleLogger";
import styles from './LifeCycleLogger.module.css'
function LifeCycleApp() {

  const [showLogger,setShowLogger] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <h2>React Lifecycle Playground</h2>

        {/* Toggle LifecycleLoggerClass */}
        <button className={styles.primary_btn} onClick={() => setShowLogger(!showLogger)}>
          {showLogger ? 'unmount logger' :'Mount logger'}
        </button>

        {showLogger && <LifecycleLoggerClass message='Hello props'/>}
        {showLogger && <LifecycleLogger message='Hello props'/>}
      </div>
    </>
  );
}

export default LifeCycleApp
