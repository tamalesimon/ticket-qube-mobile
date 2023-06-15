import Svg, { Path } from "react-native-svg"
const MapPinSmallIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#9CA3AF"
      stroke="#9CA3AF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.771 11.105-2.828 2.828a1.333 1.333 0 0 1-1.885 0l-2.83-2.828a5.333 5.333 0 1 1 7.543 0Z"
    />
    <Path fill="#fff" d="M8 9.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </Svg>
)
export default MapPinSmallIcon
