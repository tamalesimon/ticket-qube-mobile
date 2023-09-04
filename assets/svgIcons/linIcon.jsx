import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LinkIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FF8142"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.833 8.667a2.042 2.042 0 0 0 2.917 0l2.333-2.334a2.063 2.063 0 0 0-2.916-2.916l-.292.291"
    />
    <Path
      stroke="#FF8142"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.167 6.333a2.042 2.042 0 0 0-2.917 0L2.917 8.667a2.062 2.062 0 0 0 2.916 2.916l.292-.291"
    />
  </Svg>
)
export default LinkIcon