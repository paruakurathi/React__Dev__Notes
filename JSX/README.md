# Q ) What is JSX?
JSX stands for JavaScript XML. It's a syntax extension for JavaScript.
JavaScript engine cannot understand JSX as it only understands ECMAScript.

# Q ) If the browser can’t understand JSX how is it still working?
# Parcel
Before the code gets to JS Engine it is sent to Parcel and Transpiled there. Then after transpilation, the browser gets the code that it can understand.
### Transpilation ⇒ Converting the code in such a format that the browsers can understand.

### JSX (transpiled by Babel) ⇒ React.createElement ⇒ ReactElement ⇒ JS Object ⇒ HTML Element(render)
