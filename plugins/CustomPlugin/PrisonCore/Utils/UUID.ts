export default function UUID(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function(c) {
        let rnd = Math.random()*16 |0, v = c === 'x' ? rnd : (rnd&0x3|0x8);
        return v.toString(16)
    });
}