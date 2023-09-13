<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { ButtonTypes } from "../models";

    export const type: ButtonTypes = ButtonTypes.BUTTON

    const dispatch = createEventDispatcher()

    const handleClick = () => {
        dispatch('click')
    }
</script>

<button class="button" on:click={handleClick} type={type}>
    <slot />
</button>

<style>
    button {
        padding: 0.5rem 1rem;
        background-color: var(--secondary);
        color: var(--text-dark);
    }
</style>