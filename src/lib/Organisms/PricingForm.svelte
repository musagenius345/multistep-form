<script>
  import PricingTable from '$mol/PricingTable.svelte';

  let selectedOption = null;

  let options = [
    { label: 'Arcade', price: 9 },
    { label: 'Advanced', price: 12 },
    { label: 'Pro', price: 15 }
  ];

  function handleSubmit() {
    console.log('Selected Option:', selectedOption);
    // Handle form submission logic here
  }
</script>

<div class="pricing-form">
  <PricingTable {options} bind:selectedOption />
  <button on:click={handleSubmit}>Submit</button>
</div>

<style>
  .pricing-form {
    width: 300px;
    margin: auto;
  }
</style>
