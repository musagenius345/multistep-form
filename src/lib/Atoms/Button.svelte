<script>
  export let transparent = false
</script>

<button class:transparent>
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

  .transparent{
    background-color: inherit;
    color: var(--marine-blue);
  }
</style>
