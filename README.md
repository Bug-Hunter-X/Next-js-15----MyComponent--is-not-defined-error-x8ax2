# Next.js 15 - 'MyComponent' is not defined

This repository demonstrates a common error in Next.js 15 applications where a component is seemingly correctly imported and rendered, yet a 'MyComponent' is not defined error is thrown during runtime. 

The issue stems from a misconfiguration in the Next.js app directory structure or the usage of client-side components without proper handling.  The solution involves verifying the file structure and ensuring components are correctly exported and imported, or, if applicable, using `dynamic` import.

## Steps to Reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`

You will observe the error message. Refer to the solution file for how to fix this. 