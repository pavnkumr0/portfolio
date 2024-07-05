import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import bipedBot from '../../assets/Biped_bot.jpg'
import mazeSOlver from '../../assets/Maze_solver.jpeg'
import portfolio from '../../assets/portfolio.jpeg'
import airSurveillance from '../../assets/air_surveillance.jpeg'

import ProjectCard from '../../common/ProjectCard.jsx';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={bipedBot}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Biped Bot"
          p="Streaming App"
        />
        <ProjectCard
          src={airSurveillance}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Air surveillance"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={mazeSOlver}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Maze Solver"
          p="Glasses Shop"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Portfolio"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
