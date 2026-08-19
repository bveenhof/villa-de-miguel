import {
    ContentSection,
    Footer,
    Hero,
} from "./organisms";

import {
  Map
} from "./molecules";

interface BaseSanityBlock {
  _type: string;
  _key: string;
  [key: string]: any; 
}

const componentMap: Record<string, React.ComponentType<any>> = {
    contentSection: ContentSection,
    footer: Footer, 
    hero: Hero,
    map: Map,
};

interface ComponentMapperProps {
  sections: BaseSanityBlock[];
}

export default function ComponentMapper({ sections }: ComponentMapperProps) {
  if (!sections || sections.length === 0) return null;

  return (
    <>
      {sections.map((section) => {
        const Component = componentMap[section._type];

        if (!Component) {
          console.warn(`No component found for type: ${section._type}`);
          return null;
        }

        return <Component key={section._key} {...section} />;
      })}
    </>
  );
}