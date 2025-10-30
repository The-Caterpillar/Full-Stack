/**
 * useContext
 * a hook that allows you to share values between multiple levels of components without passing through props through each level
 */

import { useContext } from "react";
import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";

function ComponentC() {

    const username = useContext(UserContext);


    return(<>
        <div className="box">
            <h1>ComponentC</h1>
            <h2> {username} is almost gone... sad!!, Here catch D</h2>
            <ComponentD/>
        </div>
    </>)
}

export default ComponentC;