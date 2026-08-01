function Footer() {
  return (
    <footer className="flex flex-col w-full">
      {/* Top: logo + social */}
      <div className="flex items-center justify-between bg-gray-100 px-6 py-6">
        <span className="text-2xl font-bold text-slate-900">Bandage</span>
        <div className="flex items-center gap-4 text-blue-500">
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Twitter">TW</a>
        </div>
      </div>

      {/* Middle: columns */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8 px-6 py-10">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-slate-900">Company Info</h3>
          <a href="#" className="text-sm text-gray-500">About Us</a>
          <a href="#" className="text-sm text-gray-500">Carrier</a>
          <a href="#" className="text-sm text-gray-500">We are hiring</a>
          <a href="#" className="text-sm text-gray-500">Blog</a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-slate-900">Legal</h3>
          <a href="#" className="text-sm text-gray-500">About Us</a>
          <a href="#" className="text-sm text-gray-500">Carrier</a>
          <a href="#" className="text-sm text-gray-500">We are hiring</a>
          <a href="#" className="text-sm text-gray-500">Blog</a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-slate-900">Features</h3>
          <a href="#" className="text-sm text-gray-500">Business Marketing</a>
          <a href="#" className="text-sm text-gray-500">User Analytic</a>
          <a href="#" className="text-sm text-gray-500">Live Chat</a>
          <a href="#" className="text-sm text-gray-500">Unlimited Support</a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-slate-900">Resources</h3>
          <a href="#" className="text-sm text-gray-500">IOS & Android</a>
          <a href="#" className="text-sm text-gray-500">Watch a Demo</a>
          <a href="#" className="text-sm text-gray-500">Customers</a>
          <a href="#" className="text-sm text-gray-500">API</a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-slate-900">Get In Touch</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-100 px-4 py-2 text-sm"
            />
            <button className="bg-blue-500 text-white px-4 py-2 text-sm">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-400">Lore imp sum dolor Amit</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center bg-gray-100 px-6 py-4">
        <p className="text-sm font-semibold text-slate-900">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer