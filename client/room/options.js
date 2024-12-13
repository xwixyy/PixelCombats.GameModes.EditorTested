import { Build, Inventory } from 'pixel_combats/room';

// Права на орудие. 
export function set_editor_inventory() {
    var roomInventory = Inventory.GetContext();
    roomInventory.MainInfinity.Value = true;
    roomInventory.SecondaryInfinity.Value = true;
   
    roomInventory.ExplosiveInfinity.Value = true;

}
   Build.GetContext().FlyEnable.Value = true;
// Права на орудия по ID + Дополнительные вещи