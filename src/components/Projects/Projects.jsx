import './Projects.scss';
import Tabs from '../Tabs/Tabs';

const Projects = () => {
  return (
    <section className="section-projects">
      <div className="container">
        <div className="heading">
          <h2>My Projects</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</p>
        </div>
        {/* heading */}

        <div className="projects">
          <Tabs></Tabs>
        </div>
      </div>
    </section>
  )
}

export default Projects;