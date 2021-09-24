import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";
import { CHANGE_GALLERY_IMAGE } from "../features/productSlice";
function SingleOption({ option }) {
   const [selected, setSelected] = useState("бежевый");
   const [isActive, setIsActive] = useState(1);
   const { stepText, content } = option;
   const dispatch = useDispatch();

   const handleClick = (id, text, category, imgUrl) => {
      setIsActive(id);
      setSelected(text);
      dispatch(CHANGE_GALLERY_IMAGE({ category, imgUrl }));
   };
   return (
      <Wrapper>
         <p className="title">{stepText}</p>
         <ul className="colors">
            {content.map((item) => {
               const { id, color, category, Text, imgUrl } = item;
               return (
                  <li
                     key={id}
                     onClick={() => handleClick(id, Text, category, imgUrl)}
                  >
                     <div
                        className={`circle ${color} ${
                           id === isActive ? "active" : null
                        }`}
                     />
                  </li>
               );
            })}
         </ul>
         <p className="selected">
            <span> выбран : </span>
            {selected}
         </p>
      </Wrapper>
   );
}

export default SingleOption;

const Wrapper = styled.div`
   background: #383838;
   padding: 1rem 2rem;
   margin-bottom: 1rem;
   border-radius: 1.5rem;
   .title {
      font-size: 1.7rem;
      font-weight: 600;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      letter-spacing: 0.1rem;
   }
   .colors {
      display: flex;
      width: 80%;
      flex-wrap: wrap;
   }
   li {
      margin: 0.5rem;
      width: 4rem;
      height: 4rem;
   }
   .active {
      border: 3px solid #ffd700;
      transform: scale(1.1);
   }
   .selected {
      font-size: 1.3rem;
      font-weight: 400;
      margin: 0.5rem;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      letter-spacing: 0.1rem;
      span {
         color: #ffd700;
         font-weight: 500;
      }
   }
`;
