<script lang="ts">
  import { slide, blur, fade } from 'svelte/transition'
  import { circIn, linear } from 'svelte/easing'
  import { currentStep, data } from '$store/store'
  import { submitted } from '$store/submit'
  import ButtonGroup from '$mol/ButtonGroup.svelte'
  import Heading from '$mol/Heading.svelte'
  import StepOne from '$org/StepOne.svelte'
  import StepTwo from '$org/StepTwo.svelte'
  import StepThree from '$org/StepThree.svelte'
  import Submission from '$org/Submission.svelte'
  import StepFour from '$org/StepFour.svelte'
  let title, subtitle



  
</script>
{#if $submitted === 0}
<form class="main" on:submit|preventDefault={console.log("step " + $currentStep + " is done")}>
  <Heading  {title} {subtitle}/>
  {#key $currentStep}
    <div class='steps' in:blur={{duration: 200, delay: 200, easing: circIn}} out:fade={{duration: 200, delay: 0, easing: linear}}>
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
{/if}
{#if $submitted === 1}
  <Submission />
{/if}

<style>
  .main{
    margin: 0.8rem 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.8em;
  }

  @media (max-width: 575px){
    .main{
      margin: var(--space-xs);
      padding: var(--space-xs);
      background-color: var(--white);
      margin-block-end: 8rem;
      border-radius: 12px;

    }

    .steps{

    }


      
    
  } 
</style>
