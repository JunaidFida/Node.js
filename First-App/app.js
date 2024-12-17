const Logger=require ("./logger");
const EventEmitter= require ('events');

const logger=new Logger();
//register Listener
logger.on('messageLogged',(arg)=>{       //we can also use addlistener method here,both are same 
console.log("Listener Called",arg)
})

logger.on('logging',(arg)=>{
    console.log("You are logged in ",arg)
})



logger.log("HEllO! You are logged in")