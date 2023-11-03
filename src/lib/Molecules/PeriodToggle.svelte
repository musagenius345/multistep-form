<script>
  export let yearly
</script>

<div>
<label for="switch">
  <span class:monthly={!yearly}>Monthly</span>
  <input class="switch" type="checkbox" name="switch" on:click role="switch">
  <span class:yearly>Yearly</span>
</label>
</div>

  <style>
   div {
     text-align: center;
     /* accent-color: var(--marine-blue); */
     background-color: var(--magnolia);
     /*padding: .3em 1.2em;*/
   }

   label{
     padding: 1.0rem 0.4rem;
     display:flex;
     justify-content: center;
     align-items: center;
     gap: 0.3em;
   }

   .switch{
     /* accent-color: var(--marine-blue); */
     /* accent-color: red; */
     /* --primary: var(--marine-blue); */
   }
   
    .yearly{
      color: var(--marine-blue);
    }
    .monthly{
      color: var(--marine-blue);
    }


   span{
     font-weight: 500;
     color: var(--cool-gray);
   }

   
</style>
