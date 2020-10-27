<script>
  import { Router, Route } from 'svelte-routing';

  export let url = '';
  import './main.css';

  import PostPage from './pages/PostPage.svelte';
  import HomePage from './pages/HomePage.svelte';
  import LoginPage from './pages/LoginPage.svelte';
  import SigninPage from './pages/SigninPage.svelte';
  import Header from './components/Header.svelte';
  import NewPostPage from './pages/NewPostPage.svelte';
</script>

<Router {url}>
  <Header />

  <Route path="/">
    <HomePage />
  </Route>
  <Route path="post/:id" let:params>
    <PostPage id={params.id} />
  </Route>

  <Route path="post">
    <NewPostPage />
  </Route>

  <Route path="/login">
    <LoginPage />
  </Route>
  <Route path="/signup">
    <SigninPage />
  </Route>
  <Route path="/*">Page Not Found 404</Route>
</Router>
