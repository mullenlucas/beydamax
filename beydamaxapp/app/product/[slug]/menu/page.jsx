import Header from "../components/Header";
import ProductNavBar from "../components/ProductNavBar";
import Menu from "../components/Menu";

export default function MenuProducto() {
  return(
    <div className="bg-white w-[100%] rounded p-3 shadow">
      < ProductNavBar />
      < Menu />
    </div>
  )
}
