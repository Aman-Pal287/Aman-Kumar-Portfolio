import { useGSAP } from "@gsap/react";
import "./FullScreenNav.scss";
import gsap from "gsap";
import { useRef } from "react";

const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".stairing", {
      delay: 1,
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.from(fullNavLinkRef.current, {
      opacity: 0,
    });
    tl.from(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.2,
      },
    });
  });

  return (
    <main id="fullScreenNav" className="text-white h-screen w-full absolute ">
      <div className="h-screen w-full fixed">
        <div className="flex h-full w-full">
          <div className="stairing h-full w-1/5 bg-red-900"></div>
          <div className="stairing h-full w-1/5 bg-red-900"></div>
          <div className="stairing h-full w-1/5 bg-red-900"></div>
          <div className="stairing h-full w-1/5 bg-red-900"></div>
          <div className="stairing h-full w-1/5 bg-red-900"></div>
        </div>
      </div>

      <div ref={fullNavLinkRef} className="relative">
        <div className="absolute p-2.5 flex w-full justify-between items-start">
          <section className="fullScreenNav_svg_logo ">
            <div className="w-29">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </section>

          <div className="relative h-32 w-32 flex cursor-pointer">
            <div className="h-40 w-1 -rotate-45 absolute origin-top bg-[#D3FD50]"></div>
            <div className="h-40 w-1 right-0 rotate-45 absolute origin-top bg-[#D3FD50]"></div>
          </div>
        </div>

        <div className="fullScreenNav-all-links py-35">
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
              Projects
            </h1>

            <div className="moveLink absolute bg-[#D3FD50] text-black flex top-0">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
              </div>

              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
              Agence
            </h1>

            <div className="moveLink absolute bg-[#D3FD50] text-black flex top-0">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
              </div>

              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
              Contact
            </h1>

            <div className="moveLink absolute bg-[#D3FD50] text-black flex top-0">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
              </div>

              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-t-1 border-b-1 border-white">
            <h1 className="font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
              Blog
            </h1>

            <div className="moveLink absolute bg-[#D3FD50] text-black flex top-0">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
              </div>

              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] text-[7vw] text-center leading-[1] pt-2 uppercase">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-22 rounded-full w-60 shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FullScreenNav;
