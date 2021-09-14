import styled from "styled-components";
import { Settings2Outline } from "@styled-icons/evaicons-outline/Settings2Outline";
import { KeyboardArrowLeft } from "@styled-icons/material/KeyboardArrowLeft";
import { Switch } from "@styled-icons/icomoon/Switch";
import { MoonFill } from "@styled-icons/bootstrap/MoonFill";
import { Grid1x2Fill } from "@styled-icons/bootstrap/Grid1x2Fill";
import { UserCheck } from "@styled-icons/boxicons-regular/UserCheck";
import { UserPlus } from "@styled-icons/boxicons-solid/UserPlus";
import { PermMedia } from "@styled-icons/material/PermMedia";
import { Comment } from "@styled-icons/boxicons-regular/Comment";
import { BellFill } from "@styled-icons/bootstrap/BellFill";

import Toggle from "react-dark-mode-togle";

export const ToggleMode = styled(Toggle)`
  margin-left: auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: 50px 300px;
`;

export const MobileContainer = styled.div`
  width: 400px;
  height: 700px;
  background: whitesmoke;
  box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.25);
`;

export const IconContenor = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
`;

export const Icon = styled.div``;

Icon.Arrow = styled(KeyboardArrowLeft)`
  color: black;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
Icon.Switch = styled(Switch)`
  color: black;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
`;
export const ImgWrepper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 20px;
  border: 0.5px solid #000;
`;
export const TitleImg = styled.div`
  font-size: 22px;
  font-style: blod;
  font-family: SF pro display;
  span {
    color: coral;
  }
`;
export const Desc = styled.div`
  font-size: 18px;
  font-style: blod;
  font-family: SF pro Display;
`;

export const Item = styled.div`
  display: flex;
  padding: 10px 30px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-style: bold;
  font-family: SF pro Display;
  padding-left: 10px;
`;

Icon.Dark = styled(MoonFill)`
  width: 29px;
  height: 20px;
  color: black;
`;
Icon.Grid = styled(Grid1x2Fill)`
  width: 29px;
  height: 20px;
  color: #fbb65c;
`;
Icon.User = styled(UserCheck)`
  width: 30px;
  height: 30px;
  color: #ff7eb0;
`;
Icon.UserPl = styled(UserPlus)`
  width: 30px;
  height: 30px;
  color: #36e3ff;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e9e9e9;
`;
Icon.Perm = styled(PermMedia)`
  width: 30px;
  height: 30px;
  color: #5476ff;
`;

Icon.Setting = styled(Settings2Outline)`
  width: 30px;
  height: 30px;
  color: #0bc630;
`;

Icon.Comm = styled(Comment)`
  width: 30px;
  height: 30px;
  color: #0bc630;
`;

Icon.Bell = styled(BellFill)`
  width: 30px;
  height: 30px;
  color: #a394c2;
`;
