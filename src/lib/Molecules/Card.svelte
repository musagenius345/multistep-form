<script>
 import CardIcon from '$atom/CardIcon.svelte'
  export let src  
  export let alt  
  export let price = 22
  export let heading = 'Heading'
  export let period = 'mo'
  export let active
  // export let onSelect
</script>

<button class="card" class:active on:click>
  <div class="icon">
    <CardIcon {src} {alt} />
  </div>
  <h4>{heading}</h4>
  <p>${price}/{period}</p>
  {#if period === 'yr'}
    <p class="yr">2 months free</p>
  {/if}
  <slot></slot>
</button>

  <style>
  button{
    all: unset;
    cursor: pointer;
    /* user-select: none; */
  }
  
  h4{
   color: var(--marine-blue);
    padding: 0;
    margin: 0;
    /* margin-bottom: .1em; */
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
    /* text-align: center; */
    margin-bottom: 1.3em;
  }
  .card{
    /* max-width: 400px; */
    border-radius: 12px;
    padding: 1.8em 1.6em;
    border: 2px solid var(--cool-gray); 
  }

  .active{
    border: 2px solid var(--purplish-blue);
    background-color: var(--magnolia);
  }



</style>
