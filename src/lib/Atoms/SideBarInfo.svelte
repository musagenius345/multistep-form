<script>
  export let infoTitle = 'Step'
  export let infoSubtitle = "Step Info"
</script>
<div>
  <h3>{infoTitle}</h3>
  <h4>{infoSubtitle}</h4>
</div>

<style>
  div{
    text-transform: uppercase;
  }

  h3{
    font-weight: 400;
    padding:  0;
    margin: 0;
    color: var(--cool-gray);
    font-size: 0.85rem;
  }
  h4{
    padding: 0;
    margin: 0;
    color: var(--magnolia);
    font-size: 1.1rem;
    font-weight: 500;
  }

  
  @media (max-width: 575px){
    div{
      display: none;
    }
  }
</style>
