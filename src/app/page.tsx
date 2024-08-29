"use client";

import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { RootState } from "@/redux/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from "./home/page";

export default function Home() {

  return <main>
    <HomeScreen />
  </main>;
}
