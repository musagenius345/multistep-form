<script>
  import { data, currentStep } from '$store/store'
  import { period } from '$store/optionsStore'

  // Format Currency 
  const formatCurrency = amount => new Intl.NumberFormat('en-US', { style: 'currency', minimumFractionDigits: 0, maximumFractionDigits: 0,currency: 'USD' }).format(amount);
  
  // Price of selectedplan in a given billing
  $: price = $period === 'mo' ? $data.selectedPlan.price : $data.selectedPlan.yearlyPrice 

  // Calculate total price including selected plan and add-ons
  $: totalAddOnsPrice = $data.addOns.reduce((acc, { fee }) => acc + (fee / 10 * ($period === 'mo' ? 1 : 10)), 0);
  $: totalPrice = price + totalAddOnsPrice;
  $: formattedTotalPrice = formatCurrency(totalPrice);

  // The payment method
  $: billing = $period === 'mo' ? 'Monthly' : 'Yearly'

</script>
<div class="container">
<fieldset class="flex fieldset spacing">
 <div class="flex planDiv">
    <div>
      <p class="plan">{$data.selectedPlan.heading} ({billing})</p>
      <button on:click={() => $currentStep = 2}>Change</button>
    </div>
    <p class="price">+{formatCurrency(price)}/{$period}</p>
 </div>
 <div>
  {#each $data.addOns as {feature, fee } } 
    <div class="flex add-on">    
        <p class="feature">{feature}</p>
        <p class="fee">+{formatCurrency($period === 'mo' ? fee / 10 : fee)}/{$period}</p>
    </div>
 {/each}
 </div>
 </fieldset>
  <div class="flex spacing total">
    <p>Total (per {billing.slice(0, -2).toLowerCase()})</p>
    <p class="total-price">{formattedTotalPrice}/{$period}</p>
  </div>
</div>
<style>
    .fee{
      font-weight: 500; 
    }
    .add-on > p{
      margin-block: .4em;
    }
    .planDiv{
    padding-bottom: .4em;
    border-bottom: 2px solid var(--cool-gray);
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
    font-weight: 700;
    font-size: 1.3rem;
  }

  .fieldset{
    background-color: var(--magnolia);
    font-size: 1.1rem;
    border-radius: 12px;
   flex-direction: column;
    gap: 1rem;
    
  }

  .spacing{
    --margin: 0.5rem 0.8rem;
    --padding: 1.75rem 2.2125rem;
    margin: var(--margin);
    padding: var(--padding);

  }

  .container{
    margin: 0.5rem 0.225rem;
    padding: 0.75rem 0.9125rem;

  }

  .feature{
    color: var(--cool-gray);
    font-size: inherit;
  }
  .price, .fee{
    color: var(--marine-blue);
    font-size: inherit;
  }

  .price{
    font-weight: 500;
  }
  .total{
  --font-size: 1.2rem;
  }
  .total-price{
    color: var(--purplish-blue);
    --font-size: 1.3rem;
    font-weight: 700;
  }
</style>
