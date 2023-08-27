interface Props {
  src: string | undefined;
  alt: string | undefined;
  className?: string;
  width?: number;
  height?: number;
}

const PhotoIcon = ({
  src,
  alt,
  className = "iconPerfil",
  width = 35,
  height = 35,
}: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default PhotoIcon;
