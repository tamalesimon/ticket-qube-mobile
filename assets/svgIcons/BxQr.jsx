import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BxQr = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#00334E"
      d="M2.5 9.167h6.667V2.5H2.5v6.667Zm1.667-5H7.5V7.5H4.167V4.167ZM2.5 17.5h6.667v-6.667H2.5V17.5Zm1.667-5H7.5v3.333H4.167V12.5Zm6.666-10v6.667H17.5V2.5h-6.667Zm5 5H12.5V4.167h3.333V7.5Zm-4.991 3.333h1.666V12.5h-1.666v-1.667Zm1.666 1.667h1.667v1.667h-1.667V12.5Zm-1.666 1.667h1.666v1.666h-1.666v-1.666Zm3.333 0h1.667v1.666h-1.667v-1.666Zm1.667 1.666h1.666V17.5h-1.666v-1.667Zm-3.334 0h1.667V17.5h-1.667v-1.667Zm1.667-5h1.667V12.5h-1.667v-1.667Zm1.667 1.667h1.666v1.667h-1.666V12.5Z"
    />
  </Svg>
)
export default BxQr
