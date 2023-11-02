<script lang='ts'>
  import { currentStep } from "$store/store";
  import SideBarNum from '$atom/SideBarNum.svelte'
  import SideBarInfo from '$atom/SideBarInfo.svelte'

  export let num 
  export let current = false
  export let infoTitle
  export let infoSubtitle

$:{
    if($currentStep === Number(num)){
      current = true
    }
  }
</script>

<div>
  <SideBarNum {num} {current}/>
  <SideBarInfo  {infoSubtitle} {infoTitle}/>
</div>


<style>
  div {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1em;
    margin-block-end: 0.7em;
  }
</style>
