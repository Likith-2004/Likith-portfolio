import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Brain Tumor Detection",
    category: "Medical AI System",
    tools:
      "PyTorch, ResNet18, Grad-CAM, Flask, Deep Learning",
    image: "/images/Braintumor-p1.png",
  },

  {
    title: "Chest Pneumonia Detection",
    category: "Healthcare AI",
    tools:
      "CNN, PyTorch, Explainable AI, Flask, Medical Imaging",
    image: "/images/chest-p2.png",
  },

  {
    title: "Number Plate Detection & OCR",
    category: "Computer Vision",
    tools:
      "YOLOv8, OpenCV, OCR, Flask, Real-Time Detection",
    image: "/images/plate-p3.png",
  },

  {
    title: "Credit Card Fraud Detection",
    category: "Machine Learning",
    tools:
      "XGBoost, SHAP, Flask, SMOTE, Anomaly Detection",
    image: "/images/credit-p4.png",
  },

  {
    title: "Fake News Detection",
    category: "Natural Language Processing",
    tools:
      "Machine Learning, NLP, TF-IDF, Flask, Python",
    image: "/images/fake-p5.png",
  },

  {
    title: "Oil Spill Detection",
    category: "Satellite Image Analysis",
    tools:
      "OpenCV, Deep Learning, Image Processing, Python",
    image: "/images/oil-p6.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;

      setIsAnimating(true);
      setCurrentIndex(index);

      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1
        ? 0
        : currentIndex + 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">

        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">

          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">

                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>

                      <div className="carousel-details">
                        <h4>{project.title}</h4>

                        <p className="carousel-category">
                          {project.category}
                        </p>

                        <div className="carousel-tools">
                          <span className="tools-label">
                            Technologies Used
                          </span>

                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                      />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex
                    ? "carousel-dot-active"
                    : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Work;