<script>
  export let type = 'text'
  export let name = 'name'
  export let label = 'label'
  export let placeholder = 'This is a placeholder'
  export let required = 'true'
  export let value

  function formatPhoneNumber(input) {
    console.log('To be Formatted')
  }
  </script>

<label for={name}><span>{label}</span> 
  <input id={name} {type} {name} {placeholder} {required} bind:value={value} />
</label>

<style>
 label {
   color: var(--marine-blue);
   font-weight: 500;
 } 
</style>
