// Import NextResponse from Next.js server utilities
import { NextResponse } from "next/server"

// Middleware function - runs on every request
// This is what Next.js expects for middleware files
export function middleware(request) {
    // Return the response unchanged for now
    // You can add authentication checks, logging, etc. here
    return NextResponse.next()
}

