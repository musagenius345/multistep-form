<script>
  import StepTitle from '$atom/StepTitle.svelte'
  import StepSubtitle from "$atom/StepSubtitle.svelte";

  export let title = 'Personal info'
  export let subtitle = 'Please provide your name, email address, and phone number.'
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
