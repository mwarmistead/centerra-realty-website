import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function RVParksLand() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32">
          <Image
            src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="RV Parks and Land Development"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#254562]/90 to-[#254562]/70"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-5xl font-bold mb-6">RV Parks & Land Development</h1>
            <div className="w-32 h-1 bg-[#19a9ca] mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed">
              Strategic RV park development and raw land opportunities in high-growth markets across the Southeast.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#254562] mb-6">RV Parks & Land Investment</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                The RV and outdoor recreation industry has experienced unprecedented growth, creating exceptional
                opportunities for well-positioned RV parks and recreational land developments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 border-2 border-gray-100 hover:border-[#19a9ca] transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#19a9ca] rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254562] mb-4 text-center">RV Resort Development</h3>
                <p className="text-gray-700">
                  Full-service RV resorts with amenities, utilities, and recreational facilities for extended stays.
                </p>
              </Card>

              <Card className="p-6 border-2 border-gray-100 hover:border-[#19a9ca] transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#19a9ca] rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254562] mb-4 text-center">Raw Land Development</h3>
                <p className="text-gray-700">
                  Strategic land acquisition and development for recreational, residential, and commercial uses.
                </p>
              </Card>

              <Card className="p-6 border-2 border-gray-100 hover:border-[#19a9ca] transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#19a9ca] rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254562] mb-4 text-center">Recreational Facilities</h3>
                <p className="text-gray-700">
                  Campgrounds, outdoor recreation centers, and nature-based tourism developments.
                </p>
              </Card>

              <Card className="p-6 border-2 border-gray-100 hover:border-[#19a9ca] transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#19a9ca] rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254562] mb-4 text-center">Mixed-Use Development</h3>
                <p className="text-gray-700">
                  Combining recreational facilities with retail, dining, and entertainment components.
                </p>
              </Card>

              <Card className="p-6 border-2 border-gray-100 hover:border-[#19a9ca] transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#19a9ca] rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254562] mb-4 text-center">Land Banking</h3>
                <p className="text-gray-700">
                  Strategic acquisition of land in growth corridors for future development and appreciation.
                </p>
              </Card>

              <Card className="p-6 border-2 border-gray-100 hover:border-[#19a9ca] transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#19a9ca] rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H18V0h-2v2H8V0H6v2H4.5C3.57 2 3 2.57 3 3.5v15C3 19.43 3.57 20 4.5 20h15c.93 0 1.5-.57 1.5-1.5v-15C21 2.57 20.43 2 19.5 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#254562] mb-4 text-center">Agritourism & Events</h3>
                <p className="text-gray-700">
                  Event venues, wedding facilities, and agritourism operations on rural properties.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Market Trends */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#254562] text-center mb-12">Market Opportunities</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#254562] mb-6">Growing RV Market</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#19a9ca] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Over 11 million RV-owning households in the US
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#19a9ca] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    40% increase in RV purchases since 2020
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#19a9ca] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Growing preference for outdoor recreation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#19a9ca] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Remote work enabling extended travel
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#19a9ca] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Limited supply of quality RV parks
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#254562] mb-6">Southeast Advantages</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#19a9ca] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Year-round outdoor recreation climate
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#19a9ca] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Major interstate highway networks
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#19a9ca] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Business-friendly regulatory environment
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#19a9ca] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Abundant available land for development
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#19a9ca] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Strong population and economic growth
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#254562]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore RV Park & Land Opportunities?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contact our team to discuss RV park development, land acquisition, and recreational
              property investment opportunities across the Southeast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#19a9ca] hover:bg-[#178ba8] text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
              >
                Schedule a Consultation
              </a>
              <a
                href="/invest"
                className="border-2 border-white text-white hover:bg-white hover:text-[#254562] px-8 py-3 rounded-md font-medium transition-colors inline-block"
              >
                View Investment Opportunities
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}