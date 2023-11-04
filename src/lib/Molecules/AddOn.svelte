<script>
  import { addOnStore } from '$store/addOn'
  export let selected
  export let feature 
  export let description
  export let fee

  function selectAddOn(){
      if(!selected){
      selected = true
    } else {
      selected = false
    }
  }

  function findObjectByValue(key, value) {
    return $addOnStore.find(obj => obj[key] === value);
  }
  
</script>

<button class="cover" class:selected on:click={selectAddOn}>
  <div class="textCheck">
  <input class="checkbox" type="checkbox" checked={selected}>
    <div class="detail">
    <h3>{feature}</h3>
    <p class="desc">{description}</p>
      </div>
  </div>
  <div >
    <p class="price">+${fee}/yr</p>
  </div>
</button>

<style>
  h3{
    font-weight: 700;
    padding: 0;
    margin: 0;
  }
.price{
    color: var(--purplish-blue);
    font-weight: 500;
  }
  .desc{
    font-weight: 500;
  }
.detail{
   text-align: left;
  /* padding-top: 13px; */
  }
.textCheck{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8em;
  }
  .cover{
    /* all: unset; */
    padding: .5rem 1.2rem;
    border-radius: 16px;
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
    border: 2px solid var(--marine-blue);
    outline: 0;
  }
 
  .selected{
    border: 2px solid var(--purplish-blue);
    background-color: var(--magnolia);

  }

   p{
    color: var(--cool-gray);
  }



</style>
