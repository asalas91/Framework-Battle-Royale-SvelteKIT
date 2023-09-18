<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { ButtonTypes } from "../models";

    export const type: ButtonTypes = ButtonTypes.BUTTON

    const dispatch = createEventDispatcher()

    const handleClick = () => {
        dispatch('click')
    }
</script>

<button class="button bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md justify-center items-center" on:click={handleClick} {type}>
    <slot />
</button>

<style>
    button {
        padding: 0.5rem 1rem;
        background-color: var(--secondary);
        color: var(--text-dark);
    }
</style>