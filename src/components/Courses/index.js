import {Component} from 'react'
import CoursesData from '../CoursesData'
import {
  List,
  ListContainer,
  Container,
  CoursesHeading,
} from './styledComponents'

class Courses extends Component {
  state = {
    coursesData: [],
  }

  componentDidMount() {
    this.getCoursesData()
  }

  getCoursesData = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    const data = await response.json()
    console.log(data)
    const updatedData = data.courses.map(eachData => ({
      id: eachData.id,
      logoUrl: eachData.logo_url,
      name: eachData.name,
    }))
    console.log(updatedData)
    this.setState({coursesData: updatedData})
  }

  render() {
    const {coursesData} = this.state
    return (
      <ListContainer>
        <CoursesHeading>Courses</CoursesHeading>
        <Container>
          {coursesData.map(eachData => (
            <List key={eachData.id}>
              <CoursesData coursesDetails={eachData} />
            </List>
          ))}
        </Container>
      </ListContainer>
    )
  }
}

export default Courses
