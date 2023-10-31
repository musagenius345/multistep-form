<script lang="ts">
  import Button from "$atom/Button.svelte";
  import { currentStep } from '$store/store'
  let hidden
  function nextStep(){
    currentStep.update(n => ( n < 5 ? n + 1: 5))
  }

function prevStep(){
    currentStep.update(n => ( n > 1 ? n - 1: 1))
  }
$:{
    if($currentStep  === 1){
       hidden = true
    } else {
      hidden = false
    }
  } 


</script>

<div class="flex">
  <Button on:click={prevStep} hidden={hidden}  transparent="true">Go Back</Button>
  <Button on:click={nextStep} end="true">{$currentStep < 5 ? 'Next Step' : 'Confirm' }</Button>
</div>

<style>
  .flex{
    display: flex;
    gap: 6em;
    justify-content: space-between;
  }
</style>
