import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import styled from "styled-components";

const Img = styled.img`
    width: 100px;
    height: 60px;
    padding-left: 5px;
`;

const BlackHeader = styled(Box)`
    background-color: #000000;
    border-radius: 5px 5px 0 0;
`;

export default function Header() {
    return (
        <>
            <BlackHeader>
                <Img src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfe27Lx60YNzQiR1TN9Nmkd+AdplyAkh...Zq8Ot+dERBpAQGghIMdME+jiJ8U5ZE0kU7tmLSfMhOWg==" alt="Logo" />
            </BlackHeader>
            <Divider />
        </>
    );
}