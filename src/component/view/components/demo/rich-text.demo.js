import RichText from '/component/base/rich-text';
/* demo-hide-start */
import {createElement} from 'react';

export const section = 'RichText';

export const sources = [
  'rich-text/rich-text.js',
  'rich-text/rich-text.css.js',
];

export const description = `
<p>
  Since any default browser styles are reset using <Code>reset.css</Code>,
  basic presentational elements appear as unstyled block or inline elements.
</p>
<p>
  The <Code>Richtext</Code> component wraps basic elements and applies
  appropriate styles. This can be more convenient than importing base
  components and is a great way to format managed or loaded HTML content.
</p>
`;
/* demo-hide-end */

export const render = () =>
  <RichText>
    <h2>Argumentum</h2>
    <h3>Sit ad Ullum</h3>
    <p>
      Quidam <b>appellantur</b> et qui, ei vel stet percipit, accusata
      dignissim efficiendi ea quo. Scripta facilis signiferumque cu eam,
      his at persius verterem rationibus. Ius sale brute liberavisse an.
      Mea eu partem tincidunt. Te qualisque comprehensam sit, euripidis
      honestatis ad nam.
    </p>
    <h4>Sit ad Ullum</h4>
    <ul>
      <li>Ex his lobortis <b>necessitatibus</b>, vel labitur</li>
      <li>Errem recusabo cum ne, nobis minimum</li>
      <li>Per an aperiam feugiat convenire</li>
    </ul>
    <ol>
      <li>Ex his lobortis necessitatibus, vel labitur</li>
      <li>Errem recusabo cum ne, nobis minimum</li>
      <li>Per an aperiam <code>feugiat convenire</code></li>
    </ol>
  </RichText>;
