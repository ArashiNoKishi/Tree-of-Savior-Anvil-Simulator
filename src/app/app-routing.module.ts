import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WeaponComponent } from "./weapon/weapon.component";
import { MassSimulationComponent } from "./mass-simulation/mass-simulation.component";

const routes: Routes = [
  { path: "weapon", component: WeaponComponent },
  { path: "mass", component: MassSimulationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
