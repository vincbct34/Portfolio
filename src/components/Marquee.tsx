import { MARQUEE_TAGS } from "../data/content";

function Group() {
  return (
    <div className="marquee__group" aria-hidden="true">
      {MARQUEE_TAGS.map((tag) => (
        <span className="marquee__item" key={tag}>
          {tag}
          <span className="marquee__star">✦</span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        <Group />
        <Group />
      </div>
    </div>
  );
}
