import { BlockPos, Vec3 } from "bdsx/bds/blockpos";

export const PROTECTED_AREAS = {
    'SPAWN':[
        Vec3.create(-30,-64,-30),
        Vec3.create(30,319,30)
    ]
}

let area: keyof typeof PROTECTED_AREAS

export function inProtectedArea(vec : BlockPos | Vec3):boolean{
    for(area in PROTECTED_AREAS){
        const vecs = PROTECTED_AREAS[area]
        const vec1 = vecs[0]
        const vec2 = vecs[1]
        if(vec.x > Math.min(vec1.x,vec2.x) && vec.x < Math.max(vec1.x,vec2.x) && vec.y > Math.min(vec1.y,vec2.y) && vec.y < Math.max(vec1.y,vec2.y) && vec.z > Math.min(vec1.z,vec2.z) && vec.z < Math.max(vec1.z,vec2.z)) return true;
    }
    return false
}