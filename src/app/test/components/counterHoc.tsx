import { useState } from "react";

const CounterHoc = (OldComponent: any) => {
  return function EnhancedComponent(props: any) {
    const [count, setCount] = useState(0);
    return (
      <OldComponent
        {...props}
        count={count}
        increment={() => setCount(count + 1)}
      />
    );
  };
};
export default CounterHoc;
