import { useState } from 'react';

const useImageErrorHandler = (initialImageSource) => {
    const [imageSource, setImageSource] = useState(initialImageSource);

    const handleImageError = () => {
        setImageSource('../assets/images/no-image.png');
    };

    return [imageSource, handleImageError];
};

export default useImageErrorHandler;