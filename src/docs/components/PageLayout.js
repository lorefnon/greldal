import React from "react";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";

import "../styles/page.css";
import "normalize.css/normalize.css";
import "highlight.js/styles/github.css";

export class PageLayout extends React.Component {
    render() {
        const { sidebar, children } = this.props;
        return (
            <div>
                <Sidebar>{sidebar}</Sidebar>
                <Container id="container">{children}</Container>
            </div>
        );
    }
}

const Container = styled.div`
    max-width: 700px;
    margin: 40px 100px 50px 400px;
    pre {
        padding: 0 !important;
    }
    h1 {
        margin: 3rem 0;
    }
    h2, h3, h4, h5, h6 {
        margin: 2rem 0;
    }
    p, ol, ul {
        margin: 2rem 0;
    }
    pre > code {
        border: 1px solid #ddd;
        border-left: 4px solid #ddd;
        display: block;
        background: #f8f8f8;
        margin: 0;
        padding: 5px;
    }
    a,
    a:visited,
    a:hover,
    a:active {
        color: #0261cd;
        font-weight: bold;
        text-decoration: none;
    }
`;
