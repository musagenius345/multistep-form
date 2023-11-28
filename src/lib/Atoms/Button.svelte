<script>
  export let transparent = false
  export let hidden = false
  export let disabled = false
</script>

<button on:click class:transparent class:hidden {disabled}>
  <slot>Button</slot>
</button>

<style>
  button{
    --color: var(--white);
    --bg-color: var(--marine-blue);
    background-color: var(--bg-color);
    color: var(--color, #03244E);
    border: 2px solid var(--marine-blue);
  }

  button:disabled{
    --color: var(--pastel-blue)
  }

  .transparent{
    background-color: inherit;
    color: var(--cool-gray);
    border: 0;

  }

  .transparent:is(:hover, :focus){
    color: var(--marine-blue);
  }
  
  button:is(:focus, :hover){
    /* background-color: var(--light-blue) */
  }
  .hidden{
    visibility: hidden;
  }

  @media( max-width: 575px){
    button > *{
      /* max-width: 100%; */
      text-align: center;
      text-wrap: none;
   
    }

    .hidden{
      padding-inline-start: 0.5em;
    }
    :not(.hidden){
      /* padding-inline-end: 1em; */
    }
  }
</style>
