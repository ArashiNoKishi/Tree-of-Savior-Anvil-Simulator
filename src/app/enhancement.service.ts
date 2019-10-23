import { Injectable } from "@angular/core";
import { MessageService } from "./message.service";
import { Weapon } from "./weapon";
import { CHANCE } from "./chance";

@Injectable()
export class EnhancementService {
  enhance(weap: Weapon): Weapon {
    if (weap.potential < 0) {
      return weap;
    }
    if (Math.random() < CHANCE[weap.enhancement]) {
      weap.enhancement++;
      this.messageService.add("Enhancement Success, now: +" + weap.enhancement);
    } else {
      weap.enhancement--;
      weap.potential--;
      this.messageService.add(
        "Enhancement Fail, now: +" +
          weap.enhancement +
          ", pot: " +
          weap.potential
      );
    }
    return weap;
  }

  enhanceTo(weap: Weapon, pot: number, ench: number): Weapon {
    let tempWeap = weap;
    while (tempWeap.potential > pot && tempWeap.enhancement < ench) {
      tempWeap = this.enhance(tempWeap);
    }
    return tempWeap;
  }

  diamond(weap: Weapon): Weapon {
    if (weap.potential < 0) {
      return weap;
    }
    if (Math.random() < CHANCE[weap.enhancement]) {
      weap.enhancement++;
      this.messageService.add("Enhancement Success, now: +" + weap.enhancement);
    } else {
      weap.potential--;
      this.messageService.add(
        "Enhancement Fail, now: +" +
          weap.enhancement +
          " no lose on diamond, pot: " +
          weap.potential
      );
    }
    return weap;
  }

  gold(weap: Weapon): Weapon {
    if (weap.potential < 0) {
      return weap;
    }
    if (Math.random() < CHANCE[weap.enhancement]) {
      weap.enhancement++;
      this.messageService.add("Enhancement Success, now: +" + weap.enhancement);
    } else {
      weap.enhancement = weap.enhancement > 11 ? 10 : weap.enhancement - 1;
      this.messageService.add(
        "Enhancement Fail, now: +" +
          weap.enhancement +
          ", pot: " +
          weap.potential
      );
    }
    return weap;
  }

  constructor(private messageService: MessageService) {}
}
