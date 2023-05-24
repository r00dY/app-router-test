'use client';
import React, {useEffect} from 'react'

export function HeaderClientComponent(props: { title: string }) {
  useEffect(() => {
    console.log('some useEffect in BaseConfigRenderer');
  })

  return <div>
    { props.title }
  </div>
}
