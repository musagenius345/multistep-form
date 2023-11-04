
// store.ts
// import { writable } from 'svelte/store';
import { persisted } from 'svelte-persisted-store'

export const currentStep = persisted("currentStep-MSF", 1)


const intialData = {
  name: null,
  email: null,
	phoneNumber: null,
  selectedPlan: null,
  addOns: []
}

// First param `preferences` is the local storage key.
// Second param is the initial value.
export const data = persisted('MultiStepFormData', intialData)

