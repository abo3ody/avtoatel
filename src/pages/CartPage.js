import styled from "styled-components/macro";
import { CartItems, CheckOut } from "../components";

function CartPage() {
   return (
      <Wrapper>
         <CartItems />
         <CheckOut />
      </Wrapper>
   );
}

export default CartPage;

const Wrapper = styled.main`
   width: 90vw;
   max-width: 1180px;
   margin: 3rem auto;
   display: grid;
   grid-template-columns: 2fr 1fr;
   grid-gap: 2rem;
`;
