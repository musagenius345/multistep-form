<script lang="ts">
  import Button from "$atom/Button.svelte";
  import { currentStep, data } from '$store/store'
  let hidden
  function nextStep(){
    if($currentStep === 4){
     $data = intialData
    } else {
    currentStep.update(n => ( n < 4 ? n + 1: 4))
    }
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
  <Button on:click={nextStep}>{$currentStep < 4 ? 'Next Step' : 'Confirm' }</Button>
</div>

<style>
  .flex{
    display: flex;
    gap: 6em;
    justify-content: space-between;
  }
</style>
