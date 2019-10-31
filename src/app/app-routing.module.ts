import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WeaponComponent } from "./weapon/weapon.component";
import { MassSimulationComponent } from "./mass-simulation/mass-simulation.component";
import { IchorComponent } from "./ichor/ichor.component";

const routes: Routes = [
  { path: "weapon", component: WeaponComponent },
  { path: "mass", component: MassSimulationComponent },
  { path: "ichor", component: IchorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
