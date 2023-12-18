import Header from "./components/Header";

export const metadata = {
  title: 'Menu | Beydamax',
}

export default function ProductLayout({ children }) {
  return (
    <main>
      < Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  )
}
