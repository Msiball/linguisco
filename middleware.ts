import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/student-dashboard(.*)"]); ///add register page to this array
///should set password requirements in clerk
//add a msg on clerk page showing to check spam and every folder for emails
////add all the protected routes to the protected array
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});
