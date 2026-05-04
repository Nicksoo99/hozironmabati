import { Phone, Mail, MapPin, Instagram, Facebook, Award, Shield, Truck, Users, CheckCircle, Factory } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../imports/WhatsApp_Image_2026-04-26_at_19.15.00.jpeg';
import stoneCoatedTile from '../imports/WhatsApp_Image_2026-04-28_at_14.17.49.jpeg';
import roofingAccessories from '../imports/WhatsApp_Image_2026-04-28_at_14.23.01.jpeg';
import roofingScrews from '../imports/WhatsApp_Image_2026-04-28_at_14.20.23_(1).jpeg';
import tileProfileSheet from '../imports/572738061_720085777770183_995392330592646578_n.jpg';
import customerTestimonial from '../imports/626775389_797195566725870_4826691778013097524_n.jpg';
import decraTiles from '../imports/641697758_813456061766487_4970874504655035091_n.jpg';
import boxProfileSheets from '../imports/images.jpg';
import { ProductDropdown } from './components/ProductDropdown';

export default function App() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Horizon Mabati Factory" className="h-12 md:h-16 lg:h-20" />
            </div>
            <a
              href="https://wa.me/254797407195"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl text-white text-sm md:text-base touch-manipulation"
            >
              <Phone size={18} className="md:w-5 md:h-5" />
              <span className="hidden sm:inline">WhatsApp Us</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative text-white py-16 md:py-24 lg:py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 139, 34, 0.85), rgba(218, 165, 32, 0.75)), url('https://images.unsplash.com/photo-1765419778376-e24f09e2377e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 flex-wrap">
              <Factory size={32} className="md:w-12 md:h-12 text-yellow-300" />
              <span className="bg-yellow-500 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold text-green-900">
                Kenya's Trusted Roofing Manufacturer
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Premium Quality Roofing Solutions for Every Construction Project
            </h2>
            <p className="text-lg md:text-xl text-green-50 mb-3 md:mb-4 leading-relaxed">
              Welcome to Horizon Mabati Factory LTD, your trusted partner in delivering world-class roofing materials across Kenya.
              With years of manufacturing excellence, we specialize in producing high-quality mabati sheets, corrugated iron roofing,
              and stone-coated tiles that stand the test of time.
            </p>
            <p className="text-base md:text-lg text-green-100 mb-6 md:mb-8 leading-relaxed">
              Whether you're building a new home, renovating your property, or working on a large-scale commercial project,
              Horizon Mabati Factory provides the durability, affordability, and aesthetic appeal you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4">
              <a
                href="#products"
                className="bg-yellow-500 hover:bg-yellow-600 text-green-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl text-center text-sm md:text-base touch-manipulation"
              >
                Explore Our Products
              </a>
              <a
                href="#contact"
                className="bg-white text-green-800 hover:bg-green-50 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl text-center text-sm md:text-base touch-manipulation"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">About Horizon Mabati Factory Ltd</h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 md:mb-8"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="text-base md:text-lg text-zinc-700 mb-4 md:mb-6 leading-relaxed">
                  Horizon Mabati Factory LTD has established itself as one of Kenya's leading manufacturers of premium roofing materials.
                  Our state-of-the-art manufacturing facility is equipped with modern machinery and operated by skilled professionals
                  who are dedicated to producing roofing solutions that exceed industry standards.
                </p>
                <p className="text-base md:text-lg text-zinc-700 mb-4 md:mb-6 leading-relaxed">
                  We understand that a roof is more than just protection from the elements—it's an investment in your property's
                  future. That's why we use only the finest raw materials and employ rigorous quality control measures at every
                  stage of production.
                </p>
                <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
                  Our mission is simple: to make quality roofing accessible to everyone across Kenya. We combine competitive
                  pricing with exceptional customer service.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-green-50 p-4 md:p-6 rounded-xl border-2 border-green-200">
                  <Award className="text-yellow-600 mb-2 md:mb-3" size={32} />
                  <h3 className="font-bold text-xl md:text-2xl text-green-800 mb-2">ISO Certified</h3>
                  <p className="text-zinc-600 text-sm md:text-base">International quality standards</p>
                </div>
                <div className="bg-green-50 p-4 md:p-6 rounded-xl border-2 border-green-200">
                  <Users className="text-yellow-600 mb-2 md:mb-3" size={32} />
                  <h3 className="font-bold text-xl md:text-2xl text-green-800 mb-2">10,000+</h3>
                  <p className="text-zinc-600 text-sm md:text-base">Satisfied customers nationwide</p>
                </div>
                <div className="bg-green-50 p-4 md:p-6 rounded-xl border-2 border-green-200">
                  <Truck className="text-yellow-600 mb-2 md:mb-3" size={32} />
                  <h3 className="font-bold text-xl md:text-2xl text-green-800 mb-2">Fast Delivery</h3>
                  <p className="text-zinc-600 text-sm md:text-base">Across all counties in Kenya</p>
                </div>
                <div className="bg-green-50 p-4 md:p-6 rounded-xl border-2 border-green-200">
                  <Shield className="text-yellow-600 mb-2 md:mb-3" size={32} />
                  <h3 className="font-bold text-xl md:text-2xl text-green-800 mb-2">Warranty</h3>
                  <p className="text-zinc-600 text-sm md:text-base">Quality guaranteed products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Premium Roofing Products</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-zinc-700 max-w-3xl mx-auto leading-relaxed">
              At Horizon Mabati Factory, we manufacture a comprehensive range of roofing materials designed to meet diverse
              construction needs. From residential homes to commercial buildings, our products offer the perfect balance of
              quality, durability, and affordability.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Corrugated Sheets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all border-2 border-green-200 hover:border-yellow-400"
            >
              <div className="h-48 md:h-56 overflow-hidden bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1653714448621-4133389d837a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Corrugated Sheets"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3 md:mb-4">Corrugated Sheets</h3>
                <p className="text-sm md:text-base text-zinc-600 mb-4 leading-relaxed">
                  Traditional and reliable corrugated iron sheets that have proven their worth across decades. Perfect for
                  residential and agricultural applications.
                </p>
                <div className="space-y-3">
                  <ProductDropdown
                    title="Gauge Options"
                    options={[
                      '28 Gauge (0.35mm) - Standard',
                      '30 Gauge (0.30mm) - Light Duty',
                      '32 Gauge (0.25mm) - Economy'
                    ]}
                  />
                  <ProductDropdown
                    title="Colors Available"
                    options={[
                      'Blue - Sky Blue',
                      'Red - Bright Red',
                      'Maroon - Wine Red',
                      'Charcoal Grey - Dark Grey',
                      'Green - Olive Green',
                      'Coffee Brown - Chocolate Brown',
                      'Ivory White',
                      'Silver Grey (Galvanized)'
                    ]}
                  />
                  <ProductDropdown
                    title="Sheet Lengths"
                    options={[
                      '1.8m (6 feet)',
                      '2.4m (8 feet)',
                      '3.0m (10 feet)',
                      '3.6m (12 feet)',
                      'Custom Lengths Available'
                    ]}
                  />
                </div>
              </div>
            </motion.div>

            {/* Box Profile Sheets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all border-2 border-green-200 hover:border-yellow-400"
            >
              <div className="h-48 md:h-56 overflow-hidden bg-zinc-100">
                <img
                  src={boxProfileSheets}
                  alt="Box Profile Sheets - Green"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3 md:mb-4">Box Profile Sheets</h3>
                <p className="text-sm md:text-base text-zinc-600 mb-4 leading-relaxed">
                  Modern box profile design offering superior water drainage and structural strength. Ideal for contemporary
                  construction projects.
                </p>
                <div className="space-y-3">
                  <ProductDropdown
                    title="Gauge Options"
                    options={[
                      '28 Gauge (0.35mm) - Standard',
                      '30 Gauge (0.30mm) - Light Duty',
                      '32 Gauge (0.25mm) - Economy'
                    ]}
                  />
                  <ProductDropdown
                    title="Colors Available"
                    options={[
                      'Blue - Ocean Blue',
                      'Green - Forest Green',
                      'Maroon - Wine Red',
                      'Charcoal Grey - Graphite',
                      'Red - Bright Red',
                      'Coffee Brown - Espresso',
                      'Tile Red - Terracotta',
                      'Ivory White',
                      'Silver Grey (Galvanized)'
                    ]}
                  />
                  <ProductDropdown
                    title="Sheet Lengths"
                    options={[
                      '1.8m (6 feet)',
                      '2.4m (8 feet)',
                      '3.0m (10 feet)',
                      '3.6m (12 feet)',
                      'Custom Lengths Available'
                    ]}
                  />
                </div>
              </div>
            </motion.div>

            {/* Tile Profile Sheets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all border-2 border-green-200 hover:border-yellow-400"
            >
              <div className="h-48 md:h-56 overflow-hidden bg-zinc-100">
                <img
                  src={tileProfileSheet}
                  alt="Tile Profile Sheets - Blue"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3 md:mb-4">Tile Profile Sheets</h3>
                <p className="text-sm md:text-base text-zinc-600 mb-4 leading-relaxed">
                  Elegant tile-style roofing sheets including European, Roman, and Versatile profiles. Combines beauty with
                  durability for premium homes.
                </p>
                <div className="space-y-3">
                  <ProductDropdown
                    title="Versatile Tile Profile"
                    options={[
                      'Versatile - Charcoal Grey',
                      'Versatile - Forest Green',
                      'Versatile - Maroon',
                      'Versatile - Coffee Brown',
                      'Versatile - Terracotta Red'
                    ]}
                  />
                  <ProductDropdown
                    title="Roman Tile Profile"
                    options={[
                      'Roman Tile - Maroon',
                      'Roman Tile - Charcoal Grey',
                      'Roman Tile - Coffee Brown',
                      'Roman Tile - Terracotta',
                      'Roman Tile - Forest Green'
                    ]}
                  />
                  <ProductDropdown
                    title="European Tile Profile"
                    options={[
                      'Eurotile - Coffee Brown',
                      'Eurotile - Maroon',
                      'Eurotile - Charcoal Grey',
                      'Eurotile - Terracotta Red',
                      'Eurotile - Olive Green'
                    ]}
                  />
                  <ProductDropdown
                    title="Specifications"
                    options={[
                      'Standard Gauge: 0.35mm (28 Gauge)',
                      'Coverage Width: 1000mm effective',
                      'Standard Lengths: 2.4m, 3.0m, 3.6m',
                      'Custom lengths available on request'
                    ]}
                  />
                </div>
              </div>
            </motion.div>

            {/* Stone Coated Tiles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all border-2 border-green-200 hover:border-yellow-400"
            >
              <div className="h-48 md:h-56 overflow-hidden bg-zinc-100">
                <img
                  src={decraTiles}
                  alt="Decra Stone Coated Tiles - Classic Profile"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3 md:mb-4">Stone Coated Tiles</h3>
                <p className="text-sm md:text-base text-zinc-600 mb-4 leading-relaxed">
                  Premium Decra stone-coated roofing tiles offering exceptional longevity, noise reduction, and elegant
                  appearance for luxury projects. Available in multiple profiles and colors.
                </p>
                <div className="space-y-3">
                  <ProductDropdown
                    title="Classic Profile - Gauge 26"
                    options={[
                      'Classic Tile - Blue (Ocean Blue)',
                      'Classic Tile - Red (Terracotta Red)',
                      'Classic Tile - Charcoal Black',
                      'Classic Tile - Coffee Brown',
                      'Classic Tile - Forest Green',
                      'Classic Tile - Maroon'
                    ]}
                  />
                  <ProductDropdown
                    title="Shingles Profile - Gauge 26"
                    options={[
                      'Shingle - Maroon with Patches',
                      'Shingle - Coffee Brown',
                      'Shingle - Charcoal Black',
                      'Shingle - Forest Green',
                      'Shingle - Terracotta Red'
                    ]}
                  />
                  <ProductDropdown
                    title="Milano Profile - Gauge 26"
                    options={[
                      'Milano - Blue',
                      'Milano - Maroon',
                      'Milano - Coffee Brown',
                      'Milano - Charcoal Black',
                      'Milano - Olive Green'
                    ]}
                  />
                  <ProductDropdown
                    title="Shake Profile - Gauge 26"
                    options={[
                      'Shake - Blue',
                      'Shake - Maroon',
                      'Shake - Coffee Brown',
                      'Shake - Charcoal Black',
                      'Shake - Forest Green'
                    ]}
                  />
                  <ProductDropdown
                    title="Pricing & Specifications"
                    options={[
                      'KSH 610 per piece (Standard retail)',
                      'Gauge 26 (0.45mm thickness)',
                      '50+ year lifespan',
                      'Stone coating warranty: 10 years',
                      'Bulk pricing available on request'
                    ]}
                  />
                </div>
              </div>
            </motion.div>

            {/* Roofing Accessories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all border-2 border-green-200 hover:border-yellow-400"
            >
              <div className="h-48 md:h-56 overflow-hidden bg-zinc-100">
                <img
                  src={roofingAccessories}
                  alt="Roofing Accessories - Ridges and Caps"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3 md:mb-4">Roofing Accessories</h3>
                <p className="text-sm md:text-base text-zinc-600 mb-4 leading-relaxed">
                  Complete range of essential roofing accessories to ensure perfect installation and long-lasting protection
                  for your roof. All accessories available in matching colors.
                </p>
                <div className="space-y-3">
                  <ProductDropdown
                    title="Ridge Caps & Tops"
                    options={[
                      'Standard Ridge Caps - Box Profile',
                      'Standard Ridge Caps - Corrugated',
                      'Standard Ridge Caps - Tile Profile',
                      'Roll Top Ridge Caps',
                      'Hip Ridge Caps',
                      'Barge Ridge Caps'
                    ]}
                  />
                  <ProductDropdown
                    title="Valley & Flashing"
                    options={[
                      'Valley Caps - Standard',
                      'Valley Caps - Box Profile',
                      'End Caps',
                      'Verge Trim',
                      'Flashing Sheets'
                    ]}
                  />
                  <ProductDropdown
                    title="Fasteners & Fixings"
                    options={[
                      'Self-Tapping Screws with Rubber Washers - Blue',
                      'Self-Tapping Screws with Rubber Washers - Red',
                      'Self-Tapping Screws with Rubber Washers - Green',
                      'Self-Tapping Screws with Rubber Washers - Brown',
                      'Self-Tapping Screws with Rubber Washers - Grey',
                      'Roofing Nails - Galvanized (25mm, 50mm, 75mm)',
                      'Umbrella Head Nails with Washers',
                      'Tek Screws - Self-Drilling (Hex Head)',
                      'Color-Matched Screw Sets (Per kg)',
                      'Complete Fixings Kit (Assorted sizes)'
                    ]}
                  />
                </div>
              </div>
            </motion.div>

            {/* Gutters & Accessories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all border-2 border-green-200 hover:border-yellow-400"
            >
              <div className="h-48 md:h-56 overflow-hidden bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1762363145055-3d75459401e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Gutters"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3 md:mb-4">Gutters & Accessories</h3>
                <p className="text-sm md:text-base text-zinc-600 mb-4 leading-relaxed">
                  High-quality PVC guttering systems with all necessary fittings for effective rainwater management and
                  building protection. UV stabilized for long-lasting performance.
                </p>
                <div className="space-y-3">
                  <ProductDropdown
                    title="Gutter Profiles & Colors"
                    options={[
                      'Square Line Gutters - White',
                      'Square Line Gutters - Brown',
                      'Half Round Gutters - White',
                      'Half Round Gutters - Brown',
                      'Ogee Gutters - White',
                      'Ogee Gutters - Brown'
                    ]}
                  />
                  <ProductDropdown
                    title="Gutter Sizes"
                    options={[
                      '4" (100mm) - Standard Residential',
                      '5" (125mm) - Large Residential',
                      '6" (150mm) - Commercial Grade'
                    ]}
                  />
                  <ProductDropdown
                    title="Downpipes & Connectors"
                    options={[
                      'Round Downpipes - 68mm (White/Brown)',
                      'Square Downpipes - 75mm (White/Brown)',
                      'Pipe Clips & Brackets',
                      'Pipe Bends - 87.5° & 112.5°',
                      'Pipe Offset Bends',
                      'Downpipe Shoes'
                    ]}
                  />
                  <ProductDropdown
                    title="Gutter Fittings"
                    options={[
                      'Gutter End Caps - Left & Right',
                      'Gutter Corner Joints - 90°',
                      'Gutter Union Joints',
                      'Gutter Running Outlets',
                      'Stop End Outlets',
                      'Gutter Support Brackets',
                      'Fascia Brackets'
                    ]}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Complete Package CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-600 via-green-700 to-yellow-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Complete Roofing Solutions Package</h3>
            <p className="text-green-50 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Purchase your mabati sheets, ridge caps, gutters, and fasteners together and save! We offer special bundle pricing
              for complete roofing packages. Our experts will calculate exactly what you need based on your roof dimensions,
              ensuring you have all materials for a perfect installation.
            </p>
            <a
              href="https://wa.me/254797407195?text=Hello%20Horizon%20Mabati,%20I'm%20interested%20in%20a%20complete%20roofing%20package"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-green-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl text-sm md:text-base touch-manipulation"
            >
              <Phone size={20} />
              Request Complete Package Quote
            </a>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-12 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Happy Clients, Quality Projects</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-zinc-700 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. See what our satisfied customers have to say about Horizon Mabati Factory's
              products and services. Quality that speaks for itself!
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8 md:mb-12"
            >
              <img
                src={customerTestimonial}
                alt="Happy Client - Box Profile Tile Project in Kajiado"
                className="w-full h-auto"
              />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-5 md:p-6 rounded-xl shadow-lg border-2 border-green-200"
              >
                <div className="text-yellow-500 text-3xl md:text-4xl mb-3 md:mb-4">★★★★★</div>
                <p className="text-sm md:text-base text-zinc-700 italic mb-3 md:mb-4">
                  "I ordered a red matte Box Profile Tile and got exactly that quality, clean finish, no surprises."
                </p>
                <p className="font-semibold text-green-800">Martin Ole Backson</p>
                <p className="text-sm text-zinc-600">Kajiado</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-5 md:p-6 rounded-xl shadow-lg border-2 border-green-200"
              >
                <div className="text-yellow-500 text-3xl md:text-4xl mb-3 md:mb-4">★★★★★</div>
                <p className="text-sm md:text-base text-zinc-700 italic mb-3 md:mb-4">
                  "Best roofing supplier in Kenya! Fast delivery, excellent quality, and very professional service."
                </p>
                <p className="font-semibold text-green-800">Sarah Mwangi</p>
                <p className="text-sm text-zinc-600">Nairobi</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-5 md:p-6 rounded-xl shadow-lg border-2 border-green-200"
              >
                <div className="text-yellow-500 text-3xl md:text-4xl mb-3 md:mb-4">★★★★★</div>
                <p className="text-sm md:text-base text-zinc-700 italic mb-3 md:mb-4">
                  "The stone-coated tiles are worth every shilling. Beautiful finish and excellent weather protection."
                </p>
                <p className="font-semibold text-green-800">John Kamau</p>
                <p className="text-sm text-zinc-600">Kiambu</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Why Choose Horizon Mabati Factory?</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-zinc-700 max-w-3xl mx-auto leading-relaxed">
              With countless roofing suppliers in Kenya, what makes Horizon Mabati Factory stand out? Here are the key reasons
              why thousands of builders, contractors, and homeowners trust us with their roofing needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                icon: Award,
                title: "Uncompromising Quality",
                desc: "Every sheet we manufacture undergoes strict ISO-certified quality control processes. We source only premium-grade raw materials and employ advanced manufacturing techniques to ensure our products meet and exceed international standards.",
                color: "from-yellow-500 to-green-600"
              },
              {
                icon: Truck,
                title: "Nationwide Fast Delivery",
                desc: "We understand that time is money in construction. Our efficient logistics network ensures prompt delivery to all 47 counties across Kenya. Whether you're in Nairobi, Mombasa, Kisumu, or any rural area, we guarantee timely delivery.",
                color: "from-yellow-500 to-green-600"
              },
              {
                icon: Users,
                title: "Expert Technical Support",
                desc: "Our team of experienced roofing specialists is always ready to help. From product selection to installation guidance, we provide comprehensive technical support. We help you calculate the exact quantities you need and recommend the best products.",
                color: "from-yellow-500 to-green-600"
              },
              {
                icon: Shield,
                title: "Best Value Pricing",
                desc: "Quality doesn't have to break the bank. By manufacturing directly and eliminating middlemen, we offer factory-direct prices that give you the best value for your investment. Plus, our products' superior durability means lower long-term costs.",
                color: "from-yellow-500 to-green-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-green-50 p-6 md:p-8 rounded-xl text-center hover:shadow-2xl transition-all border-2 border-green-200 hover:border-yellow-500"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${item.color} rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-lg`}>
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-lg md:text-xl text-green-800 mb-3 md:mb-4">{item.title}</h3>
                <p className="text-sm md:text-base text-zinc-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-700 to-yellow-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">Our Commitment to Excellence</h3>
              <p className="text-base md:text-lg text-green-50 mb-6 md:mb-8 leading-relaxed text-center">
                At Horizon Mabati Factory, excellence is not just a goal—it's our standard. We believe that every Kenyan
                deserves access to world-class roofing materials that protect their investments and stand the test of time.
              </p>
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">100%</div>
                  <div className="text-sm md:text-base text-green-100">Quality Guaranteed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">24/7</div>
                  <div className="text-sm md:text-base text-green-100">Customer Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">10+</div>
                  <div className="text-sm md:text-base text-green-100">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Get In Touch With Us</h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4 md:mb-6"></div>
              <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
                Ready to start your roofing project? Our friendly and knowledgeable team is here to assist you every step of the way.
                Whether you need a product recommendation, pricing information, or technical advice, we're just a message or call away.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-4">Contact Information</h3>
                <p className="text-sm md:text-base text-zinc-700 mb-6 leading-relaxed">
                  Reach out to us through any of these channels. Our customer service team is available to answer your questions,
                  provide quotes, and schedule deliveries.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/254797407195"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-green-50 rounded-xl hover:bg-green-100 transition-all group border-2 border-green-200 hover:border-green-400 shadow-md hover:shadow-lg touch-manipulation"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                      <Phone className="text-white" size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800 text-base md:text-lg">WhatsApp / Call Us</p>
                      <p className="text-yellow-600 font-medium text-sm md:text-base">0797 407 195</p>
                      <p className="text-zinc-600 text-xs md:text-sm">Available 7 days a week</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl border-2 border-green-200 shadow-md">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-yellow-500 to-green-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <Mail className="text-white" size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800 text-base md:text-lg">Email Us</p>
                      <p className="text-yellow-600 font-medium text-sm md:text-base">info@horizonmabati.co.ke</p>
                      <p className="text-zinc-600 text-xs md:text-sm">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-white rounded-xl border-2 border-green-200 shadow-md">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-yellow-500 to-green-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <MapPin className="text-white" size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800 text-base md:text-lg">Visit Our Factory</p>
                      <p className="text-yellow-600 font-medium text-sm md:text-base">Nairobi, Kenya</p>
                      <p className="text-zinc-600 text-xs md:text-sm">Factory tours available by appointment</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 p-5 md:p-6 bg-gradient-to-r from-green-700 to-yellow-600 rounded-xl text-white">
                  <h4 className="font-bold text-base md:text-lg mb-3">Business Hours</h4>
                  <div className="space-y-2 text-sm md:text-base text-green-50">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: 10:00 AM - 3:00 PM</p>
                    <p className="text-xs md:text-sm text-yellow-300 mt-3">* Emergency orders and inquiries handled 24/7 via WhatsApp</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-4">Follow Us on Social Media</h3>
                <p className="text-sm md:text-base text-zinc-700 mb-6 leading-relaxed">
                  Stay connected with Horizon Mabati Factory on social media for the latest product updates, special promotions,
                  installation tips, customer testimonials, and industry news.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/ltdhorizonmabatifactory?igsh=aHVzbzZjaG04MTFh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all text-white group shadow-lg hover:shadow-xl touch-manipulation"
                  >
                    <Instagram size={28} className="group-hover:scale-110 transition-transform flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-base md:text-lg">Follow us on Instagram</p>
                      <p className="text-xs md:text-sm opacity-90">@ltdhorizonmabatifactory</p>
                      <p className="text-xs opacity-75 mt-1">See our latest projects & products</p>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/HorizonMabatiFactoryLTD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-blue-600 rounded-xl hover:bg-blue-700 transition-all text-white group shadow-lg hover:shadow-xl touch-manipulation"
                  >
                    <Facebook size={28} className="group-hover:scale-110 transition-transform flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-base md:text-lg">Like our Facebook Page</p>
                      <p className="text-xs md:text-sm opacity-90">Horizon Mabati Factory LTD</p>
                      <p className="text-xs opacity-75 mt-1">Customer reviews & success stories</p>
                    </div>
                  </a>

                  <a
                    href="https://www.tiktok.com/@horizon.mabati?_r=1&_t=ZS-95rgqZzP1pE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-all text-white group shadow-lg hover:shadow-xl touch-manipulation"
                  >
                    <div className="w-7 h-7 group-hover:scale-110 transition-transform flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-base md:text-lg">Watch on TikTok</p>
                      <p className="text-xs md:text-sm opacity-90">@horizon.mabati</p>
                      <p className="text-xs opacity-75 mt-1">Behind-the-scenes & installation guides</p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 md:mt-8 p-5 md:p-6 bg-white rounded-xl border-2 border-green-200">
                  <h4 className="font-bold text-green-800 text-base md:text-lg mb-3">Request a Free Quote</h4>
                  <p className="text-sm md:text-base text-zinc-700 mb-4 leading-relaxed">
                    Get an instant quote for your roofing project. Contact us via WhatsApp with your project details including
                    roof dimensions, preferred product type, and location. We'll provide a detailed quote within hours!
                  </p>
                  <a
                    href="https://wa.me/254797407195?text=Hello%20Horizon%20Mabati,%20I%20would%20like%20to%20request%20a%20quote%20for%20my%20roofing%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg text-sm md:text-base touch-manipulation"
                  >
                    Request Quote via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-800 to-yellow-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="sm:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">HORIZON</h3>
              <p className="text-xs md:text-sm text-green-100 mb-4">Mabati Factory LTD</p>
              <p className="text-sm md:text-base text-green-100 leading-relaxed mb-4 md:mb-6">
                Kenya's trusted manufacturer of premium roofing materials. We combine quality craftsmanship with competitive
                pricing to deliver roofing solutions that protect your investments for decades to come.
              </p>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="https://www.instagram.com/ltdhorizonmabatifactory?igsh=aHVzbzZjaG04MTFh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-yellow-600 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all hover:scale-110 touch-manipulation"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/HorizonMabatiFactoryLTD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-yellow-600 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all hover:scale-110 touch-manipulation"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://wa.me/254797407195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-yellow-600 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all hover:scale-110 touch-manipulation"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-base md:text-lg mb-4 text-yellow-300">Quick Links</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-green-100">
                <li><a href="#products" className="hover:text-white transition-colors touch-manipulation">Our Products</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors touch-manipulation">Contact Us</a></li>
                <li><a href="https://wa.me/254797407195" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors touch-manipulation">Request Quote</a></li>
                <li><a href="#" className="hover:text-white transition-colors touch-manipulation">About Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base md:text-lg mb-4 text-yellow-300">Our Products</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-green-100">
                <li>Corrugated Sheets</li>
                <li>Box Profile Sheets</li>
                <li>Tile Profile Sheets</li>
                <li>Stone Coated Tiles</li>
                <li>Roofing Accessories</li>
                <li>Gutters & Accessories</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-yellow-600 pt-6 md:pt-8 text-center">
            <p className="text-yellow-300 font-semibold mb-2 text-sm md:text-base">Building Excellence, Roofing Dreams</p>
            <p className="text-green-100 text-xs md:text-sm">
              © 2026 Horizon Mabati Factory LTD. All rights reserved. Proudly serving Kenya.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
