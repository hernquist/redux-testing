import React, { Fragment } from 'react'

export default function ShowTask({task}) {
  const { title, author, status } = task;
  return (
    <Fragment>
      <div>{title} task, by {author}</div>
      <div>STATUS: {status}</div> 
    </Fragment>
  )
}
