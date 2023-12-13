import React, { useState } from "react";
import "./faq.css"; 

const Faq = () => {
  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How to install React?",
      answer:
        "You can install React using npm or yarn. Run npm install react or yarn add react.",
    },
    {
      question: "Is React a framework or a library?",
      answer: "React is a library for building user interfaces.",
    },
    {
      question: "What are React components?",
      answer:
        "React components are reusable building blocks for building user interfaces in React applications.",
    },
    {
      question: "Can I use React with other libraries or frameworks?",
      answer:
        "Yes, React can be used in conjunction with other libraries and frameworks.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-container">
          <h1>FAQ</h1>
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span className="arrow">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
