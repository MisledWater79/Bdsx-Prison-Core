import { CommandPermissionLevel } from "bdsx/bds/command";
import { command } from "bdsx/command";

export default function warp(){
    command.register('warp', 'Teleports you to a warp').overload((param, origin, output)=>{
        if(param) {
            output.success(`e: ${param.enum1}`)
        }
    }, {
        enum1: command.enum('EnumType', 'enum1', 'Enum2', 'ENUM3')
    });
    command.find('warp').signature.permissionLevel = CommandPermissionLevel.Normal
}