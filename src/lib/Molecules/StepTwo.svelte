<script>
  import Card from '$mol/Card.svelte'
  import PeriodToggle from '$mol/PeriodToggle.svelte'
  //import src from 'images/'
  let options = [
    { heading: 'Arcade', price: 9, src: '/images/icon-arcade.svg' },
    { heading: 'Advanced', price: 12, src: '/images/icon-advanced.svg' },
    { heading: 'Pro', price: 15, src: '/images/icon-pro.svg'}
  ];

  let selectedOption = null;

  function handleSelect(label, price) {
    selectedOption = { heading, price };
  }
  let period = 'mo'
  $: period
  function changePeriod(){
    if(period === 'mo'){
      period = 'yr'
    } else{
      period = 'mo'
    }
  }

</script>


<fieldset class="flex col">
  <div class="plan">
  {#each options as {heading, price, src}}
      <!-- <Card {heading} alt="{heading} tier icon" {price} {src} selected={selectedOption === { label, price }} onSelect={handleSelect}/> -->
      <Card {heading} alt="{heading} tier icon" {period} price={period === 'mo' ? price : price * 10} {src}/>
  {/each}
  </div>
  <div class="toggle">
    <PeriodToggle on:click={changePeriod} />
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
