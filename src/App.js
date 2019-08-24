import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";

function App() {
  const placeholder = `# This is a ma big boy
Just write to the text area and you'll see on the previewer. Also we can **test** results from the  green menu at the left
of the screen..
## This is a our middle brother.
### And this is a little one.
  Text bolder: **bold**
  Italic : _italic_.
  both: **_both!_**
  
Heres some code, \`<div>I love coding.</div>\`.

\`\`\`

// Multi-line code:

<p> You need to write "\`\`\`" at first line.</p>
<p> And also you need to write "\`\`\`" at last line.</p>

\`\`\`
  

Links that open with a new tab to my github page: [links](https://www.github.com/baristure), and
> You'll like it..

1. Numbered lists:
1. I wrote 1 but list is goes on.
1. I wrote 1 but list is goes on.

- List items:
  - Some are bulleted.
    - With different indentation levels.
     - That look like this.
- Dashes
* Kıhhh

![Darth Vader w/ Text](https://bit.ly/31W4H2c)
`;
  return (
    <div className="App">
      <h1>
        Welcome to My MarkDown Previewer of FreeCodeCamp-Frontend Library
        Projects
      </h1>

      <Editor placeholder={placeholder} />
      <Preview />
    </div>
  );
}

export default App;
