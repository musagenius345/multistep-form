<script>
  import { data, currentStep } from '$store/store'
  import { period } from '$store/optionsStore'

const formatCurrency = amount => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  $: price = $period === 'mo' ? $data.selectedPlan.price : $data.selectedPlan.yearlyPrice 
  // $: formattedPrice = formatCurrency(price)
</script>

<fieldset class="flex fieldset">
 <div class="flex">
    <div>
      <p class="plan">{$data.selectedPlan.heading}</p>
      <button on:click={() => $currentStep = 2}>Change</button>
    </div>
    <p>{formatCurrency(price)}</p>
 </div>
 <div>
  {#each $data.addOns as {feature, fee } } 
    <div class="flex">    
        <p class="feature">{feature}</p>
        <p class="fee">{formatCurrency(fee)}</p>
    </div>
 {/each}
 </div>
 </fieldset>

<style>
  p{
    /* margin: 0; */
  }
  button{
    all: unset;
    cursor: pointer;
    text-decoration: underline;
    color: inherit;
    font-size: inherit;
  }
   
  button:is(:hover, :focus){
    color: var(--marine-blue);
  }
  .flex{
    display: flex;
    justify-content: space-between;
  } 
  .plan{
    margin-bottom: 0.2em;
    color: var(--marine-blue);
    font-weight: 400;
    font-size: 1.3rem;
  }

  .fieldset{
    background-color: var(--magnolia);
    font-size: 1.1rem;
    border-radius: 12px;
    margin: 1rem 1.65rem;
    padding: 1.25rem 1.85rem;
    flex-direction: column;
    gap: 1rem;
  }

  .feature{
    color: var(--cool-gray);
    font-size: inherit;
  }
  .fee{
    color: inherit;
    font-size: inherit;
  }
</style>
