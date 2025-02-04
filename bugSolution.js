```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Next.js 15 App</h1>
      <p>This is a simple Next.js app.</p>
      <MyComponent/>
    </div>
  );
}

import MyComponent from '../components/MyComponent';

// components/MyComponent.js
export default function MyComponent() {
  return (
    <div> 
       <p>This is a child component</p>
    </div>
  );
}
```