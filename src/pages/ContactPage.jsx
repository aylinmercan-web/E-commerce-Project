function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page header / breadcrumb */}
      <section className="flex flex-col items-center justify-center gap-2 bg-gray-50 px-6 py-10 md:py-16">
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900">Contact</h1>
        <p className="text-sm text-gray-500">Home &gt; Contact</p>
      </section>

      {/* Contact content */}
      <section className="flex flex-col md:flex-row gap-10 px-6 py-10 md:py-16 max-w-4xl mx-auto w-full">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="text-xl font-bold text-slate-900">Get In Touch</h2>
          <p className="text-sm text-gray-500 leading-6">
            Problems trying to resolve the conflict between what a design agency is used to doing and the client's expectations.
          </p>

          <div className="flex flex-col gap-2 mt-4">
            <span className="text-sm font-semibold text-slate-900">Address</span>
            <span className="text-sm text-gray-500">123 Main Street, Istanbul, Turkey</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-slate-900">Phone</span>
            <span className="text-sm text-gray-500">(225) 555-0118</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-slate-900">Email</span>
            <span className="text-sm text-gray-500">michelle.rivera@example.com</span>
          </div>
        </div>

        <form className="flex flex-col gap-4 w-full md:w-1/2">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-200 px-4 py-3 text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-200 px-4 py-3 text-sm"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-200 px-4 py-3 text-sm"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-200 px-4 py-3 text-sm"
          />
          <button
            type="submit"
            className="w-fit bg-sky-500 text-white font-bold px-8 py-3"
          >
            SUBMIT
          </button>
        </form>
      </section>
    </div>
  )
}

export default ContactPage