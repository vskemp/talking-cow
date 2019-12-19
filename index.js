const words = process.argv.slice(2).join(' ');

const theCowSaid = cowsay.say({
    text : words,
    e : "oO",
    T : "U "
})

console.log(theCowSaid);