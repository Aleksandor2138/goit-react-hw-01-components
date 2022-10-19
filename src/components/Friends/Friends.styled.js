import styled from 'styled-components';

export const FriendsList = styled.ul`
    margin: 0 auto;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;
export const FriendItem = styled.li`
    width: 345px;
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
`;
export const Online = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: green;
`;
export const Offline = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
`;
export const Img = styled.img`
    width: 48px;
    border: 1px solid gray;
    border-radius: 10px;
`;
export const Name = styled.p`
    font-size: 20px;
    font-weight: 500;
`;