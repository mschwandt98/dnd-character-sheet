import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SheetComponent } from './sheet/sheet.component';

const routes: Routes = [
    { path: 'sheet', component: SheetComponent },
    { path: '**', redirectTo: '/sheet', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
