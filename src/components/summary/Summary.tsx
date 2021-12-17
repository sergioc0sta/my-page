import React from "react";
import Container from '../container';
import Avatar from "./Avatar";
import Description from "./Description";
import HomeLayout from "./HomeLayout";

const Summary = () => {
    return(
        <Container summary>
            <HomeLayout>
                <Avatar/>
                <Description/>
            </HomeLayout>
        </Container>
    )
}

export default Summary;