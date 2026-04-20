import DataImage from "../data";
function App() {
  

  return (
    <>
    
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-200 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded0md" loading="lazy"/>
            <q>Kesan Indah Pertama~~♥💘💖💗💓</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Find the right organization for you </h1>
          <p className="text-base/loose mb-6 opacity-50">Find the right organization for you 
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 text-white">
              Get Started <i className="ri-download-line ri-lg"></i>
              </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s"
         loading="lazy"/>
      </div>
    
      {/*Contacts*/}
      <div className="contacts mt-32 sm:p-0 p-10">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" 
        data-aos-duration="1000" data-aos-once="true">
          Get Contact
        </h1>
        <p className="text-base/loose text-center mb-10 opacity-50" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
        Terhubung Dengan Mr.Ironi
        </p>
        <form action="https://formsubmit.co/anasgj123@gmail.com" method="POST" 
        className="bg-zinc-200 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off"
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="masukan terong..." className="border border-zinc-600 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="masukan terong...." className="border border-zinc-600 p-2 rounded-md"  required/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="pesan..." className="border border-zinc-600 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
             <button type="submit" className="bg-violet-500 p-3 rounded-lg w-full cursor-pointer border border-zinc-600
                  hover:bg-violet-400 font-medium">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/*Contacts*/}
    </>
  )
}

export default App
