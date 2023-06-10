import Svg, { Path } from "react-native-svg"
const CurrentLocation = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <Path
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM2 12h2m8-10v2-2Zm0 18v2-2Zm8-8h2-2Z"
    />
  </Svg>
)
export default CurrentLocation
