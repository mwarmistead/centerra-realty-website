import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#254562] via-[#1e3651] to-[#19a9ca] py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-5xl font-bold mb-6">About Centerra Realty</h1>
            <div className="w-32 h-1 bg-[#19a9ca] mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed">
              We solve institutional investment challenges.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold text-[#254562] mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-8">
                Centerra Realty is focused on bringing together thought leaders to offer uncommon solutions to chronic problems faced by institutional investors. Our focus is bringing an outside perspective and addressing the challenges of the modern institutional investors dilemma.
              </p>

              <h2 className="text-3xl font-bold text-[#254562] mb-6">What We Do</h2>
              <p className="text-gray-700 mb-8">
                We specialize in the need for liquidity and flexibility in private partnership equity and private real estate transactions. Our team builds wealth with "boring" real estate - the kind that moves goods and generates consistent cash flow.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div>
                  <h3 className="text-xl font-bold text-[#254562] mb-4 text-center">Investment Focus</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Industrial Warehousing</li>
                    <li>• Multifamily Properties</li>
                    <li>• Office Buildings</li>
                    <li>• Retail & Restaurant</li>
                    <li>• Self Storage</li>
                    <li>• RV Parks & Land</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#254562] mb-4 text-center">Our Approach</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Conservative underwriting</li>
                    <li>• Aligned capital investment</li>
                    <li>• Comprehensive due diligence</li>
                    <li>• Fractional liquidity solutions</li>
                    <li>• Risk-adjusted returns</li>
                    <li>• Transparent processes</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#254562] mb-6">Why Choose Centerra Realty</h2>
              <p className="text-gray-700 mb-4">
                With decades of expertise, our team of professionals is proficient in advising institutional investors, family offices, and government leaders on optimizing their asset utilization.
              </p>
              <p className="text-gray-700">
                We offer comprehensive expertise in investment analytics and fractional liquidity across all areas, focusing on properties near people, near roads, with power, doors, and parking. Simple. Strong. Useful.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}