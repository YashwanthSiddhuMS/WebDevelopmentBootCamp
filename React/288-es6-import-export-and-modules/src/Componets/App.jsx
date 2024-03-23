import React from "react";
import * as AO from "./ArithmeticOperation";

function ArithmeticOperation(){
    return(
        <ul>
            <li>{AO.add(3,3)}</li>
            <li>{AO.multiply(3,3)}</li>
            <li>{AO.substract(3,3)}</li>
            <li>{AO.divide(3,3)}</li>
      </ul>
    );
}
export default ArithmeticOperation;