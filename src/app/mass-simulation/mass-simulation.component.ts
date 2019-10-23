import { Component, OnInit, Input } from "@angular/core";
import { EnhancementService } from "../enhancement.service";
import { MessageService } from "../message.service";
import { Weapon } from "../weapon";
import { Rates } from "../rates";
import { Restrictions } from "../restrictions";

@Component({
  selector: "app-mass-simulation",
  templateUrl: "./mass-simulation.component.html",
  styleUrls: ["./mass-simulation.component.css"]
})
export class MassSimulationComponent implements OnInit {
  @Input() weapon: Weapon = {
    basePotential: 10,
    potential: 10,
    enhancement: 0
  };
  @Input() restrict: Restrictions = { minPot: 0, maxEnhc: 40 };
  potential: number = this.weapon.basePotential;
  @Input() amount: number = 100;
  @Input() stats: boolean = false;

  weapons: any[] = [];
  rates: Rates[] = [];

  constructor(
    private enhancement: EnhancementService,
    private messages: MessageService
  ) {}

  ngOnInit() {
    this.reset();
  }

  updatePot(event): void {
    this.weapon.potential = parseInt(event.target.value);
  }

  reset(): void {
    this.messages.clear();
    this.weapons = [];
    this.rates = [];
  }

  simulate(): void {
    let count = this.amount;
    let pot = this.restrict.minPot ? this.restrict.minPot : 0;
    let enhc = this.restrict.maxEnhc ? this.restrict.maxEnhc : 0;
    while (count) {
      let tempWeap = Object.assign({}, this.weapon);
      tempWeap = this.enhancement.enhanceTo(tempWeap, pot, enhc);
      this.weapons.push(tempWeap);
      count--;
    }
    this.fillStats();
  }

  fillStats(): void {
    this.rates = [];
    for (let i = 4; i < this.restrict.maxEnhc+1; i++) {
      if (this.weapons.filter(weap => weap.enhancement == i).length) {
        this.rates.push({
          enhance: i,
          weaps: this.weapons.filter(weap => weap.enhancement == i)
        });
      }
    }
  }
}
