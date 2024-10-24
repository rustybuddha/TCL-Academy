<script>
	export let label = '';
	export let options = [];
	export let selectedValue = '';
	export let showValue = true;
	export let isDropdownOpen = false;
	
	export let roundedfull = false;
	export let bright = false;

	const handleOptionClick = (value) => {
		selectedValue = value;
		isDropdownOpen = false;
	};
</script>

<label for="dropdown" class="block text- mb-2">
	{label}
</label>

{#if showValue}
	<p  name = "project" class="font-normal text-[#ffffff99] text-[9px] leading-6">
		{selectedValue}
	</p>
{/if}

<div class="selectdiv">
	<div
		id="dropdown"
		class={`custom-dropdown  focus:ring-2 focus:ring-primary text-black text-md py-3 w-full p-2.5 block relative ${roundedfull ? 'rounded-full border-none bg-[#112D44]': 'rounded-md border border-gray-600 '} `}
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class={`selected-option ${bright ? 'text-[#06E7ED]':'text-black'}`} on:click={() => (isDropdownOpen = !isDropdownOpen)}>
			{selectedValue}
			<img src="arrow.png" alt="" class={`${isDropdownOpen ? 'rotate-180': ''}`} />
		</div>
		{#if isDropdownOpen}
			<ul
				class={`options-list absolute z-10 top-12 left-0  text-md rounded-md w-full p-2.5 ${roundedfull ? 'border-none bg-[#112D44]': 'border border-gray-600 bg-[#0E1F2D]'} ${bright ? 'text-[#06E7ED]':'text-gray-600'}`}
			>
				{#each options as option}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<li class={`py-3 px-4 ${bright ? '':'hover:text-white'}`} on:click={() => handleOptionClick(option)}>{option}</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style>
	.custom-dropdown {
		position: relative;
		cursor: pointer;
	}

	.selected-option {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.options-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.option {
		padding: 0.5rem 1rem;
		transition: background-color 0.2s, color 0.2s;
		cursor: pointer;
	}

	.option:hover {
		color: white;
	}
</style>