import {Component} from 'react'

class CourseDetails extends Component {
  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const data = await response.json()
    const updatedData = data.courses(eachData => ({
      id: eachData.id,
      imageUrl: eachData.image_url,
      name: eachData.name,
      description: eachData.description,
    }))
    console.log(updatedData)
  }

  render() {
    return (
      <div>
        <h1>CourseDetails</h1>
      </div>
    )
  }
}

export default CourseDetails
