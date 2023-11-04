<script>
 import AddOn from '$mol/AddOn.svelte'
  import { addOnStore } from '$store/addOn'
 
</script>

<div class="container">
  {#each $addOnStore as {feature, description, fee} }
    <AddOn {feature} {description} {fee} />
  {/each}
</div>
<style>
 div{
   margin: 1rem 0.2rem;
 }
</style>
