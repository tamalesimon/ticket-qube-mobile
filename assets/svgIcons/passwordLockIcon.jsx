import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PasswordLock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#9CA3AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.167 9.167H5.833c-.92 0-1.666.746-1.666 1.666v5c0 .92.746 1.667 1.666 1.667h8.334c.92 0 1.666-.746 1.666-1.667v-5c0-.92-.746-1.666-1.666-1.666Z"
    />
    <Path
      stroke="#9CA3AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14.167a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667Z"
    />
    <Path
      stroke="#9CA3AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.667 9.167V5.833a3.333 3.333 0 0 1 6.666 0v3.334"
    />
  </Svg>
)
export default PasswordLock
