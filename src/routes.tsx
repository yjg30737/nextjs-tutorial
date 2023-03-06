import Home from './pages/index';
import Page from './pages/page';
import Project from './pages/project';
import About from './pages/about';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    title: 'Home',
  },
  {
    path: '/page',
    exact: true,
    component: Page,
    title: 'page',
  },
  {
    path: '/project',
    exact: true,
    component: Project,
    title: 'project',
  },
  {
    path: '/about',
    exact: true,
    component: About,
    title: 'About',
  },
];

export default routes;
