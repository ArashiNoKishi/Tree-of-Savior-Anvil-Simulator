import { Injectable } from '@angular/core';
import { MessageService } from "./message.service";
import { Weapon } from "./weapon";

@Injectable()
export class IchorService {

  constructor(private messageService: MessageService) { }

  ichor(weap: Weapon): Weapon {
    if (weap.potential < 0 || weap.ichored) {
      return weap;
    }
    if (Math.random() < 0.05) {
      this.messageService.add("Ichor Success at pot: " + weap.potential);
      weap.ichored = true;
    } else {
      weap.potential--;
      this.messageService.add(
        "Ichor Fail, now: " +
          (weap.potential<0?'Broken':'pot: '+weap.potential)
      );
    }
    return weap;
  }

  ichorTo(weap: Weapon, pot: number, ench: number): Weapon {
    let tempWeap = weap;
    while (tempWeap.potential > pot && !tempWeap.ichored) {
      tempWeap = this.ichor(tempWeap);
    }
    return tempWeap;
  }

  gold(weap: Weapon): Weapon {
    if (weap.potential != 0 || weap.ichored) {
      return weap;
    }
    if (Math.random() < 0.05) {
      this.messageService.add("Ichor Success with golden Ichor");
      weap.ichored = true;
    } else {
      this.messageService.add(
        "Ichor Fail, no break with golden Ichor"
      );
    }
    return weap;
  }
}