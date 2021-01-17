import styled from 'styled-components';

export const Container = styled.div `
    padding: 50px 60px;
    background: #292929;

    @media(max-width: 375px) {
        padding: 25px 30px;
    }
`

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
export const Column = styled.div `
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;

    @media(max-width: 375px) {
        margin-left: 0px;
    }
`

export const Row = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media(max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Link = styled.a `
    color: #fff;
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;

    &:hover {
        color: #dc5cbd;
        transition: 200ms ease-in;
        cursor: pointer;
    }

    @media(max-width: 375px) {
        font-size: 14px;
    }
`

export const Title = styled.p`
    font-size: 24px;
    color: #0057ff;
    margin-bottom: 40px;
    font-weight: bold;

    @media(max-width: 375px) {
        font-size: 18px;
        margin-bottom: 15px;
    }
`