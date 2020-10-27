import { writable } from 'svelte/store';

let initialPosts = [
  {
    id: 0,
    title:
      'Trebam pomoć oko ovog zadatka. Stvarno ne znam kak da ga riješim i jel bi ko mogo pomoći?',
    subject: 'Matematika',
    description:
      'Ovo je zadatak 1 + x = 2, kako da odredim x? Ako znam tangens od kuta alfa, jel moguće kupiti novi auto, zakaj mi šcetinka ne da mira u ovoj kući.',
    author: undefined,
    visible: true,
  },
  {
    id: 1,
    title: 'Trebam pomoć oko ove stanice. pomoć oko ove stanice.',
    subject: 'Biologija',
    description: 'Ovo je zadatak 1 + x = 2, kako da odredim x?',
    author: undefined,
    visible: true,
  },
  {
    id: 2,
    title: 'Zna tko riješiti ovaj redoks.',
    subject: 'Kemija',
    description: 'Ovo je redoks So4 + h20 -> 3s04 + 02',
    author: 'Neven Lukić',
    visible: true,
  },
];

initialPosts = initialPosts.map(post =>
  !post.author ? { ...post, author: 'Anonymous' } : post
);

const createPostsStore = () => {
  const { subscribe, update } = writable(initialPosts);

  return {
    subscribe,
    unhideAll: () => {
      update(posts => posts.map(post => ({ ...post, visible: true })));
    },
    hidePost: id =>
      update(posts =>
        posts.map(post => (post.id === id ? { ...post, visible: false } : post))
      ),
  };
};

export const posts = createPostsStore();
