import { bootstrapApplication } from '@angular/platform-browser';
import { TreeTableSelectionCheckboxDemo } from './app/tree-table-selection-checkbox-demo';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(TreeTableSelectionCheckboxDemo, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));