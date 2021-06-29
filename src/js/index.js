//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SecondCounter } from "./component/SecondCounter.js";
let contador = 0;
let segundos = "";
function timer() {
	contador += 1;
	segundos = "000000" + contador;
	segundos = segundos.slice(-6);
	ReactDOM.render(
		<SecondCounter
			cero1={segundos.charAt(0)}
			cero2={segundos.charAt(1)}
			cero3={segundos.charAt(2)}
			cero4={segundos.charAt(3)}
			cero5={segundos.charAt(4)}
			cero6={segundos.charAt(5)}
		/>,
		document.querySelector("#app")
	);
}
window.setInterval(timer, 1000);
//return <div className="text-center mt-5">{Timer(), 1000}</div>;
//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));
