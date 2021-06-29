import React from "react";

//include images into your bundle
import { SecondCounter } from "./SecondCounter";

//create your first component
export function Home() {
	function Timer() {
		let contador = 0;
		let segundos = "";
		//setInterval(() => {
			contador++;
			segundos = "000000" + contador;
			segundos = segundos.slice(-6);
			return (
				<SecondCounter
					cero1={segundos.charAt(0)}
					cero2={segundos.charAt(1)}
					cero3={segundos.charAt(2)}
					cero4={segundos.charAt(3)}
					cero5={segundos.charAt(4)}
					cero6={segundos.charAt(5)}
				/>
			);
		//}, 1000);
	}
	return <div className="text-center mt-5">{Timer(), 1000}</div>;
}


