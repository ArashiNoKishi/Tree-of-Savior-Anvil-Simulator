# Tree of Savior Anvil simulator

This app will help you simulate the Tree of Savior anvil using its chance rate and fail mechanics.

### Rates
Anvil success rates varies depending on the enhancement level of the equipment tha is being enhanced, and it's as follows:
-  `100%`rate on enhances on +0 until +4.
- `88%` on +5.
- `78%` on +6.
- `68%` on +7.
- `59%` on +8.
- `51%` on enhances +9 and over until +39 given that +40 it's the maximun enhancement level.

If an enhancement fails the equipment loses `1` level of enhancement and `1` potential, if an equipment fails at  `0` potential the equipment breaks and it's destroyed.

These are the 2 features:

## Equipment simulation
This lets you simulate a single piece of equipment using its base potential and using the `Enhance` *normal anvil*, `Diamond` or `Gold` *only on equipment with 0 potential* for the truest IMC seal of approval experience.

Theres an auto enhance option that continiously enhances the equipment until the limits defined in `Lowest potential` and `Target enhancement`.

## Mass simulation
This lets you simulate `amount` number of equipment pieces with auto enhance with the limits defined in `Lowest potential` and `Target enhancement`, and will display a list of equipment pieces with the result. Or display a table with the statistics on how many equipment pieces landed on a specific ehanhce level when the `stats` option is selected.