import { useEffect } from "react";

export const useNavigationHandler = (status, isLoading, navigation, arg) => {
  useEffect(() => {
    const handleNavigation = () => {
      if (status) {
        navigation.navigate(arg);
      }
    };

    handleNavigation();
    navigation.setOptions({
      headerShown: !isLoading,
    });
  }, [status, isLoading, navigation]);
};
