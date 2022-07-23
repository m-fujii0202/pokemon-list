import React from "react";
import styled from "styled-components";

export const Navber = ()=>{
    return <Snav>ポケモン図鑑</Snav>
}

const Snav = styled.div`
    background-color: rgb(225, 142, 25);
    color:#fff;
    height: 65px;
    font-weight: 600;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`