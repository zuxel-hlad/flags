import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface LazyImageProps {
    src: string;
    alt: string;
    width: string;
    height: string;
}

const LazyImage: FC<LazyImageProps> = ({ src, alt, width, height }) => (
    <LazyLoadImage
        alt={alt}
        effect="blur"
        src={src}
        width={width}
        height={height}
    />
);
export default LazyImage;
