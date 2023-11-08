<script lang="ts">
  import Button from "$atom/Button.svelte";
  import { validateForm } from '$store/validation'
  import { submitted } from '$store/submit'
  import { currentStep, data } from '$store/store'
  let hidden
  let disabled = false
  function nextStep(){
    if($currentStep === 4){
      $submitted = 1
     alert(JSON.stringify($data))
    } else {
    currentStep.update(n => ( n < 4 ? n += 1 : n = 4))
    }
  }
$: console.log(JSON.stringify($validateForm))
$: hidden = $currentStep === 1 ? true : false
  $: {
    if ($currentStep === 1) {
       //hidden = true // Hide Go Back button
    // Validate step one form fields
        if (!($validateForm.stepOne.name) || !($validateForm.stepOne.phoneNumber) || !($validateForm.stepOne.email)) {
          disabled = true; // Disable button if any field is invalid
       } else{
        disabled = false
       }
    } else if ($currentStep === 2) {
    // Validate step two form fields
       if (!$data.selectedPlan) {
        disabled = true; // Disable button if selected plan is invalid
      } else {
        disabled = false
      }
   } //else if($currentStep > 1){
      // hidden = false
}
// Button remains enabled if none of the above conditions are met  }

function prevStep(){
    currentStep.update(n => ( n > 1 ? n - 1: 1))
  }


</script>

<div class="flex">
  <Button on:click={prevStep} hidden={hidden}  transparent="true">Go Back</Button>
  <Button on:click={nextStep} {disabled}>{$currentStep < 4 ? 'Next Step' : 'Confirm' }</Button>
</div>

<style>
  .flex{
    display: flex;
    gap: 6em;
    justify-content: space-between;
  }
</style>
