import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ChevronDownIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        fill="none"
        {...props}
    >
        <Path
            stroke="#FF8142"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.5 5.25 7 8.75l3.5-3.5"
        />
    </Svg>
)
export default ChevronDownIcon
