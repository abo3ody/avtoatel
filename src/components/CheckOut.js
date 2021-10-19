import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import { selectCart } from "../features/cartSlice";

function CheckOut() {
   const { total_items, total_amount } = useSelector(selectCart);
   return (
      <Wrapper>
         <div className="header">
            <h1>оформлять заказ</h1>
         </div>
         <form>
            <div>
               <label htmlFor="name">полное имя</label>
               <input type="text" id="name" />
            </div>
            <div>
               <label htmlFor="phone">телефон</label>
               <input type="text" id="phone" />
            </div>
            <div>
               <label htmlFor="email">Эл. адрес</label>
               <input type="text" id="email" />
            </div>
            <div className="totals">
               <p>
                  количество товаров : <span>{total_items} шт.</span>
               </p>
               <p>
                  итого : <span>{total_amount} руб.</span>
               </p>
            </div>
            {total_items > 0 && (
               <input type="submit" value="оплатить" className="pay_btn" />
            )}
         </form>
      </Wrapper>
   );
}

export default CheckOut;

const Wrapper = styled.section`
   background: #383838;
   border-radius: 0.5rem;
   padding: 1rem 2rem;
   align-self: start;
   .header {
      padding: 1rem;
      border-bottom: 0.1rem solid gray;
      h1 {
         font-size: 2rem;
         text-transform: uppercase;
         letter-spacing: 0.1rem;
         text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
         color: #ffd700;
      }
   }
   form > div {
      display: flex;
      flex-direction: column;
      label {
         font-size: 1.5rem;
         margin: 0.5rem 0;
         text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
         letter-spacing: 0.1rem;
         text-transform: capitalize;
      }
      input {
         padding: 0.5rem;
         border-radius: 0.5rem;
         border: none;
         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
   }
   .totals {
      margin: 1rem 0;
      p {
         font-size: 1.5rem;
         margin-bottom: 0.5rem;
         text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
         letter-spacing: 0.1rem;
         text-transform: capitalize;
         span {
            color: #ffd700;
            text-transform: lowercase;
         }
      }
   }
   .pay_btn {
      width: 100%;
      padding: 1rem 0;
      font-size: 1.6rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.1rem;
      background: #ffd700;
      border: none;
      color: #4f4f4f;
      text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      &:hover {
         opacity: 0.8;
      }
   }
`;
