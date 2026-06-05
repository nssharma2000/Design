import Navbar from "./components/Navbar"
import "./App.css"

function App() {
  return (
    <div className="mx-auto w-full flex justify-center items-start">
      <div className="w-full flex justify-center items-start">
        <div id="animated-bg" className="w-full bg-gradient-to-r px-10 pt-10 from-neutral-50 via-red-100 to-gray-50 flex flex-col justify-start items-center gap-10">
          <Navbar />
          <div className="flex flex-col justify-center items-center text-lg font-light lg:text-4xl">
            <div>The thinkers and</div>
            <div>doers were changing</div>
            <div>The status Quo with</div>
          </div>
          <div className="flex flex-col justify-center items-center text-[0.55em] lg:text-sm">
            <div>We are a team of strategists, designers, communicators and researchers. Together</div>
            <div>we believe that progress only happens when you refuse to play safe.</div>
          </div>
          <div className="w-full mt-24 grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 place-items-center gap-6">
            <div className="flex flex-col col-start-1 col-end-2 row-start-1 row-end-2 justify-center items-start gap-4">
              <div className="flex flex-col justify-center items-start text-lg lg:text-xl">
                <div>Tomorrow should</div>
                <div>be better than today</div>
              </div>
              <div className="flex flex-col justify-center items-start text-[0.55em] lg:text-sm">
                <div>We are a team of strategists, designers, communicators and researchers.</div>
                <div>Together, we believe that progress only happens when you refuse</div>
                <div>to play things safe.</div>
              </div>
              <div className="text-[0.5em] lg:text-sm">
                Read more  --------------{">"}
              </div>
            </div>
            <div className="flex justify-center items-center col-start-1 lg:col-start-2 col-end-2 lg:col-end-3 row-start-2 lg:row-start-1 lg:row-end-2 row-end-3">
              <div className="p-20 rounded-full bg-red-300 w-[20%] h-[20%]"></div>
            </div>
            <div className="flex justify-center items-center col-start-1 col-end-2 row-start-3 lg:row-start-2 lg:row-end-3 row-end-4">
              <div className="p-20 rounded-full bg-blue-300 w-[20%] h-[20%]"></div>
            </div>
            <div className="flex flex-col col-start-1 col-end-2 lg:col-start-2 lg:col-end-3 row-start-4 row-end-5 lg:row-start-2 lg:row-end-3 justify-center items-start gap-4">
              <div className="flex flex-col justify-center items-start text-lg lg:text-xl">
                <div>Tomorrow should</div>
                <div>be better than today</div>
              </div>
              <div className="flex flex-col justify-center items-start text-[0.55em] lg:text-sm">
                <div>We are a team of strategists, designers, communicators and researchers.</div>
                <div>Together, we believe that progress only happens when you refuse</div>
                <div>to play things safe.</div>
              </div>
              <div className="text-[0.5em] lg:text-sm">
                Read more  --------------{">"}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-center">
            <div className="flex flex-col justify-center items-start text-lg lg:text-3xl">
              <div>What we can</div>
              <div>offer you!</div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-center">
            <hr className="w-full h-1 bg-gray-300 my-6" />
            <div className="w-full flex justify-between items-center">
              <div className="w-[15%] flex flex-col justify-center items-start text-[0.5em] lg:text-sm">
                <div>Office of multiple</div>
                <div>interest content</div>
              </div>
              <div className="flex justify-start items-center text-lg lg:text-xl">
                Collaborative and partnership
              </div>
              <div className="flex justify-center items-center lg:text-lg">
                ------{">"}
              </div>
            </div>
            <hr className="w-full h-1 bg-gray-300 my-6" />
            <div className="w-full flex justify-between items-center">
              <div className="w-[15%] flex flex-col justify-center items-start text-[0.5em] lg:text-sm">
                <div>The hangar US Air force</div>
                <div>digital experimental</div>
              </div>
              <div className="flex justify-start items-center text-lg lg:text-xl">
                We talk about our weight
              </div>
              <div className="flex justify-center items-center lg:text-lg">
                ------{">"}
              </div>
            </div>
            <hr className="w-full h-1 bg-gray-300 my-6" />
            <div className="w-full flex justify-between items-center">
              <div className="w-[15%] flex flex-col justify-center items-start text-[0.5em] lg:text-sm">
                <div>Delta faucet content,</div>
                <div>social, digital</div>
              </div>
              <div className="flex justify-start items-center text-lg lg:text-xl">
                Piloting digital confidence
              </div>
              <div className="flex justify-center items-center lg:text-lg">
                ------{">"}
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-16 justify-start items-center text-lg lg:text-xl">
            <div>What our customer</div>
            <div>says about us</div>
          </div>
          <div className="w-[50%] h-[20vh] flex rounded-xl p-6 bg-slate-100 justify-center items-center">
            <div className="h-full flex justify-start items-start text-start text-[3em] text-gray-400">
              {"\""}
            </div>
            <div className="h-full text-[0.6em] text-wrap font-light text-center lg:text-sm">
              Elementum  delivered the site within the timeline
              as they requested. In the end, the client found a 50% 
              increase in traffic with in days since its launch. They
              also had an impressive ability to use technologies that
              the company hasn`t used, which have also proved to
              be easy to use and reliable
            </div>
             <div className="h-full flex justify-end items-end text-end text-[3em] text-gray-400">
              {"\""}
            </div>
          </div>
          <div className="w-screen flex flex-col justify-around items-center bg-green-100 pt-10 px-10 gap-6">
            <div className="w-[25%] h-[10vh] text-lg text-center text-wrap lg:text-4xl">
              Subscribe to
              our newsletter
            </div>
            <div className="w-full py-6 flex justify-center items-center text-sm lg:text-md">
              To make your stay special and even more memorable
            </div>
            <button className="mt-4 rounded-full flex justify-center items-center hover:bg-gray-600 hover:cursor-pointer bg-black text-white transition-all duration-500 px-6 py-4 text-sm">
              Subscribe Now
            </button>
            <hr className="w-[90%] h-[2px] bg-black border-black" />
            <div className="w-[90%] flex justify-between items-center">
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="lg:text-lg">
                  Company
                </div>
                <div className="text-sm">
                  Home
                </div>
                <div className="text-sm">
                  Studio
                </div>
                <div className="text-sm">
                  Service
                </div>
                <div className="text-sm">
                  Blog
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="lg:text-lg">
                  Terms & Policies
                </div>
                <div className="text-sm">
                  Privacy Policy
                </div>
                <div className="text-sm">
                  Terms & Conditions
                </div>
                <div className="text-sm">
                  Explore
                </div>
                <div className="text-sm">
                  Accessibility
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="lg:text-lg">
                  Follow Us
                </div>
                <div className="text-sm">
                  Instagram
                </div>
                <div className="text-sm">
                  LinkedIn
                </div>
                <div className="text-sm">
                  Youtube
                </div>
                <div className="text-sm">
                  Twitter
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="lg:text-lg">
                  Terms and Policies
                </div>
                <div className="text-sm">
                  1498w Fluton ste, STE
                  2D Chicgo, IL 63867.
                </div>
                <div className="text-sm">
                  {"(123) 456789000"}
                </div>
                <div className="text-sm">
                  info@elementum.com
                </div>
              </div>


            </div>
            <div className="mt-16 text-xs">
              ©2023 Elementum. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default App
