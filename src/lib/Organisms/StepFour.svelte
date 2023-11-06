<script>
  import { data, currentStep } from '$store/store'
  import { period } from '$store/optionsStore'

  $: price = $period === 'mo' ? $data.selectedPlan.price : $data.selectedPlan.yearlyPrice 
</script>

<fieldset>
 <div>
    <p class="plan">{$data.selectedPlan.heading}</p>
    <p class="plan">{price}</p>
 </div>
    <button on:click={() => $currentStep = 2}>Change</button>
  {#each $data.addOns as {feature, fee } } 
    <div>    
        <p class="feature">{feature}</p>
        <p class="fee">{fee}</p>
    </div>
 {/each}
 </fieldset>

<style>
  button{
    all: unset;
    cursor: pointer;
    text-decoration: underline;
    color: inherit;
  }
   
  button:is(:hover, :focus){
    color: var(--marine-blue);
  }
  
  fieldset{
    background-color: var(--magnolia);
  }

  .feature{
    color: var(--cool-gray);
  }
  .fee{
    color: inherit;
  }
</style>
