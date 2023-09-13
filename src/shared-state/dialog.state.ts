import { writable } from "svelte/store";

export const dialogState = writable<boolean>(false)
console.log('dialogState',dialogState.subscribe(value => console.log('dialogState',value)));
