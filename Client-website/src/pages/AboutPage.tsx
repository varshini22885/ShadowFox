import React from 'react';
import { Award, Users, Heart, Zap } from 'lucide-react';

const AboutPage = () => {
  const doctors = [
    {
      name: 'Dr. Anupriya',
      specialty: 'Founder & Chief Dentist',
      experience: '20+ years'
    },
    {
      name: 'Dr. Ananya Iyer',
      specialty: 'Prosthodontist',
      experience: '8+ years'
    },
    {
      name: 'Dr. Meera Subramanian',
      specialty: 'Endodontist',
      experience: '10+ years'
    },
    {
      name: 'Dr. Arvind Kumar',
      specialty: 'Dental Surgeon',
      experience: '12+ years'
    },
    {
      name: 'Dr. Sneha N',
      specialty: 'Orthodontist',
      experience: '7+ years'
    },
    {
      name: 'Dr. Srinivas Rohit Ramanujam',
      specialty: 'Implantologist',
      experience: '15+ years'
    },
    {
      name: 'Dr. Balu',
      specialty: 'Laser Surgeon',
      experience: '6+ years'
    },
    {
      name: 'Dr. Vikram Raj Kishore',
      specialty: 'Aligners Partner',
      experience: '9+ years'
    },
    {
      name: 'Dr. Ajay Kumar',
      specialty: 'Oral & Maxillofacial Surgeon',
      experience: '11+ years'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Sakthi Dental Clinic
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated to providing exceptional dental care for women, children, and families 
              in Hosur with compassion, expertise, and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Dr. Anupriya Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Get to Know Dr. Anupriya
              </h2>
              <p className="text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed">Your Trusted Partner in Dental Care</p>
              <p className="text-lg text-gray-600 leading-relaxed">
               Bringing over 20 years of expertise, Dr. Anupriya stands as a leading figure in modern 
dentistry at Hosur. A proud alumna of the renowned Government Dental College, she 
began her professional journey after graduating in 2000. Her passion for delivering 
exceptional dental care was further nurtured during six impactful years at Mathura Clinic, 
where she refined her clinical skills and deepened her commitment to patient wellbeing. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a clear vision — to make high-quality dental care accessible to all. Her dedication extends beyond private 
practice, reflected in her long-standing service with the Primary Health Center at 
Chandara Hospital, where she has been a trusted dental consultant for over a decade.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and wellbeing. Our clinic blends advanced dental technology with a warm, patient-friendly 
environment to ensure every visit is comfortable and stress-free. From routine check-ups 
to specialized treatments, we prioritize personalized care tailored to your unique dental 
needs. 

              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-sky-50 rounded-lg">
                  <p className="text-2xl font-bold text-sky-600">20+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <p className="text-2xl font-bold text-pink-600">5000+</p>
                  <p className="text-gray-600">Happy Patients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.postimg.cc/dt9tgq1G/Dr-Anupriya.jpg" 
                alt="Dr. Anupriya - Founder & Chief Dentist" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading dental care provider in Hosur, recognized for our 
                excellence in patient care, innovative treatments, and commitment to 
                improving the oral health and overall well-being of our community. We 
                envision a future where every family has access to compassionate, 
                high-quality dental care.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide comprehensive, personalized dental care with a focus on 
                prevention, education, and treatment excellence. We are committed to 
                creating a comfortable, safe environment where patients of all ages 
                feel valued and receive the highest standard of dental care using 
                advanced technology and evidence-based practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of qualified specialists brings together years of experience 
              and expertise to provide comprehensive dental care for all your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-sky-100 to-pink-100 flex items-center justify-center">
                  <Users className="h-24 w-24 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-sky-600 font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm">{doctor.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-sky-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              These values guide everything we do at Sakthi Dental Clinic
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-sky-100">Treating every patient with kindness and understanding</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-sky-100">Striving for the highest standards in dental care</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-sky-100">Honest, transparent communication with all patients</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-sky-100">Embracing latest technology for better outcomes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;