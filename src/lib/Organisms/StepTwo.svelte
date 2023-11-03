
<script>
  import Card from '$mol/Card.svelte';
  import PeriodToggle from '$mol/PeriodToggle.svelte';
  let options = [
    { id:1, heading: 'Arcade', price: 9, src: '/images/icon-arcade.svg', active: false },
    { id: 2, heading: 'Advanced', price: 12, src: '/images/icon-advanced.svg', active: false },
    { id: 3, heading: 'Pro', price: 15, src: '/images/icon-pro.svg', active: false }
  ];

  function findIndexOfActiveOption(options) {
    return options.findIndex(option => option.active);
  }
  

  let period = 'mo';

   $: getPrice = (price) => period === 'mo' ? price : price * 10
  

$: indexOfActiveOption = findIndexOfActiveOption(options);

// $:console.log("Index of active option:", indexOfActiveOption);
  function toggleOption(option) {
    options = options.map((o) => {
      if (o.id === option.id) {
        o.active = !o.active;
      } else {
        o.active = false;
      }
			console.log(o)
      return o;
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
    {#each options as {id, heading, price, src, active }}
      <Card
        {heading}
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
