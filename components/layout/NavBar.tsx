'use client';

import { UserButton, useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import Container from '../Container';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import SearchInput from '../SearchInput';
import { ModeToggle } from '../theme-toggle';
import { NavMenu } from './NavMenu';

const NavBar = () => {
	const router = useRouter();
	const { userId } = useAuth();
	return (
		<nav className="sticky top-0 border border-b-primary/10 bg-secondary">
			<Container>
				<div className="flex justify-between">
					<div
						className="flex items-center gap-1 cursor-pointer"
						onClick={() => router.push('/')}
					>
						<Image src="/logo.svg" alt="logo" width="30" height="30" />
						<div className="font-bold text-xl">Beydamax</div>
					</div>
					<SearchInput />
					<div className="flex gap-3 items-center">
						<div>
							<ModeToggle />
							<NavMenu />
						</div>
						<UserButton afterSignOutUrl="/" />
						{!userId && (
							<>
								<Button
									onClick={() => router.push('/sign-in')}
									variant="outline"
									size="sm"
								>
									Sign In
								</Button>
								<Button onClick={() => router.push('/sign-up')} size="sm">
									Sign Up
								</Button>
							</>
						)}
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default NavBar;
