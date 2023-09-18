<script type="ts">
    import '../app.css';
	import { onAuthStateChanged, signOut } from "firebase/auth";
	import { auth } from "../firebase";
	import { isLoggedInState, userState } from "../shared-state";

    const logout = async () => {
        try {
            await signOut(auth)
            $isLoggedInState = false;
            $userState = {}
        } catch (error) {
            console.error('error',error);
        }
    }

    onAuthStateChanged(auth, authUser => {
        $userState = authUser;
        $isLoggedInState = !!authUser;
    })
</script>
<nav class="bg-neutral-800 p-4 text-white">
    <div class="container m-auto">
        <ul class="flex gap-2">
            <li><a class="text-blue-500 hover:text-blue-800" href="/home">Home</a></li>
            {#if $isLoggedInState}
                <li><a class="text-blue-500 hover:text-blue-800" href="/profile">Profile</a></li>
                <li><a class="text-blue-500 hover:text-blue-800" href="/" on:click={logout}>Logout</a></li>
            {:else}
                <li><a class="text-blue-500 hover:text-blue-800" href="/login">Login</a></li>
            {/if}
        </ul>
    </div>
</nav>
<main class="bg-zinc-900 text-white h-screen">
    <div class="container m-auto py-10 h-full flex justify-center items-center">
        <slot/>
    </div>
</main>