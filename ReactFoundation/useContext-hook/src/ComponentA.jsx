/**
 * useContext
 * a hook that allows you to share values between multiple levels of components 
 * without passing through props through each level
 * 
 * 
 - PROP-DILLING: Passing down props through multiple levels: Gets tedious if done through props on each level

 - SOLUTION: UseContext
    - PROVIDER COMPONENT
    1. import {createContext} from 'react';
    2. export const MyContext = createContext();
    3.  <MyContext.Provider value={value}>
            <Child/>
        </MyContext.Provider>
*/

/**
 * CONSUMER COMPONENTS: 
 1. import {useContext} from 'react';
 2. import {MyContext} from './ComponentA';
 3. const value = useContext(MyContext);
 */

import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {

    const [user,setUser] = useState("Saras");


    return(<>
    <div className="box">
        <h1>ComponentA</h1>
        <h2>Hello {user}</h2>
        <UserContext.Provider value={user}>
            <ComponentB/>
        </UserContext.Provider>
    </div>
    </>)
}

export default ComponentA;