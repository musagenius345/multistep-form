<script lang="ts">
  import { personalInfo } from '$store/personalInfo'
  function handleSubmit() {

      // If the form is valid, proceed with form submission
      alert('Form submitted successfully!');
    }
</script>
  <form on:submit|preventDefault={() => alert(JSON.stringify($personalInfo))}>
  <!-- <span style="color: black;">{$personalInfo.name}</span> -->
  <label for="name"><span>Name</span> 
    <input id="name" type="text" name="name" placeholder="e.g Stephen King" required bind:value={$personalInfo.name} />
  </label>

  <label for="email"><span>Email Address</span> 
     <input id="email" type="tel" name="email" placeholder="e.g stephenking@lorem.com" required bind:value={$personalInfo.email} />
  </label>

  <label for="phoneNumber"><span>Phone Number</span> 
     <input id="phoneNumber" type="tel" name="phone number" placeholder="e.g +1 234 567 89o" required bind:value={$personalInfo.tel} />
  </label>
<button type="submit" on:click={handleSubmit}>Submit</button>
</form>

<style>
 label {
   color: var(--marine-blue);
   font-weight: 500;
 }

 input:not(:placeholder-shown){
   font-weight: 700;
   color: var(--marine-blue);
   
 }
</style>
