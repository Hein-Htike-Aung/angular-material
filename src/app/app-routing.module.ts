import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CheckRadioComponent } from './check-radio/check-radio.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { InputsComponent } from './inputs/inputs.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { CardsComponent } from './cards/cards.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridsComponent } from './grids/grids.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { BadgesComponent } from './badges/badges.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'buttons', component: ButtonsComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'icon', component: IconsComponent},
  {path: 'badges', component: BadgesComponent},
  {path: 'progress-spinner', component: ProgressSpinnerComponent},
  {path: '_navbar', component: NavbarComponent},
  {path: 'side-nav', component: SideNavComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'lists', component: ListsComponent},
  {path: 'grids', component: GridsComponent},
  {path: 'expansion-panel', component: ExpansionPanelComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'tabs', component: TabsComponent},
  {path: 'stepper', component: StepperComponent},
  {path: 'inputs', component: InputsComponent},
  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'check-radio', component: CheckRadioComponent},
  {path: 'datepicker', component: DatePickerComponent},
  {path: 'tooltip', component: TooltipComponent},
  {path: 'snackbar', component: SnackbarComponent},
  {path: 'dialogs', component: DialogsComponent},
  {path: 'data-table', component: DataTableComponent},
  {path: 'virtual-scrolling', component: VirtualScrollingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
