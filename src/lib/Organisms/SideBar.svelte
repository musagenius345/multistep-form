<script>
  // your script goes here
  import SideBarNum from '$atom/SideBarNum.svelte'
</script>
<aside>
  <SideBarNum />
</aside>

<style>
  aside{
    color: var(--white, #FFFFFF);
    background: url('/images/bg-sidebar-desktop.svg') no-repeat center / cover; 
    border-radius: 12px;
    min-height: 100vh;
    /* min-height: 100dvh; */
  }

  p{
    color: inherit;
    color: black;
  }
</style>
