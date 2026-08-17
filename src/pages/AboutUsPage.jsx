function AboutUsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page header / breadcrumb */}
      <section className="flex flex-col items-center justify-center gap-2 bg-gray-50 px-6 py-10 md:py-16">
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900">About Us</h1>
        <p className="text-sm text-gray-500">Home &gt; About</p>
      </section>

      {/* About content */}
      <section className="flex flex-col items-center gap-4 px-6 py-16 md:py-20 text-center">
        <span className="text-sm text-gray-500">About Us</span>
        <h2 className="max-w-2xl text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
          We are a team who loves what we do.
        </h2>
        <p className="max-w-xl text-sm md:text-base text-gray-500 leading-7">
          Problems trying to resolve the conflict between what a design agency is used to
          doing and the client's expectations. We know how large objects will act, but things
          on a small scale.
        </p>
      </section>

      {/* Stats */}
      <section className="flex flex-wrap items-center justify-center gap-10 md:gap-20 bg-gray-50 px-6 py-16">
        {[
          { value: '15K', label: 'Happy Customers' },
          { value: '150+', label: 'Team Members' },
          { value: '300+', label: 'Projects Completed' },
          { value: '10+', label: 'Years of Experience' },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="text-2xl md:text-3xl font-extrabold text-slate-900">{stat.value}</span>
            <span className="text-sm text-gray-500">{stat.label}</span>
          </div>
        ))}
      </section>
    </div>
  )
}

export default AboutUsPage
