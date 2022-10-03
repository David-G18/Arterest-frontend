// From React
import React from "react";
import { Link } from "react-router-dom";
// Icons
import { AiFillShopping } from "react-icons/ai";
import { AiFillPushpin } from "react-icons/ai";
// Favorites and cart Logic
import { addToFav, addToCart } from "./FavAndCart";
// Custom Styles
import "./card.css";
// Material UI
import FavoriteIcon from '@mui/icons-material/Favorite';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Skeleton from '@mui/material/Skeleton';

export default function Card({
  userName,
  userImage,
  title,
  img,
  stock,
  _id,
  price,
  cardLikes,
  handleAdded,
  handleNotAdded,
  setFavProducts,
}) {

  return (
    <div className="container rounded-lg mb-5" key={_id}>
      <div className="img-container">
        {
          !img ? 
          <Skeleton variant="circular" width={40} height={40} /> : 
          <Link to={`/detail/${_id}`}>
            <img className="w-full" src={img} alt="hola" />
          </Link>
        }
        
        <div className="user-info bg-white p-3 flex flex-col gap-4">
          <div className="flex justify-center items-center">
            <h2 className="font-semibold text-xl">{title}</h2>
            <div className="flex text-center justify-start gap-1 absolute left-4">
              <FavoriteIcon className='text-red-500'/>
              <span className="text-gray-600 relative bottom-0.5">{cardLikes}</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img className="rounded-full h-10 w-10" src={userImage} alt="" />
              <Link to={"/artistprofile/" + userName}>
                <h5 className="text-gray-600 hover:text-black">By {userName}</h5>
              </Link>
            </div>
            
            <div className="font-medium flex items-center absolute right-6 text-xl">
              <MonetizationOnIcon className="text-green-500"/>
              <span className="relative bottom-0.5">{price}</span>
            </div>
          </div>
          
        </div>
      </div>
      <ul className="social-media">
        <li>
          <a href="#">
            <i className="gr gr-pin">
              <AiFillPushpin
                onClick={(e) =>
                  addToFav(
                    userName,
                    userImage,
                    title,
                    img,
                    _id,
                    price,
                    handleAdded,
                    handleNotAdded,
                    e,
                    setFavProducts
                  )
                }
              />
            </i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="gr gr-bag">
              <AiFillShopping
                onClick={(e) =>
                  addToCart(
                    userName,
                    userImage,
                    title,
                    img,
                    stock,
                    _id,
                    price,
                    handleAdded,
                    handleNotAdded,
                    e
                  )
                }
              />
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
}