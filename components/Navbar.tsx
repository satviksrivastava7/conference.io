import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav
      className="flex-between fixed z-50 w-full bg-gradient-to-l from-gradient-start from-[-22%] 
      via-gradient-mid via-34% to-gradient-end to-75% hover:border-b hover:border-gradient-start
      px-6 py-4 lg:px-10"
    >
      <Link
        href="/"
        className="flex items-center gap-5 align-middle justify-center"
      >
        <Image
          src="/icons/conference_logo.png"
          width={32}
          height={32}
          alt="conference.io logo"
          className="max-sm:size-10"
        />
        <div className="flex gap-0 justify-center align-middle flex-row">
          <p className="text-3xl font-semibold text-white max-sm:hidden">
            conference
          </p>
          <p className="text-3xl font-semibold text-gradient-start max-sm:hidden">
            .io
          </p>
        </div>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/sign-in"
            appearance={{
              elements: {
                userButtonAvatarBox: 'w-10 h-10',
                userButtonPopoverCard:
                  'bg-gradient-end border-gradient-start rounded-sm text-lg font-semibold',
                userButtonPopoverActionButton:
                  'text-ls font-semibold hover:text-gradient-start hover:bg-gradient-low',
              },
            }}
          />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
