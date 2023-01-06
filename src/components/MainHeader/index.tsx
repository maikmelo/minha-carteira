import React, { useMemo } from "react";

import Toggle from '../Toggle';
import emojis from "../../utils/emojis";
import { Container, Profile, Welcome, Username } from './styles';

const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * (emojis.length - 1));
        return emojis[indice];
    }, []);

    return (
        <Container>
            <Toggle />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <Username>Maikon Melo</Username>
            </Profile>
        </Container>
    );
}

export default MainHeader;