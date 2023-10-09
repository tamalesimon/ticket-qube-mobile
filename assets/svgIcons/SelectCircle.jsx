import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const SelectCircle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Rect
      width={17}
      height={17}
      x={0.5}
      y={0.5}
      fill="#fff"
      stroke="#E5E7EB"
      rx={8.5}
    />
  </Svg>
)
export default SelectCircle;
