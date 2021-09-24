import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { PageHero, PlaceOrder } from "../components";
import { GET_PRODUCT, selectGallery } from "../features/productSlice";
import { products } from "../utils/constants";

function SingleProduct() {
   const dispatch = useDispatch();
   const { id } = useParams();

   const product = products.find((product) => product.pageName === id);

   useEffect(() => {
      dispatch(GET_PRODUCT(product));
   }, []);
   return (
      <Wrapper>
         <PageHero />
         <PlaceOrder />
      </Wrapper>
   );
}

export default SingleProduct;

const Wrapper = styled.section``;
