import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Heart, Zap, ChevronLeft, ChevronRight, Car, Armchair as Wheelchair, Stethoscope, MapPin, Phone } from 'lucide-react';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      title: 'Teeth Cleaning & Scaling',
      description: 'Professional cleaning to maintain healthy gums and teeth',
      image: 'https://i.postimg.cc/9fX4LLjt/Teeth-Cleaning.png'
    },
    {
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth with natural appearance',
      image: 'https://i.postimg.cc/6qLmc6KQ/Impants.png'
    },
    {
      title: 'Root Canal Therapy',
      description: 'Advanced treatment to save infected or damaged teeth',
      image: 'https://i.postimg.cc/x10ct6vj/Root-Canal-Treatment.png'
    },
    {
      title: 'Orthodontic Braces',
      description: 'Straighten teeth and improve bite alignment',
      image: 'https://i.postimg.cc/P5smhggt/Orthodonic-Treatment.png'
    },
    {
      title: 'Teeth Whitening',
      description: 'Professional bleaching for a brighter, whiter smile',
      image: 'https://i.postimg.cc/X7MWgxMZ/Bleaching.png'
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children and adolescents',
      image: 'https://i.postimg.cc/VNTsP8hg/Pediatric-dentistry.png'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      text: 'Dr. Anupriya and her team provided exceptional care for my family. The clinic is modern, clean, and the staff is incredibly professional. Highly recommended!',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      text: 'Best dental clinic in Hosur! The doctors are experienced and the treatment is painless. My kids love coming here for their dental check-ups.',
      rating: 5
    },
    {
      name: 'Meera Iyer',
      text: 'Outstanding service and patient care. The team explains everything clearly and makes you feel comfortable throughout the treatment. Thank you!',
      rating: 5
    }
  ];

  const facilities = [
    {
      icon: 'https://i.postimg.cc/K8WQsNj1/icon-parking.png',
      title: 'Free Parking',
      description: 'Convenient parking space available for all patients'
    },
    {
      icon: 'https://i.postimg.cc/X7zwVvbh/icon-wheel-chair.png',
      title: 'Wheelchair Access',
      description: 'Fully accessible facilities for patients with mobility needs'
    },
    {
      icon: 'https://i.postimg.cc/Twdyj8xg/icon-doctors.png',
      title: 'Expert Doctors',
      description: 'Team of qualified and experienced dental specialists'
    },
    {
      icon: 'https://i.postimg.cc/V6ZNjdDP/icon-city-center.png',
      title: 'City Center Location',
      description: 'Easily accessible location in the heart of Hosur'
    },
    {
      icon: 'https://i.postimg.cc/3JmvHFty/icon-pickup.png',
      title: 'Emergency Support',
      description: 'Available for dental emergencies and urgent care'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-pink-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Specialized Dental Care for 
                <span className="text-sky-600"> Women, Children</span> & 
                <span className="text-pink-600"> Families</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience comprehensive dental care with our team of expert dentists in Hosur. 
                We provide gentle, professional treatment for patients of all ages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors flex items-center justify-center space-x-2 group"
                >
                  <span>Fix an Appointment</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact#emergency"
                  className="bg-pink-100 text-pink-700 px-8 py-4 rounded-lg font-semibold hover:bg-pink-200 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Emergency Dental Support</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.postimg.cc/rwG2RTX9/Banner-img-1.jpg"
                alt="Banner-image" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Banner */}
      <section className="bg-sky-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            You are always in safe hands. We are ready to help, anytime.
          </h2>
          <p className="text-xl text-sky-100">
            Your trusted dental care partner in Hosur
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sakthi Dental Clinic?
            </h2>
            <p className="text-xl text-gray-600">
              We provide exceptional dental care with a patient-first approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">All-in-One Care</h3>
              <p className="text-gray-600">
                Complete dental solutions under one roof for all family members
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Experienced Doctors</h3>
              <p className="text-gray-600">
                Team of qualified specialists with years of professional experience
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Patient-Centric Approach</h3>
              <p className="text-gray-600">
                Personalized care tailored to each patient's unique needs
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Technology-Driven Services</h3>
              <p className="text-gray-600">
                Advanced dental technology for precise and comfortable treatment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Key Treatments
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive dental care services for optimal oral health
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from our valued patients
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-sky-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Clinic Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Modern amenities for your comfort and convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={facility.icon} 
                    alt={facility.title}
                    className="w-16 h-16 mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;