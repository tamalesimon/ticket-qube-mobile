import Svg, { Path } from "react-native-svg"
const MapPin = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FF8142"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <Path
      stroke="#FF8142"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0v0Z"
    />
  </Svg>
)
export default MapPin
