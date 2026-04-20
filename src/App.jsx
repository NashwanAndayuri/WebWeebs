import DataImage, { listOTi } from "./data";
import {listTools, listProyek} from "./data";



function App() {
  

  return (
    <>
    
      <div id="home" className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-200 w-fit p-4 rounded-2xl">
            <img src="./assets/teto_mesmerizer.gif" alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
            <q>Teto Word of the Day~~♥💘💖💗💓</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Find the <span className=" uppercase text-violet-800">right</span> organization for you </h1>
          <p className="text-base/loose mb-6 opacity-50">Need organization recommendation? We got it for you! 
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#sybau" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 text-white">
              Get Started <i className="ri-download-line ri-lg"></i>
              </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="rounded-2xl w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s"
         loading="lazy"/>
      </div>
    
      {/*Projects*/}
      <div className="projects mt-32 py-10">
        <h1 id="orgs" className="text-center text-4xl font-bold mb-2" data-aos="fade-up" 
        data-aos-duration="1000" data-aos-once="true">CS Organization</h1>
        <p className="text-base/loose text-center opacity-50"
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
        data-aos-once="true">Here are the orgs in CS *(subject to change)</p>
        <div className="projects-box mt-14 grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map(projects => (
            <div key={projects.id} className="p-4 bg-zinc-200 rounded-md"
             data-aos="fade-up" data-aos-duration="1000" data-aos-delay={projects.dad}
             data-aos-once="true">
              <img src={projects.gambar} alt="Gambar Ngawi" loading="lazy"/>
              <div>
                <h1 className="text-2xl font-bold my-4">{projects.nama}</h1>
                <p className="text-base/loose mb-4">{projects.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {projects.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-600 bg-zinc-300 rounded-md font-semibold"
                     key={index}>{tool}</p>
                  ))}
                </div>
                <div className="flex flex-row justify-center gap-4">
                  <div className="w-50 mt-8 text-center">
                  <a href={projects.more} className="bg-violet-500 p-3 rounded-lg block border border-zinc-600
                  hover:bg-violet-400">More</a>
                </div>
                <div className="w-50 mt-8 text-center">
                  <a href={projects.link} className="bg-violet-500 p-3 rounded-lg block border border-zinc-600
                  hover:bg-violet-400">Contact Them</a>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      
      </div>
      {/*Projects*/}
      
      {/*ABOUTTTT*/}
      <div className="tentang mt-32 py-10">
        <div id="sybau"
        className="xl:w-2/3 lg:w-3/4 w-3/4 mx-auto p-7 bg-zinc-200 rounded-lg"
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.Sybau} alt="Image" className="w-50 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="mb-10 text-3xl justify-self-center font-medium">Getting Started
          </p>
          <p className="mb-8 text-lg justify-self-center">Do you have any organization plan?  </p>
          <div className=" flex flex-col items-center justify-between gap-6 ">
            <div className="flex items-center justify-evenly gap-1">
              <div className="flex md:flex-row flex-col justify-evenly gap-7">
              <img src={DataImage.Sybau} alt="Image" className="w-50 rounded-md sm:block hidden" loading="lazy"/>
              <img src="./assets/teto-dance.gif" alt="Image" className="w-50 rounded-md sm:block hidden" loading="lazy"/>
              </div>
            </div>
            
            
            <div className="flex items-center justify-evenly gap-1">
              <div className="flex md:flex-row flex-col">
                <a href="./Quiz/quiz.html" className="w-auto m-4 text-xl p-4 bg-zinc-300 hover:bg-zinc-400 rounded-lg border border-zinc-600">
                No, I do not ＞︿＜
                
              </a>
              <a href="#hima" className="w-auto m-4 text-xl p-4 bg-zinc-300 hover:bg-zinc-400 rounded-lg border border-zinc-600">
                Yes, I have (≧∀≦)ゞ
                </a>  
              </div>
            </div>
          </div>
        </div>
        
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000"
          data-aos-once="true">Himakom</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
          data-aos-once="true">Here are the divisions for Himakom:
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listTools.slice(0,8).map((tool) => (
            <div id="hima" className="flex items-center gap-2 p-3 border border-zinc-500 rounded-md 
            hover:bg-zinc-200 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" 
            data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-200 p-1 group-hover:bg-zinc-700 rounded-md"/>
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <div className="container ml-0 rounded">

                  <details className="group">
                    <summary className="list-none flex flex-wrap items-center cursor-pointer group-open:rounded-b-none
                    group-open:z-1 relative">
                      <h4 className="flex p-4 font-medium  ">Details</h4>
                      <div className="flex w-2 items-center justify-center">
                        <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90
                        transition-transform origin-left"></div>
                      </div>
                    </summary>
                    <div>
                      <p className="p-2">{tool.ket}</p>
                    </div>
                  </details>
                  <details className="group mb-4">
                    <summary className="list-none flex flex-wrap items-center cursor-pointer group-open:rounded-b-none
                    group-open:z-1 relative">
                      <h4 className="flex p-4 font-medium l ">Skills</h4>
                      <div className="flex w-2 items-center justify-center">
                        <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90
                        transition-transform origin-left"></div>
                      </div>
                    </summary>
                    <div>
                      <p className="p-2">{tool.skills}</p>
                    </div>
                  </details>

                </div>
                
              </div>
            </div>
          ))}

            
          </div>

          
        </div>

        <div id="oti" className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000"
          data-aos-once="true">OmahTi</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
          data-aos-once="true">Here are the divisions for OmahTi:
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

          {listOTi.slice(0,8).map((tool) => (
            <div className="flex items-center gap-2 p-3 border border-zinc-500 rounded-md 
            hover:bg-zinc-200 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" 
            data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-200 p-1 group-hover:bg-zinc-700 rounded-md"/>
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <details className="group">
                    <summary className="list-none flex flex-wrap items-center cursor-pointer group-open:rounded-b-none
                    group-open:z-1 relative">
                      <h4 className="flex p-4 font-medium  ">Details</h4>
                      <div className="flex w-2 items-center justify-center">
                        <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90
                        transition-transform origin-left"></div>
                      </div>
                    </summary>
                    <div>
                      <p className="p-2">{tool.ket}</p>
                    </div>
                  </details>
                  <details className="group mb-4">
                    <summary className="list-none flex flex-wrap items-center cursor-pointer group-open:rounded-b-none
                    group-open:z-1 relative">
                      <h4 className="flex p-4 font-medium l ">Skills</h4>
                      <div className="flex w-2 items-center justify-center">
                        <div className="border-8 border-transparent border-l-gray-600 ml-2 group-open:rotate-90
                        transition-transform origin-left"></div>
                      </div>
                    </summary>
                    <div>
                      <p className="p-2">{tool.skills}</p>
                    </div>
                  </details>
              </div>
            </div>
          ))}

            
          </div>

          
        </div>

      </div>

      {/*ABOUTTTT*/}

      

      {/*Contacts*/}
      <div className="contacts mt-32 sm:p-0 p-10">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" 
        data-aos-duration="1000" data-aos-once="true">
          Get in Touch
        </h1>
        <p className="text-base/loose text-center mb-5 opacity-50" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
        Join Our Discord Server to Get More Information
        </p>
        <div
        className=" p-10 sm:w-fit w-full mx-auto "
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            
           
            <div id="discord" className="text-center">
             <a href="https://discord.com/" className="bg-violet-500 p-3 rounded-lg w-full cursor-pointer border border-zinc-600
                  hover:bg-violet-400 font-medium">Join Discord <i className="ri-discord-fill"></i></a>
            </div>
          </div>
        </div>
      </div>
      {/*Contacts*/}
    </>
  )
}

export default App
