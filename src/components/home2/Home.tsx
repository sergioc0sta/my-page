import React from "react";
import Container from './Container'
import Avatar from "./Avatar";
import Description from "./Description";
import HomeLayout from "./HomeLayout";

const Home = () => {
    return(
        <Container>
            <HomeLayout>
                <Avatar/>
                <Description/>
            </HomeLayout>
        </Container>
    )
}

export default Home;