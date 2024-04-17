'use client';

import * as React from 'react';
import {
	BookOpenCheck,
	ChevronsUpDown,
	NotebookTabs,
	Plus,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

export function NavMenu() {
	const router = useRouter();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<ChevronsUpDown />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					className="cursor-pointer flex  gap-2 items-center"
					onClick={() => router.push('/producto/new')}
				>
					<Plus size={15} /> <span>Reservar producto</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					className="cursor-pointer flex  gap-2 items-center"
					onClick={() => router.push('/mis-productos')}
				>
					<BookOpenCheck size={15} /> <span>Mis reservas</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					className="cursor-pointer flex  gap-2 items-center"
					onClick={() => router.push('/contacto')}
				>
					<NotebookTabs size={15} /> <span>Contacto</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
