"use client"
import styled, { css } from "styled-components"

const Button = styled.button`
    ${({ icon }) =>
        icon &&
        css`
            padding: 7px 15px 5px;
            min-width: 35px;
            min-height: 35px;
        `}

    ${({ dark }) =>
        dark &&
        css`
            background-color: #111d25;
        `}
    
    ${({ primary }) =>
        primary &&
        css`
            background-color: #cba97a;
            color: #191a1c;
        `}
        
    ${({ big }) =>
        big &&
        css`
            padding: 18px 28px;
            font-size: 1.6rem;
        `}
`

export default Button
