'use client';
import React, {useEffect} from 'react'

export function HeaderClientComponent(props: { title: string }) {
  useEffect(() => {
    console.log('some useEffect in HeaderClientComponent');
  })

  return <div>
    { props.title }
  </div>
}
