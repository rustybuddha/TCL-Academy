<script>
  import Select from "svelte-select";
  export let id = "";
  export let placeholder = "";
  export let name = "";
  export let value;
  export let containerStyles = "";
  export let className = "";
  export let onChange;
  export let onClear;
  export let searchable = false;
  export let items = [];
  export let showChevron = false;
  export let clearable = false;
  export let multiple = false;
</script>

<Select
  {name}
  {id}
  {placeholder}
  class={className}
  {containerStyles}
  {items}
  bind:value
  {showChevron}
  on:clear={onClear}
  on:change={onChange}
  {searchable}
  {clearable}
  {multiple}
/>
