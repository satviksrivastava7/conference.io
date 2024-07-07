'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section
      className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between 
      bg-gradient-to-t from-gradient-start from-[-22%] via-gradient-mid via-34% 
      to-gradient-end to-75% p-6 pt-28 text-white max-sm:hidden lg:w-[200px] 
      hover:border-r hover:border-gradient-start"
    >
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-2 rounded-sm justify-start hover:border hover:text-gradient-start hover:border-gradient-start',
                {
                  'bg-gradient-low text-gradient-start border border-gradient-start':
                    isActive,
                },
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={18}
                height={18}
              />
              <p className="text-md font-medium max-lg:hidden">{item.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
