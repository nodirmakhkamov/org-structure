/**
 * Vercel Edge Middleware — IP-based access restriction
 *
 * Allowed office IP: ALLOWED_IP (see below)
 * All other visitors receive a 403 "Access Restricted" page.
 *
 * HOW TO UPDATE THE ALLOWED IP:
 *   1. Change the value of ALLOWED_IP below.
 *   2. Commit and push — Vercel redeploys automatically.
 *
 * This middleware runs at the edge BEFORE any rewrites defined in vercel.json,
 * so it cannot be bypassed by manipulating the URL.
 */

const ALLOWED_IP = '87.192.225.76';

// ---------------------------------------------------------------------------
// "Access Restricted" page — returned inline so no redirect is needed and
// none of the real site content is ever fetched for blocked visitors.
// ---------------------------------------------------------------------------
const BLOCKED_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Restricted</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                   'Helvetica Neue', Arial, sans-serif;
      background: #f0f2f5;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card {
      background: #ffffff;
      border-radius: 14px;
      padding: 52px 44px 48px;
      max-width: 460px;
      width: 90%;
      text-align: center;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    }

    .icon-wrap {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 72px;
      height: 72px;
      background: #fef2f2;
      border-radius: 50%;
      margin-bottom: 28px;
    }

    .icon-wrap svg {
      width: 34px;
      height: 34px;
      color: #c0392b;
      stroke: currentColor;
    }

    h1 {
      font-size: 1.45rem;
      font-weight: 700;
      color: #111827;
      margin-bottom: 14px;
      letter-spacing: -0.01em;
    }

    p {
      font-size: 1rem;
      line-height: 1.65;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon-wrap">
      <!-- Padlock icon (inline SVG, no external dependencies) -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
           stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    </div>

    <h1>Access Restricted</h1>
    <p>This resource is only available on the&nbsp;company&nbsp;internal&nbsp;network.</p>
  </div>
</body>
</html>`;

// ---------------------------------------------------------------------------
// Middleware logic
// ---------------------------------------------------------------------------
export default function middleware(request) {
  // Vercel exposes request.ip directly on the Edge Runtime.
  // x-real-ip and x-forwarded-for are kept as belt-and-suspenders fallbacks.
  const ip =
    request.ip ??
    request.headers.get('x-real-ip') ??
    (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim();

  if (ip === ALLOWED_IP) {
    // Office network — let the request pass through to the static files.
    return;
  }

  // Everyone else gets the restricted page.
  // Returning a Response here short-circuits Vercel's routing entirely;
  // the real site content is never fetched or leaked.
  return new Response(BLOCKED_PAGE, {
    status: 403,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, no-cache',
    },
  });
}

// Run on every path so photos and other assets are also protected.
export const config = {
  matcher: '/(.*)',
};
