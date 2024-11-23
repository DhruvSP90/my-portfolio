import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>

      <h5>The Experience I Have</h5>
      <h2>My Volunteer Work</h2>

      <div className="container experience__container">

        <div className="experience__volunteer">
          <h3>Google Developer Student Club</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Data-Driven Relations Coordinator</h4>
                <small className='text-light'>10/2023 - Current</small>
                <p>Utilized Excel to analyze event trends, strategically scheduled events to boost attendance by 25%, and secured sponsorships and resources, resulting in a 30% increase in attendance and a 20% revenue boost.</p>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__volunteer">
          <h3>Student Success Center</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Team Member</h4>
                <small className='text-light'>08/2022 – 12/2023</small>
                <p>Formulated and implemented orientation sessions, fostering a smooth transition for new students and boosting engagement by 20%, while mentoring three first-year students throughout the academic year.</p>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__volunteer">
          <h3>Google Developer Student Club</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Financial Operations Treasurer</h4>
                <small className='text-light'>09/2022 – 09/2023</small>
                <p>Managed budgets and tracked expenditures, optimizing funding efficiency by 20%, and increased membership by 50% through effective recruiting techniques and awareness campaigns.</p>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
