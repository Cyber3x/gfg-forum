<script>
  import { posts } from '../stores/postsStore';

  export let title;
  export let subject;
  export let description;
  export let author;
  export let id;
  let detailsExpanded = false;

  const MAX_TITLE_LENGTH = Infinity;

  const toggleDetails = () => {
    detailsExpanded = !detailsExpanded;
  };
</script>

<div class="width-max p-2 border-b-2 border-gray-400">
  <a href="post/{id}">
    <h1 class="font-opensans leading-tight text-md mb-1">
      <!-- {i + 1} -->
      {title.length > MAX_TITLE_LENGTH ? title.substring(0, MAX_TITLE_LENGTH) + '...' : title}
    </h1>
  </a>

  <div class="flex flex-wrap divide-x divide-gray-500">
    <button class="text-sm text-gray-500 pr-2">{subject}</button>
    <button class="text-sm text-gray-500 px-2" on:click={toggleDetails}>
      {detailsExpanded ? 'less' : 'more'}
    </button>
    <button class="text-sm text-gray-500 px-2 whitespace-no-wrap">
      by
      {author}
      3 hours ago
    </button>

    <button
      class="text-sm text-gray-500 pl-2"
      on:click={posts.hidePost(id)}>hide</button>
  </div>

  <div class="{detailsExpanded ? 'block' : 'hidden'} my-2">
    <p class="leading-normal text-gray-700">{description}</p>
  </div>
</div>
