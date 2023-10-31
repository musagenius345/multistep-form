<script>
  import Button from "$atom/Button.svelte";
</script>

<div class="flex">
  <Button transparent="true">Go Back</Button>
  <Button end="true">Next Step</Button>
</div>

<style>
  .flex{
    display: flex;
    gap: 6em;
    justify-content: space--between;
  }
</style>
