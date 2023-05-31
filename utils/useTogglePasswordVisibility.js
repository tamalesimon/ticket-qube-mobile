import { useState } from "react";
import { icons } from "../constants";

export const useTogglePasswordVisibility = () => {
    const [passwordVisible, setPasswordVisible] = useState(true)
    const [eyeIcon, setEyeIcon] = useState(true)

    const handlePasswordVisibility = () => {
        if (eyeIcon) {
            setPasswordVisible(!passwordVisible);
            setEyeIcon(!eyeIcon);
            return <icons.EyeOffIcon/>

        } else if (!eyeIcon) {
            setEyeIcon(eyeIcon);
            setPasswordVisible(passwordVisible);
            return <icons.EyeIcon/>
        }
      };

      return {
        passwordVisible,
        handlePasswordVisibility
      };
}