import { CommandPermissionLevel } from "bdsx/bds/command";
import { ItemStack } from "bdsx/bds/inventory";
import { ItemStackRequestActionType } from "bdsx/bds/packets";
import { command } from "bdsx/command";
import { CANCEL } from "bdsx/common";
import { ContainerMenu, FakeContainerType } from "../ContainerMenu/ContainerMenu";

export default function shop(){
    command.register('shop', 'Shop command to buy and sell stuff!').overload(async(param, origin, output)=>{
        const actor = origin.getEntity();
        if (!actor?.isPlayer()) {
            console.log("it's the command for players");
            return;
        }
        const container = ContainerMenu.create(actor, FakeContainerType.Chest)
        container.setContents({
            5: ItemStack.constructWith("minecraft:diamond", 1),
            7: ItemStack.constructWith("minecraft:iron_ingot", 1),
            9: ItemStack.constructWith("minecraft:emerald", 1),
        });
        container.setCustomName("Shop");
        container.sendToPlayer();
        container.onTransaction((action) => {
            if(action.type === ItemStackRequestActionType.Take && container.getItem(action.getSrc().slot)?.getName() === "minecraft:diamond") {
                container.setItem(7, ItemStack.constructWith("minecraft:diamond", 1), true)
                actor.sendMessage("You have clicked the diamond!");
                return CANCEL;
            }
        });
    }, {});
    command.find('shop').signature.permissionLevel = CommandPermissionLevel.Normal
}