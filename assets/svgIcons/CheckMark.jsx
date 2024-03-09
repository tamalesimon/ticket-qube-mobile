import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CheckMark = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={50}
        height={50}
        viewBox="0 0 55.702 55.702"
        {...props}
    >
        <Path
            d="M27.851 0C12.494 0 0 12.494 0 27.851s12.494 27.851 27.851 27.851 27.851-12.494 27.851-27.851C55.701 12.494 43.208 0 27.851 0zm0 51.213c-12.882 0-23.362-10.48-23.362-23.363 0-12.882 10.48-23.362 23.362-23.362s23.362 10.481 23.362 23.363-10.48 23.362-23.362 23.362z"
            style={{
                fill: "#22c55e",
            }}
        />
        <Path
            d="m36.729 18.97-13 13.001-4.757-4.757a2.242 2.242 0 0 0-3.173 0 2.242 2.242 0 0 0 0 3.173l6.344 6.344a2.24 2.24 0 0 0 3.173 0l14.587-14.587a2.245 2.245 0 0 0-3.174-3.174z"
            style={{
                fill: "#22c55e",
            }}
        />
    </Svg>
)
export default CheckMark
