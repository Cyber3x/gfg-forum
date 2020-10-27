<script>
  import { posts } from '../stores/postsStore';

  export let id;

  let currentPost = $posts[id];
</script>

<div class="p-2 border-b-2">
  <h1 class="text-md font-bold">Post {currentPost.title}</h1>
  <p class="text-gray-500 text-sm font-roboto mt-2">
    {currentPost.subject}
    | by
    {currentPost.author}
    3 hrs ago
  </p>
</div>
<div class="text-md font-opensans p-2">{currentPost.description}</div>
