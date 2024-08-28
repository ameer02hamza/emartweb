"use client";

import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { RootState } from "@/redux/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncre = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  useEffect(() => {
    dispatch(increment());
  }, []);
  return <main></main>;
}
