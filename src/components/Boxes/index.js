import './index.css';

const Square = (props) => {
    return (
        <div className = "square-container" >
            <div className = {props.cssClass} >
                <h3> {props.label} </h3>
            </div>
        </div>
    )
}

export default Square