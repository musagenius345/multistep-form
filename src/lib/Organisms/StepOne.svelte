<script lang="ts">
  import { personalInfo } from '$store/personalInfo'
  import { isEmpty, isEmail, isMobilePhone } from 'validator'
  let nameWarning = '' 
  let phoneWarning = ''
  let emailWarning = ''
  function validateName(){
     return $personalInfo.name.isEmpty()
  }

  function handleSubmit() {

      // If the form is valid, proceed with form submission
      alert('Form submitted successfully!');
    }
</script>
  <form on:submit|preventDefault={() => alert(JSON.stringify($personalInfo))}>
  <!-- <span style="color: black;">{$personalInfo.name}</span> -->
  <label for="name">
    <div class="flex">
    <span>Name</span>
      {#if validateName()}
    <span class="warning">{nameWarning}</span>
      {/if}
    </div>
    <input id="name" type="text" name="name" class:warning={validateName} placeholder="e.g Stephen King" required bind:value={$personalInfo.name} />
  </label>

  <label for="email">
    <div class="flex">
    <span class="warning">Email Address</span>
      {#if validateEmail()}
    <span>{emailWarning}</span>
      {/if}
    </div>
     <input id="email" type="tel" name="email" class:warning={!validateEmail} placeholder="e.g stephenking@lorem.com" required bind:value={$personalInfo.email} />
  </label>

  <label for="phoneNumber">
    <div class="flex">
    <span>Phone Number</span>
      {#if validatePhone()}
    <span class="warning">{phoneWarning}</span>
      {/if}
    </div>
     <input id="phoneNumber" type="tel" name="phone number" class:warning={!validatePhone} placeholder="e.g +1 234 567 89o" required bind:value={$personalInfo.tel} />
  </label>
<button type="submit" on:click={handleSubmit}>Submit</button>
</form>

<style>
  .flex{
    display: flex;
    justify-content: space-between;
  }
  .warning{
    border: var(--strawberry-red);
  }
  span.warning{
    color: var(--strawberry-red);
  }
 label {
   color: var(--marine-blue);
   font-weight: 500;
 }

 input:not(:placeholder-shown){
   font-weight: 700;
   color: var(--marine-blue);
   
 }
</style>
