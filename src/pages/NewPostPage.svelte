<script>
  import { db } from '../firebase';

  import { user } from '../stores/userStore';

  let title;
  let description;
  let subject;

  const uploadPost = async () => {
    if ($user && title && description && subject) {
      await db
        .collection('posts')
        .add({ title, description, subject, createdBy: $user.uid });
    } else {
      alert('your are not signed in');
    }
  };
</script>

<div>
  <h1 class="ml-5 mt-2 text-gry-600 font-opensans">Title</h1>
  <textarea
    type="text"
    class="block p-2 mb-2 mx-auto p-2 border-2 w-11/12"
    bind:value={title} />
  <h1 class="ml-5 text-gry-600 font-opensans">Description</h1>
  <textarea
    type="text"
    class="block p-2 mb-2 mx-auto p-2 border-2 w-11/12"
    bind:value={description} />
  <h1 class="ml-5 text-gry-600 font-opensans">Subject</h1>
  <input
    type="text"
    class="border-box block mb-2 mx-auto p-2 border-2 w-11/12"
    bind:value={subject} />
  <button
    class="w-full mt-3 p-2 bg-teal-400 text-white font-opensans text-lg absolute  bottom-0"
    on:click={uploadPost}>Post</button>
</div>
