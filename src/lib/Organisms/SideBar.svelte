<script lang="ts">
  import { currentStep } from '$store/store'
  // your script goes here
  import SideBarItem from '$mol/SideBarItem.svelte'

</script>
<aside>
  {#key $currentStep}
  <SideBarItem num="1" infoTitle="step 1" infoSubtitle="your info"/>
  <SideBarItem num="2" infoTitle="step 2" infoSubtitle="select plan"/>
  <SideBarItem num="3" infoTitle="step 3" infoSubtitle="add-ons"/>
  <SideBarItem num="4" infoTitle="step 4" infoSubtitle="summary"/>
 {/key}
</aside>

<style>
  aside{
    --src: url('/images/bg-sidebar-desktop.svg');
    color: var(--white, #FFFFFF);
    padding: 0.8em 1.1em;
    background: var(--src) no-repeat center / cover; 
    border-radius: 12px;
    min-height: 100vh;
    /* min-height: 100dvh; */
  }
@media (max-width: 575px){
    aside{
    /* position: sticky; */
    --src: url('/images/bg-sidebar-mobile.svg');
    min-height: 5rem;
    max-height: 25vh;
    max-height: 25dvh;
      display: flex;
      justify-content: space-evenly;
    }
  }
  p{
    color: inherit;
    color: black;
  }
</style>
