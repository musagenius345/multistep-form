
import { persisted } from 'svelte-persisted-store';

export const optionsStore = persisted('selectedOptions', [
  { id: 1, heading: 'Arcade', price: 9, src: '/images/icon-arcade.svg', active: false },
  { id: 2, heading: 'Advanced', price: 12, src: '/images/icon-advanced.svg', active: false },
  { id: 3, heading: 'Pro', price: 15, src: '/images/icon-pro.svg', active: false }
]);
