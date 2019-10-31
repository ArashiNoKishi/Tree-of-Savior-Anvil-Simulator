# Tree of Savior Anvil simulator

This app will help you simulate the Tree of Savior anvil using its chance rate and fail mechanics.

### Success Rates
Anvil success rates varies depending on the enhancement level of the equipment that is being enhanced, and it's as follows:
-  `100%` rate on enhances on +0 until +4.
- `88%` on +5.
- `78%` on +6.
- `68%` on +7.
- `59%` on +8.
- `51%` on enhances +9 and over until +39 given that +40 it's the maximun enhancement level.

If an enhancement fails the equipment loses `1` level of enhancement and `1` potential, if an equipment fails at  `0` potential the equipment it's destroyed.

These are the 2 features:

## Equipment simulation
This lets you simulate a single piece of equipment using its base potential and using the `Enhance` *normal anvil*, `Diamond` or `Gold` *only on equipment with 0 potential* for the truest IMC seal of approval experience.

Theres an auto enhance option that continiously enhances the equipment until the limits defined in `Lowest potential` and `Target enhancement`.

## Mass simulation
This lets you simulate `amount` number of equipment pieces with auto enhance with the limits defined in `Lowest potential` and `Target enhancement`, and will display a list of equipment pieces with the result. Or display a table with the statistics on how many equipment pieces landed on a specific ehanhce level when the `stats` option is selected.


## Extra: Ichor simulation
Legendary gear can equip `Ichors` to gain additional substats, these are extrated from `magic`, `rare` and `unique` grade gears gotten through:
- Challenge mode, where unidentified gear that result in `Random stat ichors` are gotten.
- Unique Raids, where gear that result in `Fixed stat ichors` are gotten.

Equipment from Legendary Raids can equip 2 Ichors but only 1 of each type, on the other hand legendary unidentified gear can only equip a `Fixed stat ichor` as it already has `Random stats` when appraised.

When Ichoring gear, each try has a `5%` success rate and and its consumed (converted into the Ichor), when it fails the equipment loses `1` potential, and if it fails at `0` potential the equipment is destroyed.