import React, { Component } from "react";
import {
  Container,
  Icon,
  Img,
  IconContenor,
  MobileContainer,
  ImgWrepper,
  TitleImg,
  Desc,
  Item,
  Title,
  ToggleMode,
} from "./appStyle";
import img from "./img/jeju.jpg";
export default class App extends Component {
  render() {
    return (
      <Container>
        <MobileContainer>
          <IconContenor>
            <Icon.Arrow />
            <Icon.Switch />
          </IconContenor>
          <ImgWrepper>
            <Img src={img} alt="webLogo" />
            <TitleImg>
              <span>W</span>ebBrain <span>A</span>cademy
            </TitleImg>
            <Desc>IT Curses</Desc>
          </ImgWrepper>
          {/* Dark */}
          <Item>
            <Icon.Dark />
            <Title>Dark Mode</Title>
            <ToggleMode size={50} />
          </Item>
          {/* Grid */}
          <Item>
            <Icon.Grid />
            <Title>Story</Title>
          </Item>

          {/* Grid */}
          <Item>
            <Icon.User />
            <Title>Chat Head</Title>
          </Item>

          {/* Grid */}
          <Item>
            <Icon.UserPl />
            <Title>Grups</Title>
          </Item>
          <hr />
          {/* PErm */}
          <Item>
            <Icon.Perm />
            <Title>Media and </Title>
          </Item>
          {/* Setting*/}
          <Item>
            <Icon.Setting />
            <Title>Media and </Title>
          </Item>
          {/* Comm */}
          <Item>
            <Icon.Comm />
            <Title>Help Centre</Title>
          </Item>
          {/* PErm */}
          <Item>
            <Icon.Bell />
            <Title>Notification </Title>
          </Item>
        </MobileContainer>
      </Container>
    );
  }
}
