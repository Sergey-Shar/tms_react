import data from './data.json'

const UsersList = () => {
    return data.map(item => {
        return (
            <div key={item._id} style={{textAlign:'center',border:'solid 1px',margin:'10px auto', width: '50%'}} >'
                <h3>{item.name.first}</h3>
                <h4>{item.name.last}</h4>
            </div>
        )
    })
}

export default UsersList