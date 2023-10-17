import { useEffect, useState } from "react";
import "./App.css";

type StopLightState = "stop" | "slow" | "go";

const STOP_DELAY = 4000;
const SLOW_DELAY = 2000;
const GO_DELAY = 4000;

export function StopLight({ intitialState }: { intitialState?: StopLightState}) {

  const [state, setState] = useState<StopLightState>(intitialState ?? "stop");

  function getStopLightClass(light: StopLightState) {
    return `light ${light}` + (state === light ? " on": "");
  }
  
  useEffect(() => {
    if ( state === 'stop') {
      setTimeout(() => setState('go'), STOP_DELAY);
    } else if (state === "slow"){
      setTimeout(() => setState('stop'), SLOW_DELAY);
    } else {
      setTimeout(() => setState('slow'), GO_DELAY);
    }
  }, [state])

  return (
    <div className="stop-light">
      <div className={getStopLightClass("stop")}></div>
      <div className={getStopLightClass("slow")}></div>
      <div className={getStopLightClass("go")}></div>
    </div>
  )
}

