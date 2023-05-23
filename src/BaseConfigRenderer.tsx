'use client';
import React, {useEffect} from 'react'
import {BaseConfig} from "@/Config";

export function BaseConfigRenderer(props: { baseConfig: BaseConfig }) {
  useEffect(() => {
    console.log('some useEffect');
  })

  return <div>
    { props.baseConfig.number } { props.baseConfig.string }
  </div>
}
