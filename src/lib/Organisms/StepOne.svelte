
<script lang="ts">
  import { personalInfo } from '$store/personalInfo';
  import { isEmpty, isEmail, isMobilePhone } from 'validator';
  
  let nameWarning = 'Field required';
  let phoneWarning = 'Invalid Number';
  let emailWarning = 'Invalid Email';

  let isNameValid = true;
  let isPhoneNumberValid = true;
  let isEmailValid = true;

  let nameInput;
  let emailInput;
  let phoneInput;

  function validateName() {
    isNameValid = !isEmpty($personalInfo.name ?? '');
    nameWarning = isNameValid ? '' : 'Name is required';
  }

  function validatePhone() {
    isPhoneNumberValid = isMobilePhone($personalInfo.tel ?? '');
    phoneWarning = isPhoneNumberValid ? '' : 'Invalid Phone Number';
  }

  function validateEmail() {
    isEmailValid = isEmail($personalInfo.email ?? '');
    emailWarning = isEmailValid ? '' : 'Invalid Email Address';
  }

  function handleSubmit() {
    validateName();
    validatePhone();
    validateEmail();

    if (isNameValid && isPhoneNumberValid && isEmailValid) {
      alert('Form submitted successfully!');
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="name">
    <div class="flex">
      <span>Name</span>
      {#if isNameValid}
        <span class="warning">{nameWarning}</span>
      {/if}
    </div>
    <input bind:this={nameInput} id="name" type="text" name="name" class:warning={!isNameValid} placeholder="e.g Stephen King" required  bind:value={$personalInfo.name} on:input={validateName} />
  </label>

  <label for="email">
    <div class="flex">
      <span>Email Address</span>
      {#if isEmailValid}
        <span class="warning">{emailWarning}</span>
      {/if}
    </div>
    <input bind:this={emailInput} id="email" type="email" name="email" class:warning={!isEmailValid} placeholder="e.g stephenking@lorem.com" required bind:value={$personalInfo.email} on:input={validateEmail} />
  </label>

  <label for="phoneNumber">
    <div class="flex">
      <span>Phone Number</span>
      {#if isPhoneNumberValid}
        <span class="warning">{phoneWarning}</span>
      {/if}
    </div>
    <input bind:this={phoneInput} id="phoneNumber" type="tel" name="phone number" class:warning={!isPhoneNumberValid} placeholder="e.g +1 234 567 890" min="10" bind:value={$personalInfo.tel} on:input={validatePhone} />
  </label>
</form>


<style>
  .flex {
    display: flex;
    justify-content: space-between;
  }
  
  .warning {
    color: var(--strawberry-red);
    
    border-color: var(--strawberry-red);
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
