<script>
  import ButtonGroup from '$mol/ButtonGroup.svelte'
  import Heading from '$mol/Heading.svelte'
  import StepOne from '$mol/StepOne.svelte'
</script>

<main class="main">
  <Heading />
  <StepOne />
  <ButtonGroup />
</main>

<style>
  .main{
    margin: 0.8rem 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.8em;
  }
</style>
