import { useContext } from "react";

import AppContext from "./Contexts/AppContext";

import Group from "./components/Group";
import Link from "./components/Link";
import Text from "./components/Text";

/** Assets files */
import "./App.css";

const App: React.FC = () => {
  const { getTranslate } = useContext(AppContext);
  return (
    <>
      {getTranslate.groups.map((group, groupIndex) => {
        return (
          <Group key={groupIndex} title={group.name}>
            {group.description && <Text>{group.description}</Text>}
            {group.links.map((link, linkIndex) => {
              return (
                <Link
                  key={linkIndex}
                  name={link.name}
                  url={link.url}
                  image={{ url: link.image?.url, alt: link.name }}
                />
              );
            })}
          </Group>
        );
      })}
    </>
  );
};

export default App;
