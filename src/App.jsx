import { Suspense, useState } from 'react';
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Tickets from './components/tickets/Tickets';
import Footer from './components/footer/Footer';
import TaskStatus from './components/task_status/TaskStatus';
import ResolvedTask from './components/resolved_task/ResolvedTask';

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return (res).json();
}
const ticketsPromise = fetchTickets();
function App() {
  const progressKey = "progress"
  const resolvedKey = "resolved_list";
  const [progress, setProgress] = useState(() => {
    const progressList = localStorage.getItem(progressKey);
    return progressList ? JSON.parse(progressList) : [];
  });
  const [resolved, setResolved] = useState(() => {
    const resolvedList = localStorage.getItem(resolvedKey);
    return resolvedList ? JSON.parse(resolvedList) : [];
  })

  return (
    <>
      <Navbar></Navbar>
      <section className='bg-[#E2DFD280] min-h-screen padding '>
        <Hero progress={progress} resolved={resolved}></Hero>
        {/* tickets section */}
        <div className='grid grid-cols-1 md:grid-cols-8 gap-3 md:gap-6 md:h-screen pb-12'>
          <div className='col-span-6 '>
            <h2 className='mb-2'>Customer tickets</h2>
            <Suspense fallback={<h2>Loading...</h2>}>
              <Tickets ticketsPromise={ticketsPromise}
                progress={progress}
                setProgress={setProgress}
                resolved={resolved}
              ></Tickets>
            </Suspense>
          </div>
          {/* task status and resolved task  */}
          <div className='col-span-2 mb-6 md:mb-10 lg:mb-16 overflow-y-auto'>
            <TaskStatus
              progress={progress}
              setProgress={setProgress}
              progressKey={progressKey}
              resolved={resolved}
              setResolved={setResolved}
              resolvedKey={resolvedKey}></TaskStatus>
            <ResolvedTask resolved={resolved}></ResolvedTask>
          </div>
        </div>
      </section>
      {/* footer */}
      <Footer></Footer>
    </>
  )
}

export default App
