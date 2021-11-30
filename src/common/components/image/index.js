import * as React from "react";
import { useState } from "react";

interface Props {
  src: string;
  fallbackUrl: string;
  className: string;
  alt: string;
}

const Image = (props: Props) => {
  const [showFallbackimg, setShowFallbackimg] = useState(false);

  const fallback = () => {
    setShowFallbackimg(true);
  };

  if (showFallbackimg) {
    return (
      <img
        src={props.fallbackUrl}
        className={props.className}
        alt={props.alt}
      />
    );
  } else {
    return (
      <img
        src={props.src}
        className={props.className}
        alt={props.alt}
        onError={fallback}
      />
    );
  }
};

export default Image;
