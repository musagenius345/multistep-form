<script>
 import AddOn from '$mol/AddOn.svelte'

 const addOns = [
   { feature: 'Online service', description: 'Access to Multiplayer Games', fee: '10' },
   { feature: 'Larger storage', description: 'Extra 1TB of cloud save', fee: '20' },
   { feature: 'Customizable profile', description: 'Customize theme on your profile', fee: '20' }
 ]

</script>

<div class="container">
  {#each addOns as {feature, description, fee} }
    <AddOn {feature} {description} {fee}/>
  {/each}
</div>
<style>
 div{

 }
</style>
