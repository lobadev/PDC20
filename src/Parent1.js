import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

function Parent1() {
    return(
        <div style={styles.container}>
            <h1>Welcome stranger!</h1>
            <Child1/>
            <Child2/>
            <Child3/>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        textAlign: 'center', 
    }
};

export default Parent1;
