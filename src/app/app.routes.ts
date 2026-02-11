import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Blog } from './pages/blog/blog';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'blog', component: Blog },
  { path: 'contact', component: Contact }
];
