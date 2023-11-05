<script lang="ts">
  import { slide, blur, fade } from 'svelte/transition'
  import { circIn, linear } from 'svelte/easing'
  import { currentStep, data } from '$store/store'
  import ButtonGroup from '$mol/ButtonGroup.svelte'
  import Heading from '$mol/Heading.svelte'
  import StepOne from '$org/StepOne.svelte'
  import StepTwo from '$org/StepTwo.svelte'
  import StepThree from '$org/StepThree.svelte'
  import StepFour from '$org/StepFour.svelte'
  let title, subtitle



  
</script>

<form class="main">
  <Heading  {title} {subtitle}/>
  {#key $currentStep}
    <div in:blur={{duration: 200, delay: 200, easing: circIn}} out:fade={{duration: 200, delay: 0, easing: linear}}>
      {#if $currentStep === 1}
        <StepOne />
      {/if}
      {#if $currentStep === 2}
        <StepTwo />
      {/if} 
      {#if $currentStep === 3}
        <StepThree />
      {/if}
      {#if $currentStep === 4}
        <StepFour />
      {/if}
    </div>
  {/key}
  <ButtonGroup />
</form>

<style>
  .main{
    margin: 0.8rem 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.8em;
  }
</style>
