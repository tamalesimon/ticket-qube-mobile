import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const MinusIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Rect width={24} height={24} fill="#F9FAFB" rx={8} />
        <Path
            stroke="#9CA3AF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8.5 12h7"
        />
    </Svg>
)
export default MinusIcon
