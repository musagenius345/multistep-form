<script lang="ts">
 import FormInput from '$atom/FormInput.svelte'
type FormField = {
  type: string;
  name: string;
  label: string;
  placeholder: string;
};

type FormFieldsData = {
  name: FormField;
  email: FormField;
  number: FormField;
};

const data: FormFieldsData = {
  name: {
    type: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'e.g Stephen King',
  },
  email: {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'e.g stephenking@lorem.com',
  },
  number: {
    type: 'number',
    name: 'number',
    label: 'Phone Number',
    placeholder: 'e.g +01 234 567 890',
  },
};

</script>
  <div>
{#each Object.values(data) as { type, name, label, placeholder }}
   <FormInput {type} {name} {label} {placeholder}/>
{/each}
</div>
