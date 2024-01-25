import styled from "styled-components";

export const WhatsappContainer = styled.div`
    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }

        a {
        animation: float 3s infinite;
        }


    @media only screen and (min-width: 767px) {

    }
`