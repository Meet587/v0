import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-muted p-6 md:py-12 w-full">
            <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                <div className="grid gap-1">
                    <h3 className="font-semibold">Quick Links</h3>
                    <Link className='flex' href="#" prefetch={false}>
                        Home
                    </Link>
                    <Link href="#" prefetch={false}>
                        Projects
                    </Link>
                    <Link href="#" prefetch={false}>
                        Experience
                    </Link>
                    <Link href="#" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" prefetch={false}>
                        Contact
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Social</h3>
                    <Link href="#" prefetch={false}>
                        LinkedIn
                    </Link>
                    <Link href="#" prefetch={false}>
                        GitHub
                    </Link>
                    <Link href="#" prefetch={false}>
                        Twitter
                    </Link>
                    <Link href="#" prefetch={false}>
                        Instagram
                    </Link>
                </div>
                {/* <div className="grid gap-1">
                    <h3 className="font-semibold">Legal</h3>
                    <Link href="#" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="#" prefetch={false}>
                        Terms of Service
                    </Link>
                </div> */}
                <div className="grid gap-1">
                    <h3 className="font-semibold">Contact</h3>
                    <p>
                        Meet Rakholiya
                        <br />
                        Ahmedabad, India
                    </p>
                    <p>
                        Email:{" "}
                        <Link href="#" prefetch={false}>
                            meet.rakholiya.w1@gmail.com
                        </Link>
                    </p>
                </div>
            </div>
            <div className="container max-w-7xl mt-8 text-center text-xs text-muted-foreground">
                &copy; 2024 Meet Rakholiya. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;