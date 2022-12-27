import 'react'

declare module 'react' {
  interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
    width?: number | string
    height?: number | string
  }

  interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    imagesizes?: string
    imagesrcset?: string
    fetchpriority?: 'high' | 'low' | 'auto'
  }

  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto'
  }
}