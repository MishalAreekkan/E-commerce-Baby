import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../assets/pic1.jpg"

function Home() {
  const carouselItems = [
    {
      imageSrc: "https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/316-1706725800-stroller1stweekoffeb2024d.jpg"
    },
    {

      imageSrc: "https://www.thetinylane.com/cdn/shop/files/Tinylane-New-Website-Creatives-4.jpg?v=1700304789&width=1920",
    },
    {

      imageSrc: "https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/333_202206030532_MC_Banner_1920x650_Feeding_Essentials.png",
    },
  ];

  return (
    <div >
      <div style={{ height: "600px", width: "100%" }}  >
        <Carousel data-bs-theme="dark"  >
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index} >
              <img
                className="d-block"
                src={item.imageSrc}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div>
        <img style={{ width: "100%", height: "75px" }} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920-x-180-au-strip030224.jpg" alt="" />
      </div>
      <div>
        <img style={{ width: "100%", height: "110px" }} src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/soi_desktop_def_250124_01.jpg" alt="" />
      </div>
      <div>
        <img style={{ width: "100%", height: "110px" }} src="https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/318_202310190313_MC_Exclusive_Strip_Banner_18.10.23_1.jpg?width=1804&height=132&mode=fill&fill=solid&fill-color=FFFFFF%20%20,https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/318_202310190313_MC_Exclusive_Strip_Banner_18.10.23_1.jpg?width=700&height=51&mode=fill&fill=solid&fill-color=FFFFFF%20780w,%20%20%20,https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/318_202310190313_MC_Exclusive_Strip_Banner_18.10.23_1.jpg?width=360&height=26&mode=fill&fill=solid&fill-color=FFFFFF%20360w" alt="" />
      </div><br />
      <div style={{ display: "flex",flexWrap:"wrap", justifyContent: "space-around" }}>
        <img style={{ width: "385px" }} src="https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/mothercare/new/New/242-2020_11_03-4hamleys4thbannermobile.jpg" alt="" />
        <img style={{ width: "350px" }}  src="https://cdn.create.vista.com/downloads/1684f863-dcac-473c-890a-440dc2491eb4_1024.jpeg" alt="a" />
        <img style={{ width: "350px" }}  src="https://cdn.create.vista.com/downloads/6e7a100a-1493-407b-a1d4-6025d0507a01_1024.jpeg" alt="a" />
        <img style={{ width: "350px" }}  src="https://cdn.create.vista.com/downloads/d28bf28a-f37c-4f1d-b1d3-0029890ad466_1024.jpeg" alt="a" />
        <img style={{ width: "350px" }} src="https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/318_202311160524_MC_E_CommExclusiveBanner_10.11.23_Final.jpg?width=890&height=645&mode=fill&fill=solid&fill-color=FFFFFF" alt="" />
        <img style={{ width: "350px" }}  src="https://cdn.create.vista.com/downloads/fc2f91d9-468f-4e1d-a4a5-7c748ce98472_1024.jpeg" alt="a" />
        <img style={{ width: "350px" }}  src="https://cdn.create.vista.com/downloads/76ad66c5-b561-49bf-9e0a-20a742bd2cc0_1024.jpeg" alt="a" />
        <img style={{ width: "350px" }}  src="https://cdn.create.vista.com/downloads/33b66ef7-3d43-4155-a188-7db44731cac4_1024.jpeg" alt="a" />
      </div>
    </div>


  )
}

export default Home




