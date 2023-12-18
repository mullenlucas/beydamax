import Header from "./components/Header";
import SearchSidebar from "./components/SearchSidebar";
import ProductCard from "./components/ProductCard";

export const metadata = {
  title: 'Search | Milesstone grill',
}

export default function Search() {
  return(
    <>
      < Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        < SearchSidebar />
        <div className="w-5/6">
          < ProductCard />
        </div>
      </div>
    </>
  )
}
