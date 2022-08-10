<script>
	import { format, isBefore } from 'date-fns';

	const items = [
		{
			title: 'M. Sc. Angewandte Informatik ',
			institution: 'HTW Berlin - Hochschule für Technik und Wirtschaft Berlin',
			description:
				'At <a target="_blank" href="https://www.htw-berlin.de/">HTW Berlin</a> I am studying applied computer science (Angewandte Informatik). I am currently in the end of my masters. During the time on this university I did serveal projects in the area of bio informatics, deep learning and data science.',
			bullets: [
				'Generative adverserial networks to generate pictures of human faces',
				'Member of the <a target="_blank" href="https://campus-stories.htw-berlin.de/en/jahr/2022/in-drei-stunden-das-virus-identifizieren/">Covid-SpiNGS</a> project, developing a on-demand next generation sequencing pipeline for COVID-19 detection',
				'Exchange year in Taipei, Taiwan at the <a target="_blank" href="https://www.ntust.edu.tw/">National Taiwan University of science and technologies (NTUST)</a>'
			],
			from: new Date(2019, 9, 1),
			to: new Date(2023, 8, 30)
		},
		{
			title: 'B. Sc. Angewandte Informatik',
			institution: 'HTW Berlin - Hochschule für Technik und Wirtschaft Berlin',
			description:
				'I graduated from <a target="_blank" href="https://www.htw-berlin.de/">HTW Berlin</a> with a Bachelor in applied computer science. During this time I specialized in data science with deep learning.',
			bullets: [
				'Exchange semester in Cuernavaca, Mexico at <a target="_blank" href="https://uninter.edu.mx/">Universidad Internacional (UNINTER)</a>',
				'Bachelor thesis about style transfer of paintings to photos with methods of deep learning'
			],
			from: new Date(2016, 3, 1),
			to: new Date(2019, 8, 30)
		},
		{
			title: 'Apprenticeship: IT Management Assistent',
			institution: 'KBS Nordhorn',
			description:
				'As part of my apprenticeship at <a target="_blank" href="https://www.kortmann-beton.de/">Kortmann Beton</a>, I had to go to this business related school. There the theoretical knowledge need for the apprenticeship was taught.',
			from: new Date(2009, 8, 1),
			to: new Date(2011, 6, 31),
			bullets: []
		},
		{
			title: 'Information Technology Assistant',
			institution: 'Berufskolleg Rheine',
			description:
				'I started my IT carreer path at the technical college in Rheine. <a target="_blank" href="https://www.berufskolleg-rheine.de/">Berufskolleg Rheine</a> offered many subjects like Programming, Database, etc. From there I graduated with a dual degree as an Information Technoloy Assistant and the general permission study at Germany\'s Universities of Applied Sciences (Fachhoschule).',
			from: new Date(2004, 8, 1),
			to: new Date(2008, 6, 31),
			bullets: []
		}
	];
</script>

<h2 class="mb-4 border-b-2 border-black text-2xl">Education</h2>

{#each items as item}
	<div class="mb-10">
		<div class="md:flex">
			<div class="md:flex-1">
				<h3 class="text-lg">{item.title}</h3>
				<h4 class="text-sm ">{item.institution}</h4>
			</div>
			<div class="text-xs text-gray-500">
				{format(item.from, 'MMMM yyyy')} -

				{#if !isBefore(item.to, new Date())}
					Present
				{:else}
					{format(item.to, 'MMMM yyyy')}
				{/if}
			</div>
		</div>

		<p class="prose prose-sm prose-indigo mb-5 mt-4 max-w-none">{@html item.description}</p>

		{#if item.bullets.length > 0}
			<ul class="list-disc text-sm">
				{#each item.bullets as bullet}
					<li class="prose prose-sm prose-indigo ml-5 max-w-none">{@html bullet}</li>
				{/each}
			</ul>
		{/if}
	</div>
{/each}
