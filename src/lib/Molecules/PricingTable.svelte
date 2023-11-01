<script>
  import PricingOption from '$atom/PricingOption.svelte';

  export let options = [];
  let selectedOption = null;

  function handleSelect(label, price) {
    selectedOption = { label, price };
  }
</script>

<div class="pricing-table">
  {#each options as { label, price }}
    <PricingOption label={label} price={price} selected={selectedOption === { label, price }} onSelect={handleSelect} />
  {/each}
</div>

<style>
  .pricing-table {
    display: flex;
    flex-direction: column;
  }
</style>
