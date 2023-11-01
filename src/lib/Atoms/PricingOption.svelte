<script>
  export let label;
  export let price;
  export let selected;
  export let onSelect;
</script>

<div class="{selected ? 'selected' : ''}" on:click={() => onSelect(label, price)}>
  <span>{label}</span>
  <span>${price}/mo</span>
</div>

<style>
  .selected {
    background-color: lightblue;
  }
</style>
