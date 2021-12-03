import data from './data.json';
import './index.css';

const UsersList = () => {
    return data.map(item => {
        return (
            <div className='container' key={item._id} >
                <h3>{item.name.first}</h3>
                <h4>{item.name.last}</h4>
            </div>
        )
    })
}

export default UsersList