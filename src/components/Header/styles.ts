import styled from 'styled-components'

export const Hcontent = styled.div`
  flex-direction: row;
  margin: 10px 0 10px 0;
  width:100%;
  max-width: 966px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: 798px) {
    margin: 0 auto;
  }
  .styled-button {
    max-width:150px;
    width: 100%;
    max-height: 35px;
    border: 1px solid #a4a4a4;
  }
.menu-hover {
  cursor:pointer;
  display: inline-block;
  position: relative;
}

.menu-hover:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #a4a4a4;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.menu-hover:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
`
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  width: 100%;
`

export const IconSpacing = styled.div`
  margin: 0px 5px 0px 5px;
  width:100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 798px) {
    justify-content: flex-end;
  }
`
export const MyAccount = styled.span`
  font-size: 15px;
  color: #7a7a7a;
`

export const Total = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 30px;
  background-color: #F8475F;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`