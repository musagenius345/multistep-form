
<script lang="ts">
  import { personalInfo } from '$store/personalInfo';
  import { isEmpty, isEmail, isMobilePhone } from 'validator';
  
  let nameWarning = 'Field required';
  let phoneWarning = 'Invalid Number';
  let emailWarning = 'Invalid Email';
  
  function validateName() {
    return isEmpty($personalInfo.name ?? '');
  }
  
  // function isNullToString(val){
  //   return val === null ? '' : null
  // }

  function validatePhone() {
    return !isMobilePhone($personalInfo.tel ?? '');
  }
  
  function validateEmail() {
    return !isEmail($personalInfo.email ?? '');
  }
  
  function handleSubmit() {
    if (!validateName() && !validatePhone() && !validateEmail()) {
      // Form is valid, proceed with form submission
      alert('Form submitted successfully!');
    } else {
      // Form is invalid, display validation warnings
      if (validateName()) nameWarning = 'Name is required';
      if (validatePhone()) phoneWarning = 'Invalid Phone Number';
      if (validateEmail()) emailWarning = 'Invalid Email Address';
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="name">
    <div class="flex">
      <span>Name</span>
      {#if validateName()}
        <span class="warning">{nameWarning}</span>
      {/if}
    </div>
    <input id="name" type="text" name="name" class:warning={validateName} placeholder="e.g Stephen King"  bind:value={$personalInfo.name} min="1" on:blur={validateName}/>
  </label>

  <label for="email">
    <div class="flex">
      <span>Email Address</span>
      {#if validateEmail()}
        <span class="warning">{emailWarning}</span>
      {/if}
    </div>
    <input id="email" type="email" name="email" class:warning={validateEmail} placeholder="e.g stephenking@lorem.com" bind:value={$personalInfo.email} on:blur={validateEmail} />
  </label>

  <label for="phoneNumber">
    <div class="flex">
      <span>Phone Number</span>
      {#if validatePhone()}
        <span class="warning">{phoneWarning}</span>
      {/if}
    </div>
    <input id="phoneNumber" type="tel" name="phone number" class:warning={validatePhone} placeholder="e.g +1 234 567 890" min="10" bind:value={$personalInfo.tel}  on:blur={validatePhone}/>
  </label>
  
  <!-- <button type="submit">Submit</button> -->
</form>

<style>
  .flex {
    display: flex;
    justify-content: space-between;
  }
  
  .warning {
    color: var(--strawberry-red);
    
    /* border-color: var(--strawberry-red); */
  }

  input:invalid{
    border-color: var(--cool-gray);
  }
  
  label {
    color: var(--marine-blue);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  input:not(:placeholder-shown) {
    font-weight: 700;
    color: var(--marine-blue);
  }
  
  </style>
