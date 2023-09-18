<script type="ts">
	import GButton from "$lib/GButton.svelte";
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { auth } from '../../firebase';
	import { isLoggedInState, userState } from "../../shared-state";
	import { goto } from "$app/navigation";

    const login = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth, provider);
            $userState = res.user;
            $isLoggedInState = true;
            goto('/profile')
        } catch (error) {
            console.error(error)
        }
    }
</script>

<GButton on:click={login}>Login with Google</GButton>
<style></style>