import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TreatmentsPage = () => {
  const treatments = [
    {
      title: 'Teeth Cleaning & Scaling',
      description: 'At Sakthi Dental Clinic, we offer advanced, non-surgical gum care using modern LASER technology for precise and effective treatment. Whether you are dealing with early signs of gum disease or a more advanced condition, our skilled professionals ensure thorough cleaning to restore gum health.',
      image: 'https://i.postimg.cc/9fX4LLjt/Teeth-Cleaning.png',
      benefits: ['Prevents gum disease', 'Removes bad breath', 'Brightens teeth', 'Maintains oral health']
    },
    {
      title: 'Tooth Filling',
      description: 'At Sakthi Dental Clinic, we specialize in restoring smiles through expert tooth filling services. Whether tooth damage is caused by cavities, trauma, or wear from habits like teeth grinding or nail-biting, our team uses high-quality materials and the latest techniques to repair and protect your teeth.',
      image: 'https://i.postimg.cc/QxP0GWMT/Tooth-Filling.jpg',
      benefits: ['Stops decay progression', 'Restores tooth structure', 'Natural appearance', 'Long-lasting results']
    },
    {
      title: 'Tooth Extraction',
      description: 'When a tooth is beyond repair, Sakthi Dental Clinic ensures that the extraction process is handled with the utmost care and comfort. We prioritize creating a stress-free environment, explaining each step to our patients.',
      image: 'https://i.postimg.cc/sDBbhzQ5/Teeth-Extraction.png',
      benefits: ['Pain relief', 'Prevents infection', 'Quick recovery', 'Minimal discomfort']
    },
    {
      title: 'Artificial Complete Denture',
      description: 'At Sakthi Dental Clinic, we craft high-quality complete dentures to restore both function and aesthetics for patients with missing teeth. Our dentures are designed with precision using durable materials, providing a natural look and a comfortable fit.',
      image: 'https://i.postimg.cc/7LWXnGT9/Artificial-Complete-Denture.png',
      benefits: ['Restores chewing ability', 'Improves speech', 'Natural appearance', 'Boosts confidence']
    },
    {
      title: 'Dental Implants',
      description: 'Dental implants at Sakthi Dental Clinic offer a modern and reliable solution for replacing missing teeth. Using biocompatible materials like titanium, we securely place artificial roots into the jawbone, creating a stable foundation for prosthetic teeth.',
      image: 'https://i.postimg.cc/6qLmc6KQ/Impants.png',
      benefits: ['Permanent solution', 'Natural feel', 'Preserves jawbone', 'High success rate']
    },
    {
      title: 'Laser Dentistry',
      description: 'At Sakthi Dental Clinic, we utilize advanced laser technology to perform precise, minimally invasive dental treatments. From soft tissue surgeries to gum care, laser procedures offer faster healing, reduced discomfort, and enhanced accuracy.',
      image: 'https://i.postimg.cc/fbmjm2Dz/Laser-Surgery.png',
      benefits: ['Painless procedures', 'Faster healing', 'Minimal bleeding', 'Precise treatment']
    },
    {
      title: 'Root Canal Therapy',
      description: 'When tooth infections reach deep into the pulp, root canal treatment becomes essential. At Sakthi Dental Clinic, we carefully remove infected tissue, clean the area thoroughly, and seal the tooth to prevent future issues. ',
      image: 'https://i.postimg.cc/x10ct6vj/Root-Canal-Treatment.png',
      benefits: ['Saves natural tooth', 'Eliminates pain', 'Prevents extraction', 'Long-term solution']
    },
    {
      title: 'Wisdom Tooth Extraction',
      description: 'If impacted or problematic, wisdom teeth can cause discomfort and oral health risks. At Sakthi Dental Clinic, we specialize in gentle and effective wisdom tooth removal, using modern techniques and anesthesia options to ensure a smooth, pain-free experience.',
      image: 'https://i.postimg.cc/sDBbhzQ5/Teeth-Extraction.png',
      benefits: ['Prevents crowding', 'Reduces pain', 'Prevents infection', 'Improves oral hygiene']
    },
    {
      title: 'Fixed Partial Denture (Bridge)',
      description: 'Our expertly crafted fixed partial dentures offer a secure solution for replacing missing teeth by anchoring prosthetic teeth to adjacent natural teeth or implants. At Sakthi Dental Clinic, we focus on custom-made dental bridges that restore your smile’s appearance while improving chewing function and maintaining oral stability.',
      image: 'https://i.postimg.cc/Vkpd9nFD/Fixed-Partial-Denture.png',
      benefits: ['Permanent fixture', 'Natural appearance', 'Restores function', 'Easy maintenance']
    },
    {
      title: 'Teeth Whitening (Bleaching)',
      description: 'Brighten your smile with professional teeth whitening services at Sakthi Dental Clinic. We treat both external and internal stains, using safe bleaching agents to lighten your teeth by several shades.',
      image: 'https://i.postimg.cc/X7MWgxMZ/Bleaching.png',
      benefits: ['Immediate results', 'Safe procedure', 'Boosts confidence', 'Long-lasting effects']
    },
    {
      title: 'Veneers',
      description: 'Transform your smile with dental veneers—thin, custom-made shells designed to cover imperfections such as chips, gaps, or discoloration. At Sakthi Dental Clinic, we offer high-quality veneers that enhance your teeth’s appearance, giving you a flawless and natural-looking smile.',
      image: 'https://i.postimg.cc/ZRhPc1L7/Veneer-Treatment.jpg',
      benefits: ['Perfect smile', 'Stain resistant', 'Natural appearance', 'Minimal tooth reduction']
    },
    {
      title: 'Pediatric Dentistry',
      description: 'At Sakthi Dental Clinic, we provide gentle and comprehensive dental care for children. Our friendly team creates a welcoming environment, ensuring young patients feel safe and comfortable during their visits.',
      image: 'https://i.postimg.cc/VNTsP8hg/Pediatric-dentistry.png',
      benefits: ['Child-friendly approach', 'Preventive care', 'Early intervention', 'Positive experience']
    },
    {
      title: 'Flap Surgery',
      description: 'For advanced gum disease, flap surgery may be necessary. Our skilled team at Sakthi Dental Clinic performs this procedure by lifting the gum tissue to remove deep-seated plaque and bacteria, then repositioning it for optimal healing. This treatment helps prevent further periodontal issues and supports gum health.',
      image: 'https://i.postimg.cc/HLbvd0ZN/Flap-surgery.png',
      benefits: ['Treats gum disease', 'Saves teeth', 'Improves gum health', 'Prevents tooth loss']
    },
    {
      title: 'Orthodontic Braces',
      description: 'Correct misaligned teeth with customized orthodontic treatments at Sakthi Dental Clinic. We offer a variety of braces—metal, ceramic, or lingual—to suit your preferences. Our goal is to achieve improved alignment, better bite function, and a confident, harmonious smile.',
      image: 'https://i.postimg.cc/P5smhggt/Orthodonic-Treatment.png',
      benefits: ['Straight teeth', 'Better bite', 'Improved hygiene', 'Enhanced confidence']
    },
    {
      title: 'Clear Aligners',
      description: 'For a discreet alternative to traditional braces, Sakthi Dental Clinic offers clear aligners. These transparent, removable trays gradually shift your teeth into perfect alignment, providing comfort and flexibility throughout your orthodontic journey.',
      image: 'https://images.pexels.com/photos/6812554/pexels-photo-6812554.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      benefits: ['Nearly invisible', 'Removable', 'Comfortable', 'Easy maintenance']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Dental Treatments
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive dental care services using advanced technology and proven techniques 
              to ensure optimal oral health for patients of all ages.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-2/3">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{treatment.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{treatment.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {treatment.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      to="/contact"
                      className="bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors flex items-center space-x-2 group inline-flex"
                    >
                      <span>Book Consultation</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-sky-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Our experienced team is here to help you achieve optimal oral health 
            with personalized treatment plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Appointment
            </Link>
            <Link 
              to="/contact"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreatmentsPage;