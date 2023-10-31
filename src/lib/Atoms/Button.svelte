<script>
  export let transparent = false
  export let end = false
</script>

<button on:click class:transparent class:end>
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
  .end {
    justify-self: flex-end;
  }
  .transparent{
    background-color: inherit;
    color: var(--marine-blue);
  }
</style>
