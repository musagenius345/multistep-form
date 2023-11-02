<script>
  export let isChecked = false
  export let selected = false
  export let feature 
  export let description
  export let fee

  function selectAddOn(){
      if(!isChecked){
      isChecked = true
      selected = true
    } else {
      isChecked = false
      selected = false
  }
  }
  
</script>

<button class="cover" class:selected on:click={selectAddOn}>
  <input class="checkbox" type="checkbox" checked={isChecked}>
  <div class="text">
    <h3>{feature}</h3>
    <p class="desc">{description}</p>
  </div>
  <div >
    <p class="price">+${fee}/yr</p>
  </div>
</button>

<style>
  h3{
    padding: 0;
    margin: 0;
  }
.price{
    color: var(--purplish-blue)
  }

  .cover{
    /* all: unset; */
    background-color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;    
    outline: 0;
    border: 0;
    border: 2px solid var(--light-gray);
  }
  .checkbox{
    --primary: var(--purplish-blue);
  } 
  .cover:is(:focus, :hover){
    border: 3px solid var(--marine-blue);
    background-color: var(--pasteel-blue);
    outline: 0;
  }
 
  .selected{
    border: 3px solid var(--marine-blue);
    background-color: var(--pasteel-blue);

  }

   p{
    color: var(--cool-gray);
  }



</style>
