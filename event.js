const EventEmitter = require('events')
const http = require('http')

class Sales extends EventEmitter { //Sales = Parent class, EventEmitter = Super class
    constructor(){
        super();
    }
}

const myEmitter = new Sales()

myEmitter.on('newSale', () => {
    console.log('There was a new sale!')
})

myEmitter.on('newSale', () => {
    console.log('Costumer name: Kai')
})

myEmitter.on("newSale", stock =>{
    console.log(`There are ${stock} items in left stock.`)
})

myEmitter.emit('newSale', 9)

////////////////////////////////

const server =  http.createServer();

server.on('request', (req, res) => {
    console.log('request received!')
    console.log(req.url);
    res.end('Request received')
})

server.on('request', (req, res) => {
    console.log('Request received😄')
})

server.on('close', ()=> {
    console.log('Server closed')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Waiting for requests...')
})