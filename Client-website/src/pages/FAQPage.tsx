import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';

const FAQPage = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can medication completely relieve tooth pain?',
      answer: 'Not entirely. While medications may offer short-term relief, long-lasting relief requires identifying and treating the root cause of the pain through professional dental care.'
    },
    {
      question: 'Does teeth scaling cause enamel damage, sensitivity, or gaps between teeth?',
      answer: 'No. Scaling safely removes plaque and tartar from teeth and below the gum line. It doesn\'t damage enamel or create gaps. Some temporary sensitivity may occur, but it usually subsides as gums heal and reattach to the teeth.'
    },
    {
      question: 'Can fluorosis stains be removed through scaling?',
      answer: 'Scaling can remove surface (extrinsic) stains but not fluorosis, which is an internal (intrinsic) stain. Fluorosis may require treatments like bleaching, veneers, or crowns for cosmetic improvement.'
    },
    {
      question: 'Can painful teeth be treated with fillings?',
      answer: 'Not always. If the cavity has reached the pulp—the innermost layer of the tooth—simple filling won\'t help. In such cases, root canal treatment or tooth extraction might be necessary. Fillings are effective only when the damage is limited to the outer layers (enamel and dentin).'
    },
    {
      question: 'Is placing a cap or crown necessary after root canal treatment (RCT)?',
      answer: 'Yes. A crown is recommended after RCT to protect the treated tooth, which may be weaker due to decay. It prevents fractures and adds durability, especially during chewing.'
    },
    {
      question: 'Can milk teeth need root canal treatment (RCT)?',
      answer: 'Yes. If a milk tooth has a deep cavity and is likely to remain in the mouth for some time, an RCT can preserve it and prevent infection or early loss.'
    },
    {
      question: 'How can I maintain good oral hygiene?',
      answer: 'Brush your teeth twice daily with proper technique, rinse after meals, floss regularly, and schedule routine check-ups with your dentist to maintain healthy teeth and gums.'
    },
    {
      question: 'What is the best age to get braces?',
      answer: 'Braces are most effective between ages 12 and 14, when the jaw and teeth are still developing. However, some cases may benefit from earlier intervention depending on the condition.'
    },
    {
      question: 'Do all wisdom teeth need to be removed?',
      answer: 'No. Wisdom teeth only require removal if they are impacted, infected, or causing pain due to crowding or damage to adjacent teeth.'
    },
    {
      question: 'Is it important to replace missing teeth after extraction?',
      answer: 'Yes. Replacing extracted teeth helps maintain proper bite alignment and prevents adjacent teeth from shifting, which can affect chewing and overall oral function.'
    },
    {
      question: 'What are the benefits of dental implants?',
      answer: 'Dental implants restore both the appearance and functionality of missing teeth. They provide a stable, natural-looking solution that can improve confidence and overall quality of life.'
    },
    {
      question: 'Which type of toothbrush and toothpaste should I use?',
      answer: 'Use a soft or medium-bristled toothbrush with a small head for better reach. Choose a non-abrasive fluoride toothpaste and replace your toothbrush every three months for optimal hygiene.'
    },
    {
      question: 'What causes tooth sensitivity?',
      answer: 'Tooth sensitivity can result from enamel wear (due to attrition or abrasion), tooth decay, exposed tooth roots, or hairline cracks in the teeth.'
    },
    {
      question: 'How often should I see a dentist?',
      answer: 'Visiting your dentist every six months is recommended for routine check-ups, professional cleaning, and preventive care to maintain good oral health.'
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common dental questions and concerns. Our expert team 
              has compiled these responses to help you make informed decisions about your oral health.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openQuestion === index ? (
                      <Minus className="h-6 w-6 text-sky-600" />
                    ) : (
                      <Plus className="h-6 w-6 text-sky-600" />
                    )}
                  </div>
                </button>
                
                {openQuestion === index && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experienced dental team is here to help. Contact us for personalized 
            answers to your specific dental concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/contact"
              className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Call Now: +91 9862890897
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;