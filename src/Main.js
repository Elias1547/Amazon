import React from 'react'
import './Home.css'
import image from './image/image.png'
import Product from './Product';
import HomeItem from './HomeItem'
import headerlink from './headerlink';
 function Main() {
  return (<>
< headerlink/>
      <div className='home'>
     <div className='home_container'>
<img className='home_image' src={image} />

<div className='home_row' id="row_1">

<Product 
id="1"
title="The lean startup How constant Innovation"
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_2x_EN._SY608_CB564799420_.jpg"
/>
<Product id="2"
title="The lean startup How constant Innovation"
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_2x._SY232_CB563137408_.jpg"/>

<Product id="3"
title="Toys under"
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_home_B08RCCP3HV_01.23._SY232_CB619238939_.jpg"/>
 </div>
 <HomeItem/>
<div className='home_row'>
<Product id="4"
title="The lean startup How constant Innovation"
price={11.96}
rating={5}
image="https://m.media-amazon.com/images/I/313wAT6Iy2L._SY320_.jpg"/>
<Product id="5"
title="Toys under"
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Laptop._SY232_CB549022351_.jpg"/>
<Product id="6"
title="Toys under"
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/MenWatches_2x._SY232_CB564394432_.jpg"/>


 </div>
 <di className="home_row">
 <Product id="5"
title="Toys under"
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg"/>
 <Product id="5"
title="Toys under"
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg"/>
<Product id="6"
title="Toys under"
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_2x._SY232_CB563137408_.jpg"/>

<Product id="6"
title="Toys under"
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Gaming._SY232_CB549022351_.jpg"/>

 </di>
 <HomeItem/>
 <di className="home_row">
 <Product id="5"
title="Toys under"
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_NW_GamingWeek_PC_v2_2x._SY232_CB558844445_.jpg"/>
 <Product id="5"
title="Toys under"
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_NE_GamingWeek_Xbox_v2_2x._SY232_CB558844445_.jpg"/>
<Product id="6"
title="Toys under"
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_2x._SY232_CB563137408_.jpg"/>

<Product id="6"
title="Toys under"
price={11.96}
rating={5}
image="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/CE/GamingWeek24/Homepage/DQC/CE24_SUM_GW_DQC_SW_GamingWeek_Sony_v2_2x._SY232_CB558844445_.jpg"/>

 </di>
<HomeItem/>
 
 
 
     </div>
    
     </div>
  </>
  )
}
export default Main;
