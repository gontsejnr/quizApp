import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './page/tabs/tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tabs', component:TabsPage, children:[{ path: 'history', loadChildren: './page/history/history.module#HistoryPageModule' },
  { path: 'music', loadChildren: './page/music/music.module#MusicPageModule' },
  { path: 'movie', loadChildren: './page/movie/movie.module#MoviePageModule' },
  { path: 'results', loadChildren: './page/results/results.module#ResultsPageModule'}]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
