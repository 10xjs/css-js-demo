/* global require */
// =============================================================================
// Import lodash.
// =============================================================================
import flatten from 'lodash/fp/flatten';
import flow from 'lodash/fp/flow';
import groupBy from 'lodash/fp/groupBy';
import map from 'lodash/fp/map';
import toPairs from 'lodash/fp/toPairs';
import uniqBy from 'lodash/fp/uniqBy';

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
import Grid from '/component/base/grid';
import Heading from '/component/base/heading';
import Panel from '/component/base/panel';
import Paragraph from '/component/base/paragraph';
import RichText from '/component/base/rich-text';
import Row from '/component/base/row';

// =============================================================================
// Import partial components.
// =============================================================================
import SourceLink from '/component/partial/source-link';

const HIDDEN = /\/\* demo-hide-start \*\/[\S\s]*\/\* demo-hide-end \*\/\n?/g;

const context = require.context('./demo/', false, /\.demo\.js$/);

const demos = flow(
  map((key) => {
    const name = key.replace( /(\.[/\\]|\.demo\.js$)/g, '');
    const {render, description, sources, section} = context(key);
    const source = require(`!!raw-loader!./demo/${name}.demo.js`);

    const rawSources = map((path) => [
      path,
      require(`!!raw-loader!../../base/${path.replace(/\.js$/, '')}.js`),
    ], sources);

    return {name, section, render, source, description, sources: rawSources};
  }),
  groupBy('section'),
  toPairs,
  map(([section, demos]) =>
    <div key={section}>
      <Anchor>
        <Heading level={2}>{section}</Heading>
      </Anchor>

      {map(({name, render: Demo, source, description}) =>
        <div key={name}>
          <RichText dangerouslySetInnerHTML={{__html: description}}/>
          <Row>
            <Grid small={12} large={7}>
              <Code block lang='js'>
                {source.replace(HIDDEN, '')}
              </Code>
            </Grid>
            <Grid small={12} large={5}>
              <Panel>
                <Demo/>
              </Panel>
            </Grid>
          </Row>
        </div>,
      demos)}

      {flow(
        map('sources'),
        flatten,
        uniqBy(0),
        map(([path, source]) =>
          <details key={path}>
            <summary>
              <SourceLink>{`src/component/base/${path}`}</SourceLink>
            </summary>
            <Code block lang='js'>
              {source}
            </Code>
          </details>
        )
      )(demos)}
    </div>
  )
)(context.keys());

const Components = () =>
  <Container>
    <div>
      <Anchor>
        <Heading level={1}>Base Components</Heading>
      </Anchor>
      <Paragraph>
        Base presentational components with custom styles are defined in
        the <Code>src/components/base</Code> directory.
      </Paragraph>
      {demos}
      <Paragraph/>
    </div>
  </Container>;

Components.displayName = 'view/Components';

export default Components;
