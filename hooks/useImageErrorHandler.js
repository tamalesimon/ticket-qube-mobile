import { useState } from 'react';

const useImageErrorHandler = (initialImageSource) => {
    const [imageSource, setImageSource] = useState(initialImageSource);

    const handleImageError = () => {
        setImageSource('../assets/images/no-image-placeholder.jpeg');
    };

    return [imageSource, handleImageError];
};

export default useImageErrorHandler;