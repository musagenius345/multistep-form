
<script lang="ts">
  import { personalInfo } from '$store/personalInfo';
  import { data } from '$store/store';
  import { validateForm } from '$store/validation'
  import { isMobilePhone, isEmail, isEmpty } from 'validator';
  
  $: nameWarning  = '' 
  $: phoneWarning = ''
  $: emailWarning = ''
  // TODO rename these variables to the validation store keys
  $: isNameValid = true;
  $: isPhoneNumberValid = true;
  $: isEmailValid = true;

  let nameInput;
  let emailInput;
  let phoneInput;

  function validateName() {
    isNameValid = !(isEmpty($personalInfo.name) ?? '');
    $data.name = nameInput.value
    if(nameInput.value.trim() === ''){
    nameWarning = 'Name is required'
      isNameValid = false
    } else {
      nameWarning = ''
      isNameValid = true
    }
    
      $validateForm.stepOne.name = isNameValid
  }

  function validatePhone() {
    isPhoneNumberValid = isMobilePhone($personalInfo.tel ?? '');
    $validateForm.stepOne.phoneNumber = isPhoneNumberValid
    $data.phoneNumber = phoneInput.value
    phoneWarning = isPhoneNumberValid ? '' : 'Invalid Phone Number';
  }

  function validateEmail() {
    isEmailValid = isEmail($personalInfo.email ?? '');
    $validateForm.stepOne.email = isEmailValid
    $data.email = emailInput.value  
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
        <span class="warningMessage">{nameWarning}</span>
    </div>
    <input bind:this={nameInput} id="name" type="text" name="name" class:warning={!isNameValid} placeholder="e.g Stephen King" required  bind:value={$personalInfo.name} on:input={validateName} />
  </label>

  <label for="email">
    <div class="flex">
      <span>Email Address</span>
        <span class="warningMessage">{emailWarning}</span>
    </div>
    <input bind:this={emailInput} id="email" type="email" name="email" class:warning={!isEmailValid} placeholder="e.g stephenking@lorem.com" required bind:value={$personalInfo.email} on:input={validateEmail} />
  </label>

  <label for="phoneNumber">
    <div class="flex">
      <span>Phone Number</span>
        <span class="warningMessage">{phoneWarning}</span>
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
    border-color: 3px solid var(--strawberry-red);
    outline: 3px solid var(--strawberry-red);
    outline-offset: 2px;
    /* background-color: var(--strawberry-red); */
    /* opacity: 0.2; */
  }

  .warningMessage{
    color: var(--strawberry-red);
  }

  #name:invalid, #tel:invalid, #email:invalid {
    border-color: 3px solid var(--strawberry-red);
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

