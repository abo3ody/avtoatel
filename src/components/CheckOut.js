import styled from "styled-components/macro";

function CheckOut() {
   return (
      <Wrapper>
         <h1>checkout component</h1>
      </Wrapper>
   );
}

export default CheckOut;

const Wrapper = styled.section`
   background: #383838;
   border-radius: 0.5rem;
   padding: 1rem 2rem;
   align-self: start;
`;
