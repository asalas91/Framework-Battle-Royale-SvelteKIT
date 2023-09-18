import { writable } from "svelte/store";
import type { User } from "../models";

export const emptyUserState: User = {
    name: ''
}

export const userState = writable<any>(emptyUserState)
export const isLoggedInState = writable<boolean>(false)