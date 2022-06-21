/**
 * Things you could try:
 *
 * JSX.Element; NO! - This doesn't account for arrays at all.
 * JSX.Element | JSX.Element[]; NO! - This doesn't accept strings.
 * React.ReactNode; YES! - Anything that works as an HTML child (Which is string, another HTML element, a react component). Accepts everything. Accepts everything 
 * React.ReactChildren; NO! - Not at even an appropriate type; it's a utility function.
 * React.ReactChild[]; NO! - Accepts multiple children, but it doesn't accept a single child.
 */

 type BoxProps = { children: React.ReactNode };

// Box renders children.
// It can render more than one child.
// That child can be another React component.
// That child can be a standard HTML element.
 const Box = ({ children }: BoxProps) => {
   return (
     <section style={{ padding: "1em", border: "5px solid purple" }}>
       {children}
     </section>
   );
 };
 
 export default function Application() {
   return (
     <Box>
       Just a string.
       <p>Some HTML that is not nested.</p>
       <Box>
         <h2>Another React component with one child.</h2>
       </Box>
       <Box>
         <h2>A nested React component with two children.</h2>
         <p>The second child.</p>
       </Box>
     </Box>
   );
 }
 