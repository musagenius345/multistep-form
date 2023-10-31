<script>
  import StepTitle from '$atom/StepTitle.svelte'
  import StepSubtitle from "$atom/StepSubtitle.svelte";

  export let title = 'Title'
  export let subtitle = 'This is a subtitle'
</script>
<div>
   <StepTitle>{title}</StepTitle>
   <StepSubtitle>{subtitle}</StepSubtitle>
</div>


<style>
div{
  /* text-align: left; */
}
</style>
