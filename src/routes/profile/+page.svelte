<script type="ts">
	import { isLoggedInState, userState } from "../../shared-state";

</script>

<div class="bg-zinc-700 px-10 py-10 flex flex-col items-center gap-y-4">
    {#if $isLoggedInState}
        <img src={$userState.photoURL} alt={$userState.displayName} class="rounded-full">
        <h3>{$userState.displayName}</h3>
        <p>{$userState.email}</p>
    {/if}
</div>
