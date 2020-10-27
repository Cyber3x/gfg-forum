<script>
  import Post from '../components/Post.svelte';

  import { db } from '../firebase.js';

  import { posts } from '../stores/postsStore';
  import { user } from '../stores/userStore';

  let postTitle;

  const printuser = () => {
    console.log($user);
  };

  const uploadPost = async () => {
    try {
      if ($user.userCredentials)
        await db.collection('posts').add({ postTitle });
      else console.log('sign in');
    } catch (error) {
      alert(error.message);
    }
  };
</script>

<div>
  {#each $posts as post, id}
    {#if post.visible}
      <Post {...post} {id} />
    {/if}
  {/each}

  <input
    type="text"
    name="post"
    id="post"
    class="border-2 border-blue-500 p-2 my-2 w-full"
    bind:value={postTitle} />
  <button
    class="block p-2 bg-blue-500 font-opensans rounded ml-2"
    on:click={uploadPost}>Add post</button>
  <button on:click={printuser}>user</button>
</div>
