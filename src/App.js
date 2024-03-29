import './App.css'
import Header from './Header';
import Missing from './Missing';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer'
import { Link } from 'react-router-dom';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PostLayout from './PostLayout';
import Post from './Post';
import { useEffect, useState } from 'react';
import FeedPost from './FeedPost';
import { format } from "date-fns";
import Swal from 'sweetalert2'
import api from "./api/allposts"
import { BiEdit } from "react-icons/bi";
import Update from './Update';
function App() {

  const navi = useNavigate();
  const [posts, setposts] = useState([])
  const [search, setsearch] = useState('');
  const [posttitle, setposttitle] = useState('');
  const [postbody, setpostbody] = useState('');
  const [searchresults, setsearchresults] = useState([])
  const [edittitle,setedittitle]=useState('')
  const  [editbody,seteditbody]=useState('')
  useEffect(()=>{
    const fetchposts=async()=>{
     try {
       const response=await api.get('/posts');
      
         setposts(response.data);
     } catch (error) {
      alert(error.message);
     }
    }
    fetchposts();
    }
    ,[]
    )
  const handlesubmit = async(e) => {
    e.preventDefault();
    const id = posts.length ? (Number(posts[posts.length - 1].id )+ Number(1))+"" : 1+"";
    const datetime = format(new Date(), 'MMMM dd,yyyy pp')
    const newobj = {
      id,
      title: posttitle,
      datetime,
      body: postbody
    }
    try{
    const response=await api.post("/posts",newobj)
    const addedposts = [...posts, newobj];
    setposts(addedposts)
    setpostbody('')
    setposttitle('')}
    catch(err)
    {
      alert(err.msg);
    }
    navi('/');
  }


  const handledelete =  (id) => { 
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
         try
            {
              await api.delete(`/posts/${id}`);
              const filtered = posts.filter((x) => (x.id).toString() !== id);
              setposts(filtered);
              navi('/');}
              catch(err)
              {
                alert(err);
              }
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success"
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your post is safe :)",
          icon: "error"
        });
      }
    });
  }

  const handleedit=async ({id,e})=>{
    const filtered=posts.filter((x)=>((x.id).toString()!==id))
    const datetime = format(new Date(), 'MMMM dd,yyyy pp')
    const newobj = {
      id,
      title: edittitle,
      datetime,
      body: editbody
    }
    try{
    const response=await api.put(`/posts/${id}`,newobj)
    const filteredset=[...filtered,newobj]
    setposts(filteredset)
    seteditbody('')
    setedittitle('')
    navi('/')
    }
    catch(err)
    {
      alert(err.message);
    }

  }
  useEffect(() => {
    const fres = posts.filter((x) => ((x.title.toLowerCase()).includes(search.toLowerCase()) || (x.body.toLowerCase()).includes(search.toLowerCase())))
    setsearchresults(fres.reverse());
  }, [posts, search])



  return (
    <div className="App">
      
      <Header
        title="Social Media"
      />
      <Nav
        search={search}
        setsearch={setsearch}
      />
      <Routes>
        <Route path='/' element={<Home posts={searchresults} />} />
        
        <Route path='/newpost'>

          <Route index element={
            <NewPost
              postbody={postbody}
              setpostbody={setpostbody}
              posttitle={posttitle}
              setposttitle={setposttitle}
              handlesubmit={handlesubmit}
            />} />

          <Route path=':id' element={<PostPage
            handledelete={handledelete} posts={posts}
            posttitle={posttitle}
            setposttitle={setposttitle}
            postbody={postbody}
            setpostbody={setpostbody}
          />} />

        </Route>


        <Route path='/about' element={<About />} />


        <Route path='*' element={
          <Missing />} />
        <Route path='/edit'>
            <Route path=":id" element={<Update
            edittitle={edittitle}
            setedittitle={setedittitle}
            editbody={editbody}
            seteditbody={seteditbody}
            posts={posts}
            handleedit={handleedit}
        />} /></Route> 

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
