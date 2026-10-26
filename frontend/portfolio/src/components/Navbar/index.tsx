import { useState } from "react";

const navigation = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-20 border-b border-[#e9e9ef] bg-white/[0.94] backdrop-blur-xl">
			<nav
				className="relative mx-auto flex min-h-16 max-w-[1120px] items-center justify-between px-[18px] sm:min-h-[72px] sm:px-6"
				aria-label="Main navigation"
			>
				<a
					className="text-[1.2rem] leading-none font-bold tracking-[-0.04em] text-[#181824] no-underline"
					href="#home"
					onClick={() => setIsOpen(false)}
				>
					Faizulla Syed<span className="text-[#6c63ff]">.</span>
				</a>

				<button
					className="grid cursor-pointer gap-[5px] border-0 bg-transparent p-2 sm:hidden"
					type="button"
					aria-label={isOpen ? "Close menu" : "Open menu"}
					aria-expanded={isOpen}
					aria-controls="navbar-links"
					onClick={() => setIsOpen((open) => !open)}
				>
					<span className="h-0.5 w-[22px] bg-[#181824]" aria-hidden="true" />
					<span className="h-0.5 w-[22px] bg-[#181824]" aria-hidden="true" />
					<span className="h-0.5 w-[22px] bg-[#181824]" aria-hidden="true" />
				</button>

				<ul
					id="navbar-links"
					data-open={isOpen}
					className="absolute inset-x-0 top-full z-10 m-0 hidden list-none border-b border-[#e9e9ef] bg-white px-[18px] pt-2 pb-4 data-[open=true]:flex data-[open=true]:flex-col sm:static sm:flex sm:flex-row sm:items-center sm:gap-[30px] sm:border-0 sm:bg-transparent sm:p-0"
				>
					{navigation.map(({ label, href }) => (
						<li key={href}>
							<a
								className="block px-1.5 py-3 text-[0.95rem] leading-[1.4] font-medium text-[#555563] no-underline transition-colors duration-150 hover:text-[#6c63ff] focus-visible:text-[#6c63ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6c63ff] sm:px-0 sm:py-0"
								href={href}
								onClick={() => setIsOpen(false)}
							>
								{label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

