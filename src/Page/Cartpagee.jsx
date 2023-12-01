/* eslint-disable react/prop-types */
import { useParams } from "react-router";
import Cart from "../Components/card";

function Cartpage({info}){
    const id=useParams()

    return( 
        <Cart info={info} id={id}/> 
    )
}

export default Cartpage;
