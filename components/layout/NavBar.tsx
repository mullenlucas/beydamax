'use client'

import { UserButton } from '@clerk/nextjs';

const NavBar = () => {
  return (
    <nav>
      <UserButton afterSignOutUrl='/' />
    </nav>
  )
}

export default NavBar;