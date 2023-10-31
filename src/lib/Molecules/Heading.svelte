<script lang="ts">
  import { currentStep } from "$store/store";
  import StepTitle from '$atom/StepTitle.svelte'
  import StepSubtitle from "$atom/StepSubtitle.svelte";

  // Heading and subtitle
  let title, subtitle

    $: {switch ($currentStep) {
    case 1:
        title = 'Personal info'
        subtitle = 'Please provide your name, email address, and phone number.'
      break;

    case 2:
        title = 'Select your plan'
        subtitle = 'You have the option of monthly or yearly billing.'
      break;
    case 3:
        title = 'Pick add-ons'
        subtitle = 'Add-ons help enhance your gaming experience.'
       break;
    case 4:
       title = 'Finishing up'
       subtitle = 'Double-check everything looks OK before confirming'
      break;
    default:
      title = 'Title'
      subtitle = 'This is a subtitle'
      break;
   }
  }

</script>
<div>
   <StepTitle>{title}</StepTitle>
   <StepSubtitle>{subtitle}</StepSubtitle>
</div>


<style>
div{
  /* Styling */
}
</style>
