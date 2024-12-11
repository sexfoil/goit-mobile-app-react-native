import * as React from "react";
import Svg, { G, Rect, Defs, ClipPath, Path } from "react-native-svg";

const UserActiveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={40}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Rect width={70} height={40} fill="#FF6C00" rx={20} />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h70v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default UserActiveIcon;
