import { persisted } from "svelte-persisted-store";
const intialAddOns = [
   { id: 1, feature: 'Online service', description: 'Access to Multiplayer Games', fee: 10, selected: false },
   { id: 2, feature: 'Larger storage', description: 'Extra 1TB of cloud save', fee: 20 , selected: false},
   { id: 3, feature: 'Customizable profile', description: 'Customize theme on your profile', fee: 20 , selected: false}
 ]

export const addOnStore = persisted("addOns-MSF", intialAddOns)
