import {Link} from 'react-router-dom'
import './index.css'

import {CoursesContainer, CoursesImage, CoursesName} from './styledComponents'

const CoursesData = props => {
  const {coursesDetails} = props
  const {id, logoUrl, name} = coursesDetails

  return (
    <CoursesContainer>
      <Link to={`/courses/${id}`} className="course-link">
        <CoursesImage src={logoUrl} alt="course" />
        <CoursesName>{name}</CoursesName>
      </Link>
    </CoursesContainer>
  )
}

export default CoursesData
