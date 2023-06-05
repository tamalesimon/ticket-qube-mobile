import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MailIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="#9CA3AF"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.833 4.167H4.167c-.92 0-1.667.746-1.667 1.666v8.334c0 .92.746 1.666 1.667 1.666h11.666c.92 0 1.667-.746 1.667-1.666V5.833c0-.92-.746-1.666-1.667-1.666Z"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2.5 5.833 7.5 5 7.5-5"
    />
  </Svg>
)
export default MailIcon
