export default function createHeading(level, content){
    const heading = document.createElement(`h${level}`);
    heading.textContent = content;
    return heading;
  };