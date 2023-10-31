<script lang="ts">
  import Button from "$atom/Button.svelte";
  import { currentStep } from '$store/store'

  function nextStep(){
    currentStep.update(n => ( n < 5 ? n + 1: 5))
  }

function prevStep(){
    currentStep.update(n => ( n > 0 ? n - 1: 0))
  }


</script>

<div class="flex">
  {#if $currentStep !== 1}
  <Button on:click={prevStep}  transparent="true">Go Back</Button>
  {/if }
  <Button on:click={nextStep} end="true">{$currentStep < 5 ? 'Next Step' : 'Confirm' }</Button>
</div>

<style>
  .flex{
    display: flex;
    gap: 6em;
    justify-content: space-between;
  }
</style>
