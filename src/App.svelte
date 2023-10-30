<script lang="ts">
  import eruda from 'eruda'
  import SideBar from "$org/SideBar.svelte";
  import Main from '$org/Main.svelte'


  eruda.init()
</script>
<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>
<div class="grid grid-space offset">
  <SideBar></SideBar>
  <Main></Main>
</div>
<style>
  :global(:root){
   --marine-blue: hsl(213, 96%, 18%);
   --purplish-blue: hsl(243, 100%, 62%);
   --pastel-blue: hsl(228, 100%, 84%);
   --light-blue: hsl(206, 94%, 87%);
   --strawberry-red: hsl(354, 84%, 57%);
   --cool-gray: hsl(231, 11%, 63%);
   --light-gray: hsl(229, 24%, 87%);
   --magnolia: hsl(217, 100%, 97%);
   --alabaster: hsl(231, 100%, 99%);
   --white: hsl(0, 0%, 100%);
  }

  :global(body){
    font-family: 'Ubuntu', sans-serif;
    color: var(--white);
  }
   .offset{ 
     padding: 15px;
   }

   .grid-space{
     grid-template-columns: 1fr 3fr;
     grid-template-rows: 1fr;   
   }
</style>
