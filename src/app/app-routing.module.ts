import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
{path: '', redirectTo: '/recipes', pathMatch: 'full'},
{path: 'recipes', component: RecipesComponent, children: [
   {path: '', component: RecipeStartComponent},
   // stavio si route new ispred ove dolje sa id, u protivnom će ti probati parsati new kao id, lekcija 165
   {path: 'new', component: RecipeEditComponent},
   {path: ':id', component: RecipeDetailComponent},
   {path: ':id/edit', component: RecipeEditComponent}
]},
{path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   // we want to get this to our main module with export
   exports: [RouterModule]
})
export class AppRoutingModule {

}
