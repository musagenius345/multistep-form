<script lang="ts">
  import { slide } from 'svelte/transition'
  import { circIn } from 'svelte/easing'
  import { currentStep } from '$store/store'
  import ButtonGroup from '$mol/ButtonGroup.svelte'
  import Heading from '$mol/Heading.svelte'
  import StepOne from '$mol/StepOne.svelte'
</script>

<main class="main">
  <Heading />
  {#key $currentStep}
  {@debug $currentStep}
    <div transition:slide={{duration: 600, delay: 100, easing: circIn}}>
      {#if $currentStep === 1}
        <StepOne />
      {/if}
    </div>
  {/key}
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
