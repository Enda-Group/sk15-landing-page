import React, {useEffect} from "react";
import './index.css';

interface HistoryItem {
  year: string;
  description: string;
  images: string[];
}

interface HistoryProps {
  data: HistoryItem[];
}

const History: React.FC<HistoryProps> = ({data}) => {
  useEffect(() => {
    const handleScroll = () => {
      const lines = document.querySelectorAll(".line");
      const hlines = document.querySelectorAll(".hline");
      const viewportHeight = window.innerHeight;

      // Vertical lines progress
      lines.forEach((line) => {
        const rect = line.getBoundingClientRect();
        const lineTop = rect.top;
        const percentage = (viewportHeight / 2 - lineTop) / (rect.height * 0.75);
        const progress = Math.max(0, Math.min(1, percentage)) * rect.height;

        (line as HTMLElement).style.background = `linear-gradient(to bottom, rgba(255, 0, 0, 1) ${progress}px, rgba(255, 0, 0, 0) ${progress}px)`;
      });

      // Horizontal lines progress
      hlines.forEach((hline, i) => {
        const rect = hline.getBoundingClientRect();
        const hlineTop = rect.top;
        const start = viewportHeight * 0.75;
        const end = viewportHeight * 0.25;
        const percentage = Math.max(0, Math.min((start - hlineTop) / end));
        const progress = percentage * rect.width;

        if (i % 2 === 0) {
          (hline as HTMLElement).style.background = `linear-gradient(to right, rgba(255, 0, 0, 1) ${progress}px, rgba(255, 0, 0, 0) ${progress}px)`;
        } else {
          (hline as HTMLElement).style.background = `linear-gradient(to left, rgba(255, 0, 0, 1) ${progress}px, rgba(255, 0, 0, 0) ${progress}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {data.map((item, index) => (
          [<div key={index} className="section">
            {index % 2 === 0 && <div className="line left"></div>}
            <div className={`milestone ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="images">
                {item.images.map((image, imgIndex) => (
                  <img key={imgIndex} src={image} alt={`History ${item.year}`}/>
                ))}
                <h1 style={{
                  color: 'brown'
                }}>{item.year}</h1>
                <p style={{
                  color: 'brown'
                }}>{item.description}</p>
              </div>
            </div>
            {index % 2 === 1 && <div className="line right"></div>}
          </div>,
          <div key={`hline${index}`} className="hline"></div>]
        )
      )}
    </div>
  );
};

export default History;
