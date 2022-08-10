<script>
	const navItems = [
		{ label: 'Home', href: '/', exact: true },
		//{ label: 'Blog', href: '/blog', exact: false },
		{ label: 'Curriculum Vitae', href: '/curriculum-vitae', exact: false },
		//{ label: 'Education', href: '/education', exact: false },
		//{ label: 'Experience', href: '/experience', exact: false },
		//{ label: 'Projects', href: '/projects', exact: false },
		//{ label: 'About me', href: '/about-me', exact: false },
		//{ label: 'Skills', href: '/skills', exact: false },
		//{ label: 'Contact', href: '/contact', exact: false }
	];
</script>

<nav class="py mb-2 bg-white py-3 px-3 shadow-xl md:mb-10 md:px-10">
	<ul class="mx-auto flex justify-end gap-4 md:max-w-[960px] md:gap-6">
		{#each navItems as navItem}
			<li>
				<a
					href={navItem.href}
					class="text-md font-medium uppercase text-gray-500 hover:border-b-4 hover:border-indigo-500 hover:text-indigo-500 md:text-lg"
				>
					{navItem.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>
