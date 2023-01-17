import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

const Post = () => {
  // const params = useParams();
  // const status = 404;
  // if (status === 404) {
  //   return <Navigate to='/notFound' />
  // }
  const navigate = useNavigate();
  const onClick = () => {
    console.log("Hello");
    navigate('/about');
  };
  return (
    <div>
      <h1>Post</h1>
      {/* <h1>{params.id}</h1>
      <p>Name: {params.name}</p> */}
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>Hello World</h1>}/>
      </Routes>
    </div>
  )
}

export default Post