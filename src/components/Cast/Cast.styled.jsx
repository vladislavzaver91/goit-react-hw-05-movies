import styled from "@emotion/styled";

export const CastList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 224px);
    gap: 12px;
    margin: 0;
    padding: 0;
`;

export const CardItem = styled.li`
    border-radius: 4px;
    list-style: none;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    > a {
        text-decoration: none;
    }
`;

export const CastName = styled.p`
    text-align: center;
    margin: 0 auto;
    padding: 4px;
    margin-bottom: 0;
    color: black;
`;
export const CastInfo = styled.p`
    padding: 4px;
    margin-bottom: 0;
    font-weight: 700;
    color: black;
`;