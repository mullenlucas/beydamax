import Link from "next/link";

export default function ProductNavBar() {
  return(
    <nav className="flex text-reg border-b pb-2">
    <Link href="/product/milesstone-grill" className="mr-7"> Overview </Link>
    <Link href="/product/milesstone-grill/menu" className="mr-7"> Menu </Link>
  </nav>
  )
}