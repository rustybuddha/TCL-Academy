<script>
  export let disabled = false;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="50"
  height="50"
  viewBox="0 0 50 50"
  fill="none"
>
  <rect
    width="50"
    height="50"
    rx="25"
    fill={disabled ? "black" : "#093BAA"}
    fill-opacity={disabled && "0.15"}
  />
  <path
    d="M28.9063 17.1875L21.0938 25L28.9063 32.8125"
    stroke="white"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
