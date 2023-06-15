import Svg, { Path } from "react-native-svg"
const FlashIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2.06 8.853h2.06v4.8c0 1.12.607 1.347 1.347.507l5.046-5.733c.62-.7.36-1.28-.58-1.28h-2.06v-4.8c0-1.12-.606-1.347-1.346-.507L1.48 7.573c-.613.707-.353 1.28.58 1.28Z"
    />
  </Svg>
)
export default FlashIcon
