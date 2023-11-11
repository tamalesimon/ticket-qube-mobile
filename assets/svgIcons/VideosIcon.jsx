import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const VideosIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={44}
        height={44}
        fill="none"
        {...props}
    >
        <Rect width={44} height={44} fill="#887EF9" rx={12} />
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m25 20 4.553-2.276a1 1 0 0 1 1.447.894v6.764a1 1 0 0 1-1.447.894L25 24v-4ZM23 16h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z"
        />
    </Svg>
)
export default VideosIcon
