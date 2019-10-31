# Tree of Savior Anvil simulator

This app will help you simulate the Tree of Savior anvil using its chance and fail mechanics.

### Success Rates
Anvil success rates varies depending on the enhancement level of the equipment that is being enhanced, and it's as follows:
-  `100%` rate on enhances from `+0` to `+4`.
- `88%` on `+5`.
- `78%` on `+6`.
- `68%` on `+7`.
- `59%` on `+8`.
- `51%` on enhances from `+9` until `+39` given that `+40` it's the maximun enhancement level.

If an enhancement fails the equipment loses `1` level of enhancement and `1` potential, if an equipment fails at `0` potential the equipment it's destroyed.
##### Diamond Anvil
When using this anvil to enhance an equipment it won't lose an enhancement level if it fails.
##### Gold anvil
This anvil can only be used to enhance equipment that has `0` potential, and it won't be destroyed if it fails, however if the equipment had an enhancement level of `+12` or higher it will be lowered to `+10`.

These are the features:

## Equipment simulation
This lets you simulate a single piece of equipment using its base potential and using the `Enhance` (*normal anvil*), `Diamond` or `Gold` for the truest IMC seal of approval RNG experience.

The auto enhance option continiously enhances the equipment until the equipment reaches the limits defined by `Lowest potential` and `Target enhancement` fields.

## Mass simulation
This simulates `amount` number of equipment pieces with auto enhance with the limits defined by `Lowest potential` and `Target enhancement`, and will display a list of equipment pieces with the result. Or display a table with the statistics on how many equipment pieces landed on a specific enhancement level when the `stats` option is selected. 

## Extra: Ichor simulation
Legendary gear can equip `Ichors` to gain additional substats, these are extrated from `magic`, `rare` and `unique` grade gears gotten through:
- Challenge mode, where unidentified gear that result in `Random stat` ichors are gotten.
- Unique Raids, where gear that result in `Fixed stat` ichors are gotten.

Legendary equipment from Legendary Raids (Velcoffer, Skiaclipse Legend) can equip 2 Ichors but only 1 of each type, on the other hand legendary unidentified gear (Savinose) can only equip a `Fixed stat` ichor as it already has `Random stats` when appraised.

When Ichoring gear, each try has a `5%` success rate and the equipment is consumed (converted into the Ichor), when it fails the equipment loses `1` potential, and if it fails at `0` potential the equipment is destroyed.
