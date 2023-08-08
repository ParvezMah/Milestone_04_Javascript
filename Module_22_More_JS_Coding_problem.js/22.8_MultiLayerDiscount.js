function ticketPrice(ticketQty){
    const first100rate = 100;
    const second100rate = 90;
    const restTicketRate = 70;
    if(ticketQty <=100){
        const price = ticketQty * first100rate;
        return price;
    }
    else if(ticketQty <= 200){
        
    }
}
const price = ticketPrice(1);
console.log(price);