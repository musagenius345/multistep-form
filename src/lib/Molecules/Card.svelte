<script>
  // import StepTitle from '$atom/StepTitle.svelte'
  // import StepSubtitle from '$atom/StepSubtitle.svelte'
 import CardIcon from '$atom/CardIcon.svelte'
  export let src  
  export let alt  
  export let price = 22
  export let heading = 'Heading'
  export let period = 'mo'
  // export let selected
  // export let onSelect
</script>


<!-- <div class="card"  class:selected on:click={() => onSelect(label, price)}> -->
<div class="card">
  <div class="icon">
  <CardIcon {src} {alt}/>
  </div>   
   <h4>{heading}</h4>
   <p>${price}/{period}</p>
   {#if period === 'yr'}
    <p class="yr">2 months free</p>
  {/if}
</div>

  <style>
  h4{
   color: var(--marine-blue);
    padding: 0;
    margin: 0;
  }

   .yr {
    font-weight: 500;
    color: var(--marine-blue)
  }

  p{
    padding: 0;
    margin: 0;
    color: var(--cool-gray);
  }
  .icon{
    text-align: center;
    margin-bottom: .4em;
  }
  .card{
    /* max-width: 400px; */
    border-radius: 12px;
    padding: 1.8em 1.6em;
    border: 2px solid var(--purplish-blue); 




  }
</style>
