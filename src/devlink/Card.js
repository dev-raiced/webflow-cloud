"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Card({ as: _Component = _Builtin.Block }) {
  return (
    <_Component tag="div">
      <_Builtin.Image
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
      />
      <_Builtin.Block tag="div">
        {"This is some text inside of a div block."}
      </_Builtin.Block>
    </_Component>
  );
}
