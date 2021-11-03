
import { useState } from "react";
import Slider from "react-slick";
import "./home.styles.css";

const Home = () => {
   const [header] = useState([
      {
         img: "https://tse4.mm.bing.net/th?id=OIP.4V2N1zv69gITmCecaBFvFAHaEK&pid=Api&P=0&w=345&h=195"
      },
      {
         img: "https://tse3.mm.bing.net/th?id=OIP.t6R7ihUVrRKSFU3aphqPxwHaDg&pid=Api&P=0&w=403&h=192"
      }

   ])

   const products = [
      {
         img: "https://tse3.mm.bing.net/th?id=OIP.HcJQyErmU82eDpNZ-j7q0wHaEc&pid=Api&P=0&w=284&h=171",
         title: "Cloud Hosting",
         text: 'Optimalkan traffic website Anda menggunakan teknologi cloud hosting dari Qwords'
      },
      {
         img: "https://tse3.mm.bing.net/th?id=OIP.HcJQyErmU82eDpNZ-j7q0wHaEc&pid=Api&P=0&w=284&h=171",
         title: "Cloud Hosting",
         text: 'Optimalkan traffic website Anda menggunakan teknologi cloud hosting dari Qwords'
      },
      {
         img: "https://tse3.mm.bing.net/th?id=OIP.HcJQyErmU82eDpNZ-j7q0wHaEc&pid=Api&P=0&w=284&h=171",
         title: "Cloud Hosting",
         text: 'Optimalkan traffic website Anda menggunakan teknologi cloud hosting dari Qwords'
      },
   ]

   const feature = [
      {
         img: "https://tse2.mm.bing.net/th?id=OIP.IuA09sY_JbAxiqKAEwtKjAHaFj&pid=Api&P=0&w=240&h=181",
         title: "High Enterprise Server",
         text: 'Standar server Qwords adalah server kelas enterprise Dual Xeon Octa Core yang merupakan hardware kelas terbaik.'
      },
      {
         img: "https://tse2.mm.bing.net/th?id=OIP.IuA09sY_JbAxiqKAEwtKjAHaFj&pid=Api&P=0&w=240&h=181",
         title: "High Enterprise Server",
         text: 'Standar server Qwords adalah server kelas enterprise Dual Xeon Octa Core yang merupakan hardware kelas terbaik.'
      },
      {
         img: "https://tse2.mm.bing.net/th?id=OIP.IuA09sY_JbAxiqKAEwtKjAHaFj&pid=Api&P=0&w=240&h=181",
         title: "High Enterprise Server",
         text: 'Standar server Qwords adalah server kelas enterprise Dual Xeon Octa Core yang merupakan hardware kelas terbaik.'
      },

   ]

   const reviews = [
      {
         img: "https://tse2.mm.bing.net/th?id=OIP.Fzieqpbf1hIrZGli33c5sQHaHa&pid=Api&P=0&w=300&h=300",
         name: 'Adi wijaya',
         place: "CEO Sampingan",
         description: "Qwords sangant membantu dalam management data di cloud"
      },
      {
         img: "https://tse2.mm.bing.net/th?id=OIP.Fzieqpbf1hIrZGli33c5sQHaHa&pid=Api&P=0&w=300&h=300",
         name: 'James bond',
         place: "CEO Bukalapak",
         description: "Dengan adanya qwords mudah bagi para pengusaha dalam management data di cloud"
      },

   ]

   return <div className="">
      <div className=" max-w-6xl mx-auto flex gap-10 px-4 pb-5 bg-white pt-20" id="home">
         <div className="ml-5">
            <div className="flex-1 justify-center mt-28 h-full w-96 mr-32">
               <div>
                  <div>
                     <span className="text-4xl font-bold text-primary">Hosting Website dalam Hitungan Menit</span>
                  </div>
                  <div className="mt-5 w-4/5">
                     <span className="">Cloud Hosting Indonesia dengan pelayanan terbaik dan harga murah serta diskon nama domain.</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex-1 items-center justify-center h-full mt-10 ">
            <img className="h-96 w-96 cover" src={"https://tse4.mm.bing.net/th?id=OIP.4V2N1zv69gITmCecaBFvFAHaEK&pid=Api&P=0&w=345&h=195"} />
            {/* <Slider {...configheader}>
               {products.map((x, i) => {
                  return 
               })}
            </Slider> */}
         </div>
      </div>
      <div className="flex flex-col gap-20 bg-cover object-cover z-5 -mt-32" id="product">
         <div className="max-w-6xl mx-auto pt-56 ">
            <div className="max-w-6xl mx-auto py-16 ">
               <div className="flex  mb-10 justify-between">
                  <span className="text-3xl font-bold text-primary">Product</span>
                  <span className="text-sm cursor-pointer"></span></div>
               <div className="flex jutify-between gap-10">
                  {products.map((x, i) => {
                     return <div key={i} className="img-card text-base">
                        <img className="img" src={x.img} />
                        <div className="bg-white p-5">
                           <div className="card-text text-lg font-medium">{x.title}</div>
                           <div className="card-text text-lg font-bold"> <span className="font-bold">$20</span></div>
                           <div className="card-text text-sm font-medium h-16">{x.text}</div>
                        </div>
                     </div>
                  })}

               </div>
               <div className="mt-10 flex jutify-between gap-10">
                  {products.map((x, i) => {
                     return <div key={i} className="img-card text-base">
                        <img className="img" src={x.img} />
                        <div className="bg-white p-5">
                           <div className="card-text text-lg font-medium">{x.title}</div>
                           <div className="card-text text-lg font-bold"> <span className="font-bold">$20</span></div>
                           <div className="card-text text-sm font-medium h-16">{x.text}</div>
                        </div>
                     </div>
                  })}
               </div>
            </div>
         </div>
      </div>
      <div className="flex flex-col pt-20 bg-ctscope object-cover" id="feature">
         <div className="max-w-6xl mx-auto py-16 ">
            <div className="flex  mb-10 justify-between">
               <span className="text-3xl font-bold text-primary">Feature</span>
               <span className="text-sm cursor-pointer"></span></div>
            <div className="flex jutify-between gap-10">
               {feature.map((x, i) => {
                  return <div key={i} className="img-card text-base">
                     <img className="img" src={x.img} />
                     <div className="bg-white p-5">
                        <div className="card-text text-lg font-bold">{x.title}</div>
                        <div className="card-text text-sm font-medium h-16">{x.text}</div>
                     </div>
                  </div>
               })}
            </div>
         </div>
      </div>

      <div className=" max-w-6xl mx-auto pt-5 pb-20 mt-5" id="testimonial">
         <div className="text-3xl font-bold text-primary mb-3">
            <span>Testimonial</span>
         </div>
         <div className="text-sm font-medium mb-10">qwords selalu berupaya untuk meningkatkan kualitas dan efektivitas pelayanan web hosting di indonesia.</div>
         <div className="bg-white  flex justify-around gap-10">
            {reviews.map((x, i) => {
               return <div key={i} className="img-cards my-1 text-base justify-center items-center  bg-white">
                  <div className="flex">
                     <div className="flex-1 text-center bg-white">
                        <div className="flex justify-center items-center p-16">
                           <img className="object-cover w-52 h-32 rounded-full" src={x.img} />
                        </div>
                     </div>
                     <div className="flex-1 text-xs py-2 px-1 bg-white">
                        <div className="flex justify-center flex-col h-full pr-8">
                           <div className="flex justify-center flex-col mb-3">
                              <span className="text-thirdary text-sm font-medium ">{x.name}</span>
                              <span className="text-xs font-medium">{x.place}</span>
                           </div>

                           <span>{x.description}</span>
                        </div>
                     </div>
                  </div>
               </div>
            })}
         </div>
      </div>
   </div >
}

export default Home;