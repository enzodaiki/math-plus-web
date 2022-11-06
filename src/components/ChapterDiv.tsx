import React from "react";
import '../styles/reset.css'

export function ChapterDiv(props: any) {
  return (
    <div className="colors flex justify-between w-full h-36 rounded-3xl my-shadow" style={{backgroundColor: props.color}}>{props.children}</div>
  );
}
