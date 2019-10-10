import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProjectTechstack.module.scss'

const ProjectTechstack = ({ techstack }) => (
  <div className={styles.projectTechstack}>
    <h3 className={styles.title}> Tools & Technologies </h3>
    <ul>
      {techstack.map(tech => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  </div>
)

ProjectTechstack.propTypes = {
  techstack: PropTypes.array
}

export default ProjectTechstack
