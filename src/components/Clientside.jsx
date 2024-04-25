import Slider from "./Slider";
import { slider } from "../assets/products";

function Clientside() {
  return (
    <div>
      <Slider slides={slider} />
    </div>
  );
}

export default Clientside;
