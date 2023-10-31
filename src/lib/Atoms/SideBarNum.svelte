<script lang="ts">
  export let num = 1
  export let current
</script>

<div class:current>
  {num}
</div>

<style>
  div{
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 2px solid var(--light-gray);
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .current{
    background-color: hsl(201 70% 85%);
    background-color: var(--light-blue);
    color: var(--marine-blue)
  }
</style>
