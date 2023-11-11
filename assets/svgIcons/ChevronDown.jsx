import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ChevronDown = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <Path
            stroke="#9CA3AF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6L8 10L12 6"
        />
    </Svg>
)
export default ChevronDown
