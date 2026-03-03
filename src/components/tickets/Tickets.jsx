import React, { use } from 'react';
import Ticket from './Ticket';

const Tickets = ({ticketsPromise}) => {
    const tickets=use(ticketsPromise);
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 md:mb-10 lg:mb-16'>
            {
                tickets.map(tic=> <Ticket key={tic.id} ticket={tic}></Ticket>)
            }            
        </section>
    );
};

export default Tickets;