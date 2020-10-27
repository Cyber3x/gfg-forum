<script>
  import { handleSigninForm } from '../auth.js';

  let username;
  let email;
  let password;
</script>

<div class="bg-white shadow-md m-10 p-5">
  <h1 class="text-gray-700 font-semibold font-opensans mb-2">Username</h1>
  <input
    class="p-2 border rounded mb-4 w-full"
    type="email"
    placeholder="user1337"
    bind:value={username} />
  <h1 class="text-gray-700 font-semibold font-opensans mb-2">Email</h1>
  <input
    class="p-2 border rounded mb-4 w-full"
    type="email"
    placeholder="test@gmail.com"
    bind:value={email} />
  <h1 class="text-gray-700 font-semibold font-opensans mb-2">Password</h1>
  <input
    class="p-2 border rounded mb-4 w-full"
    type="password"
    placeholder="********"
    bind:value={password} />
  <button
    class="bg-teal-500 rounded py-3 text-white font-bold font-roboto block w-full mt-6"
    on:click={handleSigninForm(email, password, username)}>Sign in
  </button>
</div>
