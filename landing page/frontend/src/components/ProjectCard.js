import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,link }) => {
  return (
    <Col size={12} sm={6} md={3}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <button onClick={link} className="text-white bg-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Click Here</button>
        </div>
      </div>
    </Col>
  )
}
