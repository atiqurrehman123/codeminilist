import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

const PostDetail = (props) => {
    const params=useParams();
    const {id}=params;
    const Id=Number(id);    
    const [data,TableData]=useState({});
    const [loading, setloading] = useState(true)

    const fetchdata=async()=>{
      await axios.get(`https://jsonplaceholder.typicode.com/todos/${Id}`)
      .then(res =>TableData(res.data)
      );
      setloading(false)
    }
    useEffect(() => {
     fetchdata()
    }, [])
    const {userId,title,completed}=data;
    console.log(userId)
  return (
      <>
      <h1 style={{textAlign:"center"}}>Single User</h1>
      {!loading?
    <ul>
        <li>{userId}</li>
        <li>{title}</li>
        <li>{completed?"true":"false"}</li>

    </ul>
    :<h3>Loading</h3>}
    </>
  )
}

export default PostDetail;