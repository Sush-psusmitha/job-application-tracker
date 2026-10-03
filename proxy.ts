import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";

export default async function proxy(request: NextRequest) {
    const session = await getSession();
    // const isDashboardPage = request.nextUrl.pathname.startsWith("/dashboard");
    // if (isDashboardPage && !session?.user) {
    //     return NextResponse.redirect(new URL("/sign-in", request.url));
    // }

    const isSignInPage = request.nextUrl.pathname.startsWith("/sign-in");
    const isSignUpPage = request.nextUrl.pathname.startsWith("/sign-up");

    if ((isSignInPage || isSignUpPage) && session?.user) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}


// proxy or middleware means if a person is log in he must be in dashboad url though if he tries to be in login or sigh up page it's redirects too dashboard, 
//if a person is not login and try to navigate to dashboard page, it will automatically navigate to signin pagee