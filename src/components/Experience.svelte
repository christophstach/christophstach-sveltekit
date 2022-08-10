<script>
	import { format, isBefore, addMonths } from 'date-fns';

	const items = [
		{
			title: 'Frontend Engineer',
			company: 'DERICON GmbH',
			description: '',
			bullets: [
				'Extending the existing frontend of a web based software based on Angular (v2+)',
				'Developing a PHP Symfony framework middleware to connect the AngularJS (v1) frontend with the systems core REST API'
			],
			from: new Date(2016, 11, 1),
			to: addMonths(new Date(), 1)
		},
		{
			title: 'Fullstack Developer',
			company: 'SLH GmbH',
			description: '',
			bullets: [
				'Planning and implementing new features for the web based software UWEB2000',
				'Developing a new frontend with Sencha ExtJS',
				'Bug fixing the PHP based business logic',
				'Troubleshooting with customers regarding the software',
				'Consultant and contact person for customers',
				'Implementing features in the 2nd product of the company with ASP.NET MVC + Entity Framework',
				'Working with predefined GIT SCM workflows'
			],
			from: new Date(2011, 9, 1),
			to: new Date(2014, 10, 30)
		},
		{
			title: 'Fullstack Developer',
			company: 'CREAVIVA GmbH & Co. KG',
			description: '',
			bullets: [
				'Managing content and developing new websites based on PHP, MySQL, CSS and JavaScript',
				'Developing websites with the CMS TYPO3 including the creation of new TYPO3-Extension',
				'Internal contact person for IT related issues'
			],
			from: new Date(2011, 6, 1),
			to: new Date(2011, 9, 31)
		},
		{
			title: 'Apprenticeship: IT Management Assistant',
			company: 'Kortmann Beton GmbH & Co. KG',
			description: '',
			bullets: [
				'Development of the company website',
				'Developing reports for internal company analysis with C#, Crystal Reports, Visual Basic and Microsoft Access',
				'Internal contact person for IT related issues'
			],
			from: new Date(2011, 6, 1),
			to: new Date(2011, 9, 31)
		}
	];
</script>

<h2 class="mb-4 border-b-2 border-black text-2xl">Experience</h2>

{#each items as item}
	<div class="mb-10">
		<div class="md:flex">
			<div class="md:flex-1">
				<h3 class="text-lg">{item.title}</h3>
				<h4 class="text-sm ">{item.company}</h4>
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
