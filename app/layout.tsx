import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import NavBar from '@/components/layout/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Beydamax',
	description: 'Alquiler de productos',
	icons: { icon: '/logo.svg' },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body className={inter.className}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<main className="flex flex-col min-h-screen bg-secondary">
							<NavBar />
							<section className="flex-grow">{children}</section>
						</main>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
