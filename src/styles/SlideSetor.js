import styled from "styled-components";

export const SlideSetorContainer = styled.div`
    img {
        width: 100vw;
        height: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: white;
    }

    .swiper-pagination-bullet {
        background-color: white;
        width: 50px;
        border-radius: 0;
        height: 2px;
    }

    @media only screen and (min-width: 767px) {
        img {
            height: 100vh;
            object-fit: fill;
        }
    }
`