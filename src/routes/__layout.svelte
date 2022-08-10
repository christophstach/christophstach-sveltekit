<script>
	import '../app.css';
	import Navigation from '@components/Navigation.svelte';
</script>

<div class="min-h-screen pb-2 bg-hero-floating-cogs md:pb-10">
	<Navigation />

	<div class="px-2 md:px-10">
		<main class="mx-auto max-w-[960px] overflow-auto rounded-xl bg-white p-4 shadow-xl md:p-16">
			<slot />
		</main>
	</div>
</div>
