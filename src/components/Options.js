import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectProduct } from "../features/productSlice";
import SingleOption from "./SingleOption";

function Options() {
   const {
      product: { options = [] },
   } = useSelector(selectProduct);

   return (
      <Wrapper>
         {options.map((option, index) => {
            return <SingleOption key={index} option={option} />;
         })}
      </Wrapper>
   );
}

export default Options;

const Wrapper = styled.div``;
