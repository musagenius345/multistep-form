import { persisted } from "svelte-persisted-store";

export const validateForm = persisted('validate-MSF', {
  stepOne: {
    name: false,
    email: false,
    phoneNumber: false
  },
  stepTwo: false,
})
