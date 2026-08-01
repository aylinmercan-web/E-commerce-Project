import { Link } from 'react-router-dom'
import { Phone, Mail, User, Search, ShoppingCart, Heart, ChevronDown, Menu } from 'lucide-react'
function Header() {
  return (
    <header className="flex flex-col w-full">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between bg-slate-900 text-white text-sm px-6 py-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Phone size={14} />
            (225) 555-0118
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} />
            michelle.rivera@example.com
          </span>
        </div>
        <p>Follow Us and get a chance to win 80% off</p>
        <div className="flex items-center gap-3">
          <span>Follow Us :</span>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Youtube">YT</a>
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Twitter">TW</a>
        </div>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-6 py-4">
        <button className="flex md:hidden">
          <Menu size={24} />
        </button>

        <a href="/" className="text-2xl font-bold text-slate-900">
          Bandage
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link to="/">Home</Link>
          <span className="flex items-center gap-1">
            <a href="/shop">Shop</a>
            <ChevronDown size={14} />
          </span>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="/pages">Pages</a>
        </nav>

        <div className="flex items-center gap-4 text-blue-500">
          <a href="/login" className="hidden md:flex items-center gap-1 text-blue-500 text-sm font-medium">
            <User size={16} />
            Login / Register
          </a>
          <Search size={20} />
          <span className="relative flex">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 text-xs">1</span>
          </span>
          <span className="relative flex">
            <Heart size={20} />
            <span className="absolute -top-2 -right-2 text-xs">1</span>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header