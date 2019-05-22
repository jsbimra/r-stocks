import Link from 'next/link';

export default function Header() {
    return (
        <div className="header mt-4">
            <h1 className="text-center">NSE Stock</h1>
            <div className="nav justify-content-center mt-2">
                <Link href="/">
                    <a className="nav-link">Home</a>
                </Link>
                <Link href="/about">
                    <a className="nav-link">About</a>
                </Link>
            </div>
        </div>
    );
}

// export default Header;
