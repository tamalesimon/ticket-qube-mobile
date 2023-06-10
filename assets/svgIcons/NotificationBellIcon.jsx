import Svg, { G, Path } from "react-native-svg"
const NotificationBell = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path
        d="M12 17.848c5.64 0 8.248-.724 8.5-3.627 0-2.902-1.819-2.716-1.819-6.276C18.681 5.165 16.045 2 12 2S5.319 5.164 5.319 7.945c0 3.56-1.819 3.374-1.819 6.275.253 2.915 2.862 3.628 8.5 3.628Z"
        clipRule="evenodd"
      />
      <Path d="M14.389 20.857c-1.364 1.515-3.492 1.533-4.87 0" />
    </G>
  </Svg>
)
export default NotificationBell
