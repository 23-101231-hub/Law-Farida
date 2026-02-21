import React, { useState } from "react";
import "./Section6.css";

const Section6 = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "How do I schedule an initial consultation?",
      answer:
        "You can book a consultation through our Contact page, call our office, or email us. We will confirm availability and the documents needed before your meeting."
    },
    {
      question: "What are your fee structures?",
      answer:
        "We offer hourly billing, fixed fees for defined scopes, and retainer arrangements. We will explain the best option after understanding your case and goals."
    },
    {
      question: "How long does it take to resolve a typical case?",
      answer:
        "Timelines vary by case type and court schedules. Some matters resolve in weeks, while complex disputes may take months. We provide a realistic estimate after review."
    },
    {
      question: "Do you handle cases outside your local jurisdiction?",
      answer:
        "Yes, depending on the matter. We can coordinate with local counsel where needed, and we will be transparent about any jurisdiction specific limitations."
    },
    {
      question: "What should I bring to my first meeting?",
      answer:
        "Bring any relevant contracts, emails, letters, timelines, IDs, and prior filings. If you are unsure, bring what you have, we will help you organize the details."
    }
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        <span className="faq-pill">FAQ</span>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-sub">
          Find answers to common questions about our services
        </p>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                className="faq-q"
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <span className="faq-arrow">⌄</span>
              </button>

              {openIndex === index && (
                <div className="faq-a">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
