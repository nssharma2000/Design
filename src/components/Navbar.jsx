import { Hamburger, HamburgerIcon, Menu } from "lucide-react"


function Navbar() {
  return (
    <div className="w-full bg-slate-50 px-4 py-3 flex justify-around items-center">
      <div className="text-sm lg:text-xl font-light tracking-tight">
        Elementum
      </div>
      <div className="hidden lg:flex justify-around items-center gap-3">
        <div>
          Home
        </div>
        <div>
          Studio
        </div>
        <div>
          Services
        </div>
        <div>
          Contact
        </div>
        <div>
          FAQs
        </div>
      </div>
      <Menu className="lg:hidden" />
    </div>
  )

}

export default Navbar
