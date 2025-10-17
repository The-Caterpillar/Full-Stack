// props : read only properties shared between components
// parent component can send data to child components using props
import PropTypes from 'prop-types';
// propTypes ensure data of correct types is passed 
function Student (props) {
    return(
        <>
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
        </>
    )
}

Student.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    isStudent : PropTypes.bool.isRequired,
}

Student.defaultProps = {
    name : "Guest",
    age : 0,
    isStudent: false,
}

export default Student;