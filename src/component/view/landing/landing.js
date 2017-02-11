// =============================================================================
// Import modules.
// =============================================================================
import {createElement} from 'react';

// =============================================================================
// Import base components.
// =============================================================================
import Code from '/component/base/code';
import Container from '/component/base/container';
import Grid from '/component/base/grid';
import RichText from '/component/base/rich-text';
import Row from '/component/base/row';

// =============================================================================
// Import config.
// =============================================================================
import {
  POST_URL,
  GITHUB_URL,
  REACT_URL,
  CSS_JS_LOADER_URL,
  CSS_LOADER_URL,
  WEBPACK_URL,
} from '/config/url.config';

// =============================================================================
// Import raw samples.
// =============================================================================
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import sampleRaw from '!!raw-loader!../../base/anchor/anchor.css';
import sampleCss from '!!raw-loader!postcss-loader?config=config/postcss!css-js-loader?pretty!babel-loader!../../base/anchor/anchor.css';
/* eslint-enable import/no-unresolved */
/* eslint-enable max-len */

const Landing = () =>
  <Container>
    <RichText>
      <h1>
        CSS JS Demo
      </h1>
      <p>
        This is an example <a target='_blank' href={REACT_URL}>React</a>{' '}
        project built using CSS JS styles parsed by{' '}
        <a target='_blank' href={CSS_JS_LOADER_URL}>
          <code>css-js-loader</code>
        </a>.
      </p>
      <h3>Basic Concept</h3>
      <ol>
        <li>
          CSS styles are defined as plain objects exported
          from <code>.css.js</code> files.
        </li>
        <li>
          At build time, <code>.css.js</code> file exports are converted to
          CSS markup.
        </li>
        <li>
          Converted CSS markup is processed
          by <a target='_blank' href={WEBPACK_URL}>Webpack</a>{' '}
          <a target='_blank' href={CSS_LOADER_URL}><code>css-loader</code></a>
          .
        </li>
      </ol>
      <p>
        Be sure to read the companion{' '}
        <a target='_blank' href={POST_URL}>blog post</a> and
        check out the <a target='_blank' href={GITHUB_URL}>GitHub source</a>.
      </p>
    </RichText>
    <Row>
      <Grid small={12}>
        <RichText>
          <h3>Example <code>.css.js</code> File Result</h3>
        </RichText>
      </Grid>
      <Grid small={12} large={6}>
        <Code block lang='js'>
          {sampleRaw}
        </Code>
      </Grid>
      <Grid small={12} large={6}>
        <Code block lang='css'>
          {sampleCss}
        </Code>
      </Grid>
    </Row>
  </Container>;

Landing.displayName = 'view/Landing';

export default Landing;
