import { Suspense } from 'react';
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Tickets from './components/tickets/Tickets';
import Footer from './components/footer/Footer';

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return (res).json();
}
const ticketsPromise = fetchTickets();
function App() {

  return (
    <>
      <Navbar></Navbar>
      <section className='bg-[#E2DFD280] min-h-screen padding '>
        <Hero></Hero>
          <div className='grid grid-cols-1 md:grid-cols-8 gap-3 md:gap-6'>
            <div className='col-span-6'>
              <h2 className='mb-2'>Customer tickets</h2>
              <Suspense fallback={<h2>Loading...</h2>}>
                <Tickets ticketsPromise={ticketsPromise}></Tickets>
              </Suspense>
            </div>
            <div className='col-span-2 mb-6 md:mb-10 lg:mb-16 overflow-y-scroll'>
              <div>
                <h2 >Task Status</h2>
                <p className='text-xs text-gray-700/60'>Select a ticket to add to Task Status.</p>
              </div>
              <div>
                <h2 >Resolved Task</h2>
                <p className='text-xs text-gray-700/60'>No resolved tasks yet.</p>
              </div>
            </div>
          </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default App
