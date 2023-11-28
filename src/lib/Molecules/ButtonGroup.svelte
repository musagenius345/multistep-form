<script lang="ts">
  import Button from "$atom/Button.svelte";
  import { validateForm, intialData as validateData } from '$store/validation'
  import { submitted } from '$store/submit'
  import { optionsStore, initialOptionState } from '$store/optionsStore'
  import { addOnStore, initialAddOns } from '$store/addOn'
  import { personalInfo, intialData as personalData } from '$store/personalInfo'
  import { currentStep, data, initialData } from '$store/store'
  let hidden
  let disabled = false
  function nextStep(){
    if($currentStep === 4){
      $submitted = 1
      $currentStep = 1
      $validateForm = validateData
      $personalInfo = personalData
      $addOnStore = initialAddOns
      $data = initialData
      $optionsStore = initialOptionsState
     // alert(JSON.stringify($data))
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
<div class="btn-container">
<div class="flex btn-group">
  <Button on:click={prevStep} hidden={hidden}  transparent="true">Go Back</Button>
  <Button on:click={nextStep} {disabled}>{$currentStep < 4 ? 'Next Step' : 'Confirm' }</Button>
</div>
</div>
<style>
  .flex{
    display: flex;
    gap: 6em;
    justify-content: space-between;
  }

  .btn-container{
    display: contents;
  }

  @media (max-width: 575px){
    .btn-group{
      background-color: var(--white);
      margin-inline: 0 auto;
      padding-inline: 2em;
      padding-block: 1.2em;;
      /* margin-inline: 30dvw; */
    }

    .flex{
      gap: 12rem;
      justify-content: space-between;
    }

    .steps{
      margin-block-end: 0;
    }

    .btn-container{
      position: fixed;
      bottom: 0;
      left: 0;
      max-width: 100%;
      width: 100%;
      display: block;
      background-color: var(--magnolia);
      /* padding-inline: 0.21em; */
      /* padding-block: 1.25em; */
    }
  }
</style>
