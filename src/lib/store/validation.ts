import { persisted } from "svelte-persisted-store";

export const validateForm = persisted('validate-MSF', {
  stepOne: {
    name: true,
    email: true,
    phoneNumber: true
  },
  stepTwo: false,
})
