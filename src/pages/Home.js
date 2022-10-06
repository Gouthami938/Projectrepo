import Base from "../components/Base";
// import homepgimg from "./homepgimg.PNG";
// import picc1 from "./picc1.PNG";

const Home=()=>{
    return(
        <Base>
        {/* <div className='bg-image'></div>
        {/* <img src={picc1} width="1400px" height="700px" /> */}
{/* <div style={{

backgroundImage:'url("https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/UEzcY5zHyx7sJkp8PZu6aX5dA64=/1200x630/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/7DBXN4HOONEYRNEUK673AULASU.jpg")',width:1500,height:605

}}></div> */}
{/* <img src={homepgimg}/> */}
   <img src='https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/UEzcY5zHyx7sJkp8PZu6aX5dA64=/1200x630/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/7DBXN4HOONEYRNEUK673AULASU.jpg'width="1300px" height={100} className='img-fluid' alt='Sample' />
   {/* <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'> 
          className='img-fluid'
        </div>
        </div>
         */}

        </Base>
    );
};
export default Home;