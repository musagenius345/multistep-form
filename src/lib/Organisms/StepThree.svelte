<script>
 import AddOn from '$mol/AddOn.svelte'
  import { addOnStore } from '$store/addOn'
 
</script>

<div class="container">
  {#each $addOnStore as {index, feature, description, fee, selected} }
    <AddOn {feature} {index} {description} {fee} {selected}/>
  {/each}
</div>
<style>
 div{
   margin: 1rem 0.2rem;
 }
</style>
