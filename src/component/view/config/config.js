// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';

// =============================================================================
// Import base components.
// =============================================================================
import Anchor from '/component/base/anchor';
import Code from '/component/base/code';
import Container from '/component/base/container';
import Heading from '/component/base/heading';
import Paragraph from '/component/base/paragraph';

// =============================================================================
// Import partial components.
// =============================================================================
import SoureceLink from '/component/partial/source-link';

// =============================================================================
// Import local components.
// =============================================================================
import BreakpointList from './breakpoint-list';
import ColorList from './color-list';
import LayoutList from './layout-list';
import TypographyList from './typography-list';

const Config = () =>
  <Container>
    <div>
      <Anchor>
        <Heading level={1}>Style Config</Heading>
      </Anchor>
      <Paragraph>
        Any variables controlling aspects of the generated styles are stored
        in the <Code>src/config</Code> directory. These values are univerasally
        accessible to all <Code>.css</Code> and <Code>.js</Code> files in the
        project.
      </Paragraph>

      <Anchor>
        <Heading level={2}>Breakpoint Config</Heading>
      </Anchor>
      <Paragraph>
        <SoureceLink>src/config/breakpoint.config.js</SoureceLink>
      </Paragraph>
      <BreakpointList/>

      <Anchor>
        <Heading level={2}>Colors</Heading>
      </Anchor>
      <Paragraph>
        <SoureceLink>src/config/color.config.js</SoureceLink>
      </Paragraph>
      <ColorList/>

      <Anchor>
        <Heading level={2}>Layout Config</Heading>
      </Anchor>
      <Paragraph>
        <SoureceLink>src/config/layout.config.js</SoureceLink>
      </Paragraph>
      <LayoutList/>

      <Anchor>
        <Heading level={2}>Typographic Config</Heading>
      </Anchor>
      <Paragraph>
        <SoureceLink>src/config/typography.config.js</SoureceLink>
      </Paragraph>
      <TypographyList/>

    </div>
  </Container>;

Config.displayName = 'view/Config';

export default Config;
