import { Component, OnInit, Input } from "@angular/core";
import { EnhancementService } from "../enhancement.service";
import { MessageService } from "../message.service";
import { Weapon } from "../weapon";
import { Restrictions } from "../restrictions";

@Component({
  selector: "app-weapon",
  templateUrl: "./weapon.component.html",
  styleUrls: ["./weapon.component.css"]
})
export class WeaponComponent implements OnInit {
  @Input() weapon: Weapon = {
    basePotential: 10,
    potential: 10,
    enhancement: 0
  };
  @Input() restrict: Restrictions = { minPot: 0, maxEnhc: 40 };

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

  enhance(): void {
    this.enhancement.enhance(this.weapon);
  }

  diamond(): void {
    this.enhancement.diamond(this.weapon);
  }

  gold(): void {
    this.enhancement.gold(this.weapon);
  }

  enhanceTo(): void {
    let pot = this.restrict.minPot ? this.restrict.minPot : 0;
    let enhc = this.restrict.maxEnhc ? this.restrict.maxEnhc : 0;
    this.enhancement.enhanceTo(this.weapon, pot, enhc);
  }

  reset(): void {
    this.messages.clear();
    this.weapon.enhancement = 0;
    this.weapon.potential = this.weapon.basePotential;
  }
}
