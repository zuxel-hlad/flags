import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ src, alt, width, height }) => (
    <LazyLoadImage
        alt={alt}
        effect="blur"
        src={src}
        width={width}
        height={height}
    />
);
export default LazyImage;
