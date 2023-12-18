import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import Header from "../components/Header";
import ProductNavBar from "../components/ProductNavBar";
import Menu from "../components/Menu";

export default function MenuProducto() {
  return(
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        < NavBar />
        < Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            < ProductNavBar />
            < Menu />
          </div>
        </div>
      </main>
    </main>
  )
}
