import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "./../img/rsz_1dhaka.jpg";
import slide2 from "./../img/rsz_coxsbazar.jpg";
import slide3 from "./../img/rsz_city.jpg";
import slide4 from "./../img/rsz_1sky.jpg";
import slide5 from "./../img/rsz_1sports.jpg";
const Home = () => {
  const ref = useRef(null);
  const [query, setQuery] = useState("dhaka");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [tempImage, setTempImage] = useState("");
  const getPhotos = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${query}`,
        {
          headers: {
            Authorization:
              "MCfQPqTXP2meJBdqdQkLlkV96AeiAjVSlUzA51XJYSmUo1wcya5LjgxG",
          },
        }
      );

      const responseData = await response.json();
      setLoading(false);

      // Extracting photos array from the response
      const photosArray = responseData.photos || [];

      // You can use the photosArray as needed
      console.log(photosArray);
      setData(photosArray);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);
  const onEnter = (e) => {
    if (e.keyCode === 13) getPhotos();
  };
  const getModal = (image) => {
    setTempImage(image);
    setModal(true);
  };

  return (
    <>
      <div
        className="hero h-[600px] "
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/122107/pexels-photo-122107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 150 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-md"
          >
            <h1 className="mb-5 text-5xl font-bold text-lime-300">
              Welcome to Aura
            </h1>
            <p className="text-3xl font-mono">
              We keep this love in a photograph,
            </p>
            <p className="mb-5 text-3xl font-mono">
              We made these memories for ourselves
            </p>
            <input
              type="text"
              placeholder="Search here"
              className="input input-bordered input-success w-full max-w-xl rounded-3xl"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyDown={onEnter}
            />
          </motion.div>
        </div>
      </div>
      <div className="flex ">
        <Swiper
          slidesPerView={1} // Initial slides per view (1 for mobile)
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full mb-3"
        >
          <SwiperSlide>
            <img src={slide1} alt="" className="swiper-image" />
            <h2 className="text-4xl uppercase text-center -mt-14 text-white">
              Dhaka
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" className="swiper-image" />
            <h2 className="text-4xl uppercase text-center -mt-14 text-white">
              Coxs-Bazar
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" className="swiper-image" />
            <h2 className="text-4xl uppercase text-center -mt-14 text-white">
              City
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" className="swiper-image" />
            <h2 className="text-4xl uppercase text-center -mt-14 text-white">
              Sky
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" className="swiper-image" />
            <h2 className="text-4xl uppercase text-center -mt-14 text-white">
              Sports
            </h2>
          </SwiperSlide>
        </Swiper>
      </div>

      {loading && <span className="loading loading-infinity loading-lg"></span>}
      <div>
        <ul className="menu menu-vertical w-full lg:menu-horizontal bg-base-200 ">
          <li>
            <a>All Items</a>
          </li>
          <li>
            <a>Nature</a>
          </li>
          <li>
            <a>Science</a>
          </li>
          <li>
            <a>Summer</a>
          </li>
          <li>
            <a>City</a>
          </li>
          <li className="bg-transparent justify-end">
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} className="">
                Recommended
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Most Recent</a>
                </li>
                <li>
                  <a>Most Viewed</a>
                </li>
                <li>
                  <a>Most Downloaded</a>
                </li>
                <li>
                  <a>Most Appreciated</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="px-3 py-3 gallery">
        {data.map((item, index) => (
          <div
            className="pics "
            key={index}
            onClick={() => getModal(item.src.original)}
          >
            <img src={item.src.original} style={{ width: "100%" }} alt="" />
          </div>
        ))}
      </div>
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempImage} alt="" />
      </div>
    </>
  );
};

export default Home;
