import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const MusicIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={44}
        height={44}
        fill="none"
        {...props}
    >
        <Rect width={44} height={44} fill="#2DD4BF" rx={12} />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 30a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM26 30a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 27V14h10v13m-10-9h10"
        />
    </Svg>
)
export default MusicIcon
