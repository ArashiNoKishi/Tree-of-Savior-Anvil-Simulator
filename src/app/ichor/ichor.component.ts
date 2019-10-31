import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from "../message.service";
import { IchorService } from "../ichor.service";
import { Weapon } from '../weapon';
import { Restrictions } from "../restrictions";

@Component({
  selector: 'app-ichor',
  templateUrl: './ichor.component.html',
  styleUrls: ['./ichor.component.css']
})
export class IchorComponent implements OnInit {
  @Input() weapon: Weapon = {
    basePotential: 10,
    potential: 10,
    enhancement: 0
  };
  @Input() restrict: Restrictions = { minPot: 0, maxEnhc: 40 };

  constructor(
    private ichor: IchorService,
    private messages: MessageService
  ) {}

  ngOnInit() {
  }

  reset(): void {
    this.messages.clear();
    this.weapon.potential = this.weapon.basePotential;
  }

  ichor(): void {
    this.ichor.ichor(this.weapon);
  }

  gold(): void {
    this.ichor.gold(this.weapon);
  }

  ichorTo(): void {
    let pot = this.restrict.minPot ? this.restrict.minPot : 0;
    let enhc = this.restrict.maxEnhc ? this.restrict.maxEnhc : 0;
    this.ichor.ichorTo(this.weapon, pot, enhc);
  }

}