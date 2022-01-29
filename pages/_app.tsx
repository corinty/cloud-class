import Link from "next/link";
import "../styles/globals.css";
import "../node_modules/water.css/out/water.min.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { ReactChild } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="mx-autu" style={{ paddingTop: "10vh" }}>
            <nav>
                <ul className="flex gap-2">
                    <li>
                        <ActiveLink href="/">Home</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/about">About</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/uses">Uses</ActiveLink>
                    </li>
                </ul>
            </nav>

            <Component {...pageProps} />
        </div>
    );
}
const ActiveLink: React.FC<{ href: string }> = ({ href, children }) => {
    const router = useRouter();
    return (
        <Link href={href} passHref>
            <a className={router.pathname == href ? "active" : ""}>{children}</a>
        </Link>
    );
};

export default MyApp;
