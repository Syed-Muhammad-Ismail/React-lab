// import { useState } from "react";
// const Home = () => {

//   const [blogs] = useState([
//     { name: "Blog One", content: "This is the first blog post content. " },
//     { name: "Blog Two", content: "This is the second blog post content." },
//     { name: "Blog Three", content: "This is the third blog post content." },
//   ]);

//   return (
//     <div>
//       {blogs.map((blog, index) => (
//         <div className="blogs">
//             <h2 id="heading">{blog.name}</h2>
//             <p id="paragraph">{blog.content}</p>
          
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;


const Home = () => {
  return (
    <div className="flex flex-col md:flex-row my-10 mx-10">
      <div className="w-full md:w-1/2 border-2 border-black text-xl font-bold text-green-500">
        First box
      </div>
      <div className="w-full md:w-1/2 border-2 border-red-500 text-xl  md:font-bold text-green-500">
        Second box
      </div>
    </div>
  );
};

export default Home;
