// import { Link } from 'react-router-dom';

// function Card({ title, description, image, link }) {
//     return (
//         <Link to={link} className="cardhome bg-white shadow-lg max-w-sm overflow-hidden p-5">
//             <img className="w-full h-24" src={image} alt={title} />
//             <div className="px-6 py-4">
//                 <div className=" font-bold text-xl mb-2">{title}</div>
//                 <p className="text-gray-700 text-base">{description}</p>
//             </div>
//         </Link >
//     );
// }

// export default Card;

import React from 'react'

const card = () => {
  return (
    <>
      <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a></div>
    </div>
    </>
  )
}

export default card
