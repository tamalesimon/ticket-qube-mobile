import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ChevronUp = (props) => (
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
            d="M4 10L8 6L12 10"
        />
    </Svg>
)
export default ChevronUp
