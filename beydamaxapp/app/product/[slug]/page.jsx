import Header from "./components/Header";
import ProductNavBar from "./components/ProductNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

export default function DetalleProduct() {
  return(
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        < ProductNavBar />
        < Title />
        < Rating />
        < Description />
        < Images />
        < Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        < ReservationCard />
      </div>
    </>
  )
}