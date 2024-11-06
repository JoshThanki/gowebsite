import React from "react";
import {
  Box,
  Image,
  useBreakpointValue,
  Text,
  Container,
} from "@chakra-ui/react";
import Masonry from "react-masonry-css";

// Interface for images
interface ImageData {
  src: string;
  caption: string;
}

const ImageGallery: React.FC = () => {
  // Dynamically import all images from the ../assets/images folder
  const imagesContext = import.meta.glob(
    "../../public/images/*.{png,jpg,jpeg,svg}"
  );
  console.log(imagesContext);

  const images: ImageData[] = Object.keys(imagesContext).map(
    (src: string, index: number): ImageData => {
      const fileName =
        src.split("/").pop()?.split(".").shift() || `Image ${index + 1}`;
      return {
        src: src.replace("../../public", ""),
        caption: fileName,
      };
    }
  );

  // Number of columns will change based on screen width
  const breakpointColumns = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 2,
    xl: 3,
  });

  return (
    <Container
      maxW={{ base: '100vw', lg: '80vw' }}
      boxShadow="lg"
      bg="rgba(0,0,0,0.8)"
      textColor="gray.300"
      p={8}
      pt={16}
    >
      <Box
        sx={{
          ".masonry-grid": {
            display: "flex",
            marginLeft: "-10px",
          },
          ".masonry-grid-column": {
            paddingLeft: "10px",
            backgroundClip: "padding-box",
          },
          ".masonry-grid-column > div": {
            marginBottom: "15px",
            overflow: "hidden",
            position: "relative",
            transition: "transform 0.3s",
            zIndex: 0,
          },
          ".masonry-grid-column > div:hover": {
            transform: "scale(1.1)", /// scale factor on hover
            zIndex: 1,
          },
          ".caption": {
            position: "absolute",
            bottom: "-30px", // Initially hidden below the card
            left: "50%",
            transform: "translateX(-50%)", // Center the caption
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
            color: "white",
            padding: "5px 10px",
            borderRadius: "md",
            opacity: 0,
            transition: "opacity 0.3s, bottom 0.3s", // Smooth caption transition
          },
          ".masonry-grid-column > div:hover .caption": {
            opacity: 1,
            bottom: "10px", // Move caption into view on hover
          },
        }}
      >
        <Masonry
          breakpointCols={breakpointColumns || 3}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {images.map((image, index) => (
            <Box key={index} mb={4} overflow="hidden">
              <Image
                src={image.src}
                alt={image.caption}
                objectFit="cover"
                width="100%"
                height="auto"
                borderRadius="md"
              />
              <Text className="caption">{image.caption}</Text>{" "}
              {/* Caption for image */}
            </Box>
          ))}
        </Masonry>
      </Box>
    </Container>
  );
};

export default ImageGallery;
