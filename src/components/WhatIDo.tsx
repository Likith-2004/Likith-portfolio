import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }

    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () =>
            handleClick(container)
          );
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* AI & Deep Learning */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI & DEEP LEARNING</h3>
              <h4>Building Intelligent AI Systems</h4>

              <p>
                Developing Deep Learning and Computer Vision applications using
                PyTorch, CNNs, YOLOv8, and Explainable AI techniques. Focused
                on healthcare AI, object detection, OCR systems, and real-time
                intelligent applications.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">PyTorch</div>
                <div className="what-tags">YOLOv8</div>
                <div className="what-tags">OpenCV</div>
                <div className="what-tags">CNN</div>
                <div className="what-tags">Grad-CAM</div>
                <div className="what-tags">Machine Learning</div>
                <div className="what-tags">Deep Learning</div>
                <div className="what-tags">OCR</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Full Stack & Deployment */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FULL STACK & DEPLOYMENT</h3>
              <h4>Deploying AI-Powered Applications</h4>

              <p>
                Building and deploying AI-powered web applications using Flask,
                MongoDB, and modern frontend technologies. Experienced in
                integrating Machine Learning models into scalable and
                user-friendly applications.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">PyTorch</div>
                <div className="what-tags">OpenCV</div>
                <div className="what-tags">Flask</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">Pandas</div>
                <div className="what-tags">PowerBI</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}