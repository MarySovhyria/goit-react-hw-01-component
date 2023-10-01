import styled from '@emotion/styled';

export const StatisticWrap = styled.div`
    width: 445px;
    padding-top: 30px;
    margin: 0 auto;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`
export const Heading = styled.p`
    color: darkgrey;
    text-align: center;
    margin-top: 30px
    margin-bottom: 20px;
`
export const StatList = styled.ul`
    padding-inline-start: 0px;
    display: flex;
    justify-content: space-around;


    
`
export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 25%;
    gap: 10px;
`
export const Label = styled.label`
    text-align: center;
    font-size: small;
    color: white;
    
`
export const Percentage = styled.span`
    font-weight: bold;
    font-size: large;
    text-align: center;
    color: white;
`
