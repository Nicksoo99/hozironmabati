import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Award, Shield, Truck, Users, CheckCircle, Factory } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../imports/logo.jpeg';
import boxProfileSheets from '../imports/Box_profile.jpeg';
import decraTiles from '../imports/stone_coated.jpeg';
import roofingAccessories from '../imports/accessories.jpeg';
import tileProfileSheet from '../imports/eurotile.jpeg';
import customerTestimonial from '../imports/Happy_client.jpeg';
import paymentDetails from '../imports/payment_details.jpeg';
import { ProductDropdown } from './components/ProductDropdown';

export default function App() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
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
                    id="corrugated-gauge"
                    title="Gauge Options"
                    options={[
                      '28 Gauge (0.35mm) - Standard',
                      '30 Gauge (0.30mm) - Light Duty',
                      '32 Gauge (0.25mm) - Economy'
                    ]}
                    isOpen={openDropdown === 'corrugated-gauge'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="corrugated-colors"
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
                    isOpen={openDropdown === 'corrugated-colors'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="corrugated-lengths"
                    title="Sheet Lengths"
                    options={[
                      '1.8m (6 feet)',
                      '2.4m (8 feet)',
                      '3.0m (10 feet)',
                      '3.6m (12 feet)',
                      'Custom Lengths Available'
                    ]}
                    isOpen={openDropdown === 'corrugated-lengths'}
                    onToggle={handleDropdownToggle}
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
                    id="box-gauge"
                    title="Gauge Options"
                    options={[
                      '28 Gauge (0.35mm) - Standard',
                      '30 Gauge (0.30mm) - Light Duty',
                      '32 Gauge (0.25mm) - Economy'
                    ]}
                    isOpen={openDropdown === 'box-gauge'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="box-colors"
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
                    isOpen={openDropdown === 'box-colors'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="box-lengths"
                    title="Sheet Lengths"
                    options={[
                      '1.8m (6 feet)',
                      '2.4m (8 feet)',
                      '3.0m (10 feet)',
                      '3.6m (12 feet)',
                      'Custom Lengths Available'
                    ]}
                    isOpen={openDropdown === 'box-lengths'}
                    onToggle={handleDropdownToggle}
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
                    id="tile-versatile"
                    title="Versatile Tile Profile"
                    options={[
                      'Versatile - Charcoal Grey',
                      'Versatile - Forest Green',
                      'Versatile - Maroon',
                      'Versatile - Coffee Brown',
                      'Versatile - Terracotta Red'
                    ]}
                    isOpen={openDropdown === 'tile-versatile'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="tile-roman"
                    title="Roman Tile Profile"
                    options={[
                      'Roman Tile - Maroon',
                      'Roman Tile - Charcoal Grey',
                      'Roman Tile - Coffee Brown',
                      'Roman Tile - Terracotta',
                      'Roman Tile - Forest Green'
                    ]}
                    isOpen={openDropdown === 'tile-roman'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="tile-european"
                    title="European Tile Profile"
                    options={[
                      'Eurotile - Coffee Brown',
                      'Eurotile - Maroon',
                      'Eurotile - Charcoal Grey',
                      'Eurotile - Terracotta Red',
                      'Eurotile - Olive Green'
                    ]}
                    isOpen={openDropdown === 'tile-european'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="tile-specs"
                    title="Specifications"
                    options={[
                      'Standard Gauge: 0.35mm (28 Gauge)',
                      'Coverage Width: 1000mm effective',
                      'Standard Lengths: 2.4m, 3.0m, 3.6m',
                      'Custom lengths available on request'
                    ]}
                    isOpen={openDropdown === 'tile-specs'}
                    onToggle={handleDropdownToggle}
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
                    id="stone-classic"
                    title="Classic Profile - Gauge 26"
                    options={[
                      'Classic Tile - Blue (Ocean Blue)',
                      'Classic Tile - Red (Terracotta Red)',
                      'Classic Tile - Charcoal Black',
                      'Classic Tile - Coffee Brown',
                      'Classic Tile - Forest Green',
                      'Classic Tile - Maroon'
                    ]}
                    isOpen={openDropdown === 'stone-classic'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="stone-shingles"
                    title="Shingles Profile - Gauge 26"
                    options={[
                      'Shingle - Maroon with Patches',
                      'Shingle - Coffee Brown',
                      'Shingle - Charcoal Black',
                      'Shingle - Forest Green',
                      'Shingle - Terracotta Red'
                    ]}
                    isOpen={openDropdown === 'stone-shingles'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="stone-milano"
                    title="Milano Profile - Gauge 26"
                    options={[
                      'Milano - Blue',
                      'Milano - Maroon',
                      'Milano - Coffee Brown',
                      'Milano - Charcoal Black',
                      'Milano - Olive Green'
                    ]}
                    isOpen={openDropdown === 'stone-milano'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="stone-shake"
                    title="Shake Profile - Gauge 26"
                    options={[
                      'Shake - Blue',
                      'Shake - Maroon',
                      'Shake - Coffee Brown',
                      'Shake - Charcoal Black',
                      'Shake - Forest Green'
                    ]}
                    isOpen={openDropdown === 'stone-shake'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="stone-pricing"
                    title="Pricing & Specifications"
                    options={[
                      'KSH 610 per piece (Standard retail)',
                      'Gauge 26 (0.45mm thickness)',
                      '50+ year lifespan',
                      'Stone coating warranty: 10 years',
                      'Bulk pricing available on request'
                    ]}
                    isOpen={openDropdown === 'stone-pricing'}
                    onToggle={handleDropdownToggle}
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
                    id="accessories-ridge"
                    title="Ridge Caps & Tops"
                    options={[
                      'Standard Ridge Caps - Box Profile',
                      'Standard Ridge Caps - Corrugated',
                      'Standard Ridge Caps - Tile Profile',
                      'Roll Top Ridge Caps',
                      'Hip Ridge Caps',
                      'Barge Ridge Caps'
                    ]}
                    isOpen={openDropdown === 'accessories-ridge'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="accessories-valley"
                    title="Valley & Flashing"
                    options={[
                      'Valley Caps - Standard',
                      'Valley Caps - Box Profile',
                      'End Caps',
                      'Verge Trim',
                      'Flashing Sheets'
                    ]}
                    isOpen={openDropdown === 'accessories-valley'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="accessories-fasteners"
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
                    isOpen={openDropdown === 'accessories-fasteners'}
                    onToggle={handleDropdownToggle}
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
                    id="gutters-profiles"
                    title="Gutter Profiles & Colors"
                    options={[
                      'Square Line Gutters - White',
                      'Square Line Gutters - Brown',
                      'Half Round Gutters - White',
                      'Half Round Gutters - Brown',
                      'Ogee Gutters - White',
                      'Ogee Gutters - Brown'
                    ]}
                    isOpen={openDropdown === 'gutters-profiles'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="gutters-sizes"
                    title="Gutter Sizes"
                    options={[
                      '4" (100mm) - Standard Residential',
                      '5" (125mm) - Large Residential',
                      '6" (150mm) - Commercial Grade'
                    ]}
                    isOpen={openDropdown === 'gutters-sizes'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="gutters-downpipes"
                    title="Downpipes & Connectors"
                    options={[
                      'Round Downpipes - 68mm (White/Brown)',
                      'Square Downpipes - 75mm (White/Brown)',
                      'Pipe Clips & Brackets',
                      'Pipe Bends - 87.5° & 112.5°',
                      'Pipe Offset Bends',
                      'Downpipe Shoes'
                    ]}
                    isOpen={openDropdown === 'gutters-downpipes'}
                    onToggle={handleDropdownToggle}
                  />
                  <ProductDropdown
                    id="gutters-fittings"
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
                    isOpen={openDropdown === 'gutters-fittings'}
                    onToggle={handleDropdownToggle}
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

      {/* Why Choose Us - rest of the app - Contact - Footer */}
      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Get In Touch With Us</h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4 md:mb-6"></div>
              <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
                Ready to start your roofing project? Contact us via WhatsApp at 0797407195 for quotes and inquiries!
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://wa.me/254797407195"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl text-lg touch-manipulation"
              >
                <Phone size={24} />
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-800 to-yellow-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-lg p-3 shadow-xl inline-block">
                <h4 className="text-green-800 font-bold text-sm mb-2">Payment Details</h4>
                <img
                  src={paymentDetails}
                  alt="Payment Details"
                  className="w-48 md:w-56 h-auto rounded"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-right">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">HORIZON Mabati Factory LTD</h3>
              <p className="text-green-100 mb-4">Building Excellence, Roofing Dreams</p>
              <div className="flex justify-center md:justify-end gap-3 mb-4">
                <a href="https://www.instagram.com/ltdhorizonmabatifactory?igsh=aHVzbzZjaG04MTFh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-yellow-600 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all hover:scale-110 touch-manipulation">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/HorizonMabatiFactoryLTD" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-yellow-600 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all hover:scale-110 touch-manipulation">
                  <Facebook size={20} />
                </a>
                <a href="https://wa.me/254797407195" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-yellow-600 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all hover:scale-110 touch-manipulation">
                  <Phone size={20} />
                </a>
              </div>
              <p className="text-green-100 text-xs">© 2026 Horizon Mabati Factory LTD. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
