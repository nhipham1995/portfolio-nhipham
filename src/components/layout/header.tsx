"use client";

import { useContext, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ListIcon, ChevronUpIcon, CloseIcon, ChevronDownIcon } from "../svgs";
import Image from "../ui/image";
import ThemeSwitch from "../theme-switch";
import { ClickCounterContext } from "@/provider";
import Link from "next/link";
import HomeIcon from "../svgs/home";
import Container from "../container";

const products = [
  {
    name: "Tic-toc-toe",
    description: "Jouer Toc-tic-toe avec nous",
    href: "/projects/tictoctoe",
  },
  {
    name: "MobaLib",
    description: "Regarder mes missions chez MobaLib",
    href: "/projects/mobalib",
  },
  {
    name: "LIFAT",
    description: "Regarder mes missions chez MobaLib",
    href: "/projects/lifat",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { clickCounter, setClickCounter } = useContext(ClickCounterContext);
  const pathname = usePathname();
  const mainPathname = pathname.split("/")[1];
  return (
    <header
      onClick={() => {
        setClickCounter(clickCounter + 1);
      }}
    >
      <nav aria-label="Global">
        <Container className="font-kennerly flex items-center justify-between  p-6 lg:px-8">
          <div className="flex lg:flex-1">
            {mainPathname === "blogs" ? (
              <Link href={"/"}>
                <HomeIcon
                  size={30}
                  className="fill-primary-500 dark:fill-gray-400 hover:fill-primary-700 dark:hover:fill-gray-200 transition cursor-pointer"
                />
              </Link>
            ) : (
              <Link href="/" className="-m-1.5 p-1.5 cursor-pointer">
                <span className="sr-only">Nhi PHAM</span>
                <Image
                  width={100}
                  height={100}
                  alt={"Portrait"}
                  src={"/images/portrait.png"}
                  className="w-16  md:w-20 lg:w-28"
                  size="(max-width: 600px) 12vw, (max-width: 800px) 8vw,(max-width: 1200px) 6vw, 7vw"
                />
              </Link>
            )}
          </div>

          <div className="flex gap-5 lg:hidden">
            <div className="lg:hidden flex justify-end">
              <ThemeSwitch />
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(true);
              }}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <ListIcon
                size={28}
                className="p-1 rounded hover:bg-gray-200 fill-gray-400"
              />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/"
              className={clsx(
                {
                  "text-gray-900 dark:text-gray-50 font-bold bg-hover-bg":
                    mainPathname === "about",
                },
                "py-0.5 px-4 font-medium leading-6 text-gray-700 xl:text-lg hover:text-gray-900 transition hover:text-semibold hover:bg-hover-bg hover:bg-contain dark:text-primary-300 dark:hover:text-gray-50"
              )}
            >
              Accueil
            </Link>
            <Popover className="relative">
              <PopoverButton
                className={clsx(
                  {
                    "text-gray-900 dark:text-gray-50 bg-hover-bg":
                      mainPathname === "projects",
                  },
                  "flex items-center gap-x-1 py-0.5 px-3 hover:bg-hover-bg hover:bg-contain font-medium xl:text-lg leading-6  text-gray-700 hover:text-gray-900 dark:text-primary-300 dark:hover:text-gray-50"
                )}
                onClick={() => setClickCounter(clickCounter + 1)}
              >
                Projets
                <ChevronUpIcon
                  size={10}
                  className="fill-primary-800 dark:fill-primary-300 "
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in dark:bg-primary-700"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-primary-600"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:group-hover:bg-white">
                        <Image
                          src="/images/tick.png"
                          height={40}
                          width={40}
                          alt={`Demonstration mission ${item}`}
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900  dark:text-primary-200  dark:group-hover:text-primary-100 "
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600 font-extralight dark:text-gray-400 dark:group-hover:text-primary-200 ">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <Link
              href="/blogs"
              className={clsx(
                {
                  "text-gray-900 dark:text-gray-50 bg-hover-bg":
                    mainPathname === "blogs",
                },
                " py-0.5  font-medium leading-6 text-gray-700 xl:text-lg hover:text-gray-900 transition hover:text-semibold hover:bg-hover-bg hover:bg-cover dark:text-primary-300 dark:hover:text-gray-50"
              )}
            >
              Gallerie photo
            </Link>

            <ThemeSwitch />
          </PopoverGroup>
        </Container>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-primary-700">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Nhi PHAM</span>

              <Image
                width={70}
                height={70}
                alt={"Portrait"}
                src={"/images/portrait.png"}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>

              <CloseIcon
                size={30}
                className="p-2 rounded hover:bg-gray-300 fill-gray-400"
              />
            </button>
          </div>
          <div className="ml-2 mt-6 flow-root font-kennerly ">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-medium leading-7 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:bg-white hover:font-semibold dark:text-gray-200 dark:hover:text-gray-50 dark:hover:bg-primary-500"
                >
                  Accueil
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg font-medium leading-7 text-primary-700 hover:bg-gray-50 hover:text-gray-900 hover:font-semibold hover:bg-white dark:text-gray-200 dark:hover:text-gray-50 dark:hover:bg-primary-500">
                    Projets
                    <ChevronDownIcon
                      size={11}
                      className="fill-primary-700 dark:fill-primary-200"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-base hover:text-primary-300 text-gray-200 dark:text-primary-200 font-medium leading-7 text-gray-700 hover:bg-leafgreen-700 hover:font-semibold"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/blogs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-medium leading-7 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:bg-white hover:font-semibold dark:text-gray-200 dark:hover:text-gray-50 dark:hover:bg-primary-500"
                >
                  Gallerie Photo
                </Link>
              </div>
              {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold leading-7 text-slate-600 hover:bg-white hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50 dark:hover:bg-primary-500"
                >
                  Log in
                </a>
              </div> */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
