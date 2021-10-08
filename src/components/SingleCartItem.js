import React from "react";
import styled from "styled-components/macro";

import { FaMinus, FaPlus, FaTrash, FaChevronDown } from "react-icons/fa";

function SingleCartItem({ item }) {
   console.log(item);
   const { img, productName: name, price } = item;
   return (
      <Wrapper>
         <img src={img} alt={name} />
         <h4 className="title">{name}</h4>
         <div className="quantity">
            <FaMinus />
            <p className="count">1</p>
            <FaPlus />
         </div>
         <p className="price">{price} руб.</p>
         <div className="delete_item">
            <FaTrash />
            <p>удалить</p>
         </div>
         <div className="more_details">
            <FaChevronDown />
         </div>
      </Wrapper>
   );
}

export default SingleCartItem;

const Wrapper = styled.li`
   display: grid;
   grid-template-columns: 10rem repeat(4, 1fr) 4rem;
   align-items: center;
   padding: 0.5rem 0;
   background: #4f4f4f;
   border-radius: 0.5rem;
   margin-bottom: 1rem;
   justify-items: center;
   img {
      width: 7rem;
      height: 7rem;
      object-fit: contain;
   }
   .title {
      font-size: 1.5rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      letter-spacing: 0.1rem;
   }
   .quantity {
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      .count {
         font-size: 1.5rem;
         padding: 0.5rem;
         background: #fff;
         color: #383838;
         border-radius: 0.5rem;
         margin: 0 1rem;
         font-weight: 700;
         text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
      svg {
         cursor: pointer;
         transition: color 0.3s ease-in-out;

         &:hover {
            color: #ffd700;
         }
      }
   }
   .price {
      font-size: 1.5rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      letter-spacing: 0.1rem;
   }
   .delete_item {
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: color 0.3s ease-in-out;
      svg {
         margin-right: 0.5rem;
         font-size: 1.5rem;
      }
      &:hover {
         color: #ffd700;
      }
   }
   .more_details {
      font-size: 1.5rem;
      cursor: pointer;
      transition: color 0.3s ease-in-out;
      &:hover {
         color: #ffd700;
      }
   }
`;
