<script lang="ts">
  import { slide, blur, fade } from 'svelte/transition'
  import { circIn, linear } from 'svelte/easing'
  import { currentStep } from '$store/store'
  import ButtonGroup from '$mol/ButtonGroup.svelte'
  import Heading from '$mol/Heading.svelte'
  import StepOne from '$mol/StepOne.svelte'
  let title, subtitle


  // Heading and subtitle
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
      break;
   }
  }
</script>

<main class="main">
  <Heading  {title} {subtitle}/>
  {#key $currentStep}
    <div in:blur={{duration: 200, delay: 200, easing: circIn}} out:fade={{duration: 200, delay: 0, easing: linear}}>
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
