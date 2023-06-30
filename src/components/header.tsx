// mostly from Cali.so (great opensourced website! Thank you so much)
import { motion } from 'framer-motion'
import React from 'react'

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>Developer
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 dark:text-zinc-500 before:content-['|'] group-hover:visible group-hover:animate-typing" />
    </span>
  )
}

function OCD() {
  return (
    <span className="group">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" 
      >
        <path
          d="M4.35 17.4V18.75M4.35 18.75V20.1M4.35 18.75H5.7M4.35 18.75H3M12.9 3L13.2202 5.51971C13.6243 8.69877 16.0808 11.2281 19.2467 11.7249L21 12L19.2467 12.2751C16.0808 12.7719 13.6243 15.3012 13.2202 18.4803L12.9 21L12.5798 18.4803C12.1757 15.3012 9.71919 12.7719 6.5533 12.2751L4.8 12L6.5533 11.7249C9.71919 11.2281 12.1757 8.69877 12.5798 5.51971L12.9 3ZM5.7 3L5.76713 3.40758C5.95525 4.54964 6.85036 5.44475 7.99242 5.63286L8.4 5.7L7.99242 5.76713C6.85036 5.95525 5.95525 6.85036 5.76713 7.99242L5.7 8.4L5.63286 7.99242C5.44475 6.85036 4.54964 5.95525 3.40758 5.76713L3 5.7L3.40758 5.63286C4.54964 5.44475 5.44475 4.54964 5.63286 3.40758L5.7 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Focus</span>
    </span>
  )
}

function Self() {
    return (

    <span className="group">
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className='mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20'
    >
      <path
        d="M10 15H7C4.79086 15 3 16.7909 3 19C3 20.1046 3.89543 21 5 21H11.5M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM17.1132 14.0554L14.8073 14.7852C14.3598 14.9268 14.051 15.3162 14.0314 15.7637L14.0043 16.3814C13.9251 18.1856 14.9474 19.8718 16.6304 20.7128L16.9566 20.8759C17.2805 21.0377 17.6666 21.0415 17.9939 20.8861L18.2783 20.7511C20.079 19.8962 21.1501 18.0865 20.9829 16.1816L20.9432 15.7293C20.9055 15.2993 20.6014 14.932 20.1703 14.7955L17.8318 14.0554C17.5986 13.9815 17.3464 13.9815 17.1132 14.0554Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    Self-Lover
    </span>
    )
}


function Structurer() {
    return (
        <span className="group relative rounded-2xl bg-black/5 p-1 dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90">
        <span className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
      </span>
      Structurer
    </span>
    )
}

export default function Header() {
  return (
    <motion.h1
        className="font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />，<Structurer />，
        <br />
        <OCD />，<Self/>
      </motion.h1>
      )
}
