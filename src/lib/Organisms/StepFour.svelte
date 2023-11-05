<script>
  import { data } from '$store/store'
</script>

<fieldset>
 <label for="plan">
    <input type="text" id="plan">

 </label>
    <p>{JSON.stringify($data)}</p>
  {#each [1, 3, 5] as feature } 
    <label for="addOn">
      <input type="text" id="addOn" value={feature}>
        <!-- <p>{fee}</p> -->
    </label>
 {/each}
 </fieldset>

<style>
  .fieldset{
    color: var(--marine-blue);
  }
</style>
