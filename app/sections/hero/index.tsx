"use client";

// library style
import {
  Image,
  Stack,
  Text,
  IconButton,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// assets
import HeroImg from "@/assets/hero.png";
import HeroImg2 from "@/assets/hero2.jpg";
import HeroImg4 from "@/assets/hero4.jpg";

export default function HeroSection() {
  const images = [HeroImg, HeroImg2, HeroImg4];
  const sliderRef = useRef<Slider>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  // setting to image slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: (
      <IconButton
        aria-label="Previous"
        icon={<i className="fas fa-chevron-left" />}
        onClick={() => sliderRef.current!.slickPrev()}
        top={{ base: "78%", md: "50%" }}
        left={{ base: 3, md: 10 }}
        position={"absolute"}
        zIndex={999}
        backgroundColor={"transparent"}
        _hover={{ backgroundColor: "transparent" }}
      />
    ),
    nextArrow: (
      <IconButton
        aria-label="Next"
        icon={<i className="fas fa-chevron-right" />}
        onClick={() => sliderRef.current!.slickNext()}
        top={{ base: "78%", md: "50%" }}
        right={!isMobile ? 10 : undefined}
        left={isMobile ? 12 : undefined}
        position={"absolute"}
        zIndex={999}
        backgroundColor={"transparent"}
        _hover={{ backgroundColor: "transparent" }}
      />
    ),
  };
  return (
    <Stack position="relative" id="hero">
      {/* image sider components */}
      <Slider
        data-current-slide={sliderRef.current}
        data-slide-count={images.length}
        {...settings}
        ref={sliderRef}
      >
        {images.map((image, index) => (
          <Stack key={index} position="relative">
            <Image
              src={typeof image === "string" ? image : (image as any).src}
              alt={`hero-${index}`}
              width="100%"
              height="100vh"
              objectFit="cover"
            />
            {/* Overlay background */}
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              background="rgba(0, 0, 0, 0.5)"
              pointerEvents="none"
            />
          </Stack>
        ))}
      </Slider>

      {/* hero content */}
      <Stack
        position="absolute"
        zIndex={100}
        top={{ base: "20%", md: "30%" }}
        color={"white"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* heading */}
        <Stack
          width={{ base: "90%", md: "90%", lg: "60%" }}
          textAlign={{ base: "left", md: "center" }}
          fontSize={{ base: "25px", md: "35px" }}
          fontWeight={"bold"}
        >
          <Text>
            Selamat datang di situs resmi Edu-Tourism Laboratorium Enterprise
            System and Solution Universitas Telkom!
          </Text>
        </Stack>

        {/* subheading */}
        <Stack
          width={{ base: "90%", md: "60%" }}
          textAlign={{ base: "left", md: "center" }}
          fontSize={{ base: "14px", md: "16px" }}
        >
          <Text>
            Kami dengan bangga mempersembahkan portal Edu Tourism, tempat di
            mana Anda dapat menjelajahi informasi terkait kegiatan kami dalam
            mendukung sektor pariwisata pendidikan. Melalui berbagai inisiatif
            edukatif, kami berkomitmen untuk memberikan wawasan mendalam tentang
            industri ini
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
