<script>
  import { posts } from '../stores/postsStore.js';
  import { user } from '../stores/userStore.js';
  import { handleLogOut } from '../auth.js';

  let menuOpen = false;
  let pathname = document.location.pathname;
  let showUnhide = pathname === '/';

  const toggleMenuOpen = () => (menuOpen = !menuOpen);

  $: username = $user ? $user.username : 'loading...';
</script>

<div>
  <div class="flex p-2 bg-teal-400">
    <a href="/">
      <h1
        class="text-white text-xl font-opensans font-bold px-2 border-2 border-white">
        GFG
      </h1>
    </a>
    <a href="/" class="mr-auto my-auto">
      <h1 class="text-xl font-opensans font-semibold px-2">Galovićev forum</h1>
    </a>
    <h1
      class="text-white text-xl font-opensans font-bold px-3 border-2 border-white
      justify-self-end flex"
      on:click={toggleMenuOpen}>
      {menuOpen ? '-' : '+'}
    </h1>
  </div>
  <div
    class="{menuOpen ? 'block' : 'hidden'} divide-y divide-teal-600 bg-teal-500">
    {#if $user}
      <p class="text-gray-700 font-bold p-2">Hello, {username}</p>
    {/if}

    <a href="/documents" class="block py-2">
      <p class="text-white px-2 pt-0">Documents</p>
    </a>
    <a href="/about" class="block py-2">
      <p class="text-white px-2">About</p>
    </a>

    {#if !$user}
      <a href="/login" class="block py-2">
        <p class="text-white px-2">Login</p>
      </a>
    {/if}

    {#if !$user}
      <a href="/signup" class="block py-2">
        <p class="text-white px-2">Signup</p>
      </a>
    {/if}

    {#if $user}
      <a href="/" class="block py-2" on:click={handleLogOut}>
        <p class="text-white px-2">Logout</p>
      </a>
    {/if}

    {#if showUnhide}
      <p class="text-white px-2 py-2" on:click={posts.unhideAll}>
        Unhide all ({$posts.filter(post => post.visible !== true).length})
      </p>
    {/if}
  </div>
</div>
