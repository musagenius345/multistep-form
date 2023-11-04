
<script lang="ts">
  import { data } from '$store/store'
  import { optionsStore } from '$store/optionsStore'
  import Card from '$mol/Card.svelte';
  import PeriodToggle from '$mol/PeriodToggle.svelte';
  let options = $optionsStore 

  function findIndexOfActiveOption(options) {
    return options.findIndex(option => option.active);
  }

  function storedPlan(option){
      $data.selectedPlan = options[findIndexOfActiveOption(options)]
  }
  

  let period = 'mo';

   $: getPrice = (price) => period === 'mo' ? price : price * 10
  
  $: $data.selectedPlan = $optionsStore[findIndexOfActiveOption($optionsStore)]

$:console.log("selected plan:",$data.selectedPlan);
  
function toggleOption(option) {
  optionsStore.update(storeOptions => {
    return storeOptions.map((o) => {
      if (o.id === option.id) {
        o.active = !o.active;
      } else {
        o.active = false;
      }
      return o;
    });
  });
}

  function changePeriod() {
    period = period === 'mo' ? 'yr' : 'mo';
  }

  const billingStatus = (period) => period === 'yr' ? true : false



</script>

<fieldset class="flex col">
  <div class="plan">
    <!-- {indexOfActiveOption} -->
    {#each $optionsStore as {id, heading, price, src, active }}
{active}
      <Card
        {heading}
        id={crypto.randomUUID()}
        alt="{heading} tier icon"
        {period}
        {active}
        on:click={toggleOption({id, heading, price, src, active})}
        price={getPrice(price)}
        {src}
      >
      </Card>
    {/each}
  </div>
  <div class="toggle">
    <PeriodToggle yearly={billingStatus(period)} on:click={changePeriod} />
  </div>
</fieldset>

<style>
  .flex{
    display: flex;
  }

  .col {
    flex-direction: column;
  }

  .plan{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    margin: 1rem 0.4rem;




  }

</style>
